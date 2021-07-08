const { Pool } = require('pg');

const pool = new Pool({
  user: 'ag',
  password: 'secret',
  database: 'lets_travel'
});

pool.connect()
  .then(() => { console.log('Connected to DB'); })
  .catch((err) => { console.log('Not connected to DB', err); });

const getQuery = (id, cb) => {
  const result = {};
  const sql = `
    SELECT * FROM places WHERE place_id = ${id};
    SELECT url FROM images WHERE place_id = ${id};
  `;
  pool.query(sql)
  .then((data) => {
    result.place = data[0].rows[0];
    result.images = data[1].rows;
    cb(result);
  })
};

const postPotential = (id, cb) => {
  const sql = `INSERT INTO current (place_id) VALUES (${id.place_id});`;
  pool.query(sql)
  .then((res) => {
    return pool.query(`SELECT places.city, places.country
    FROM places
    INNER JOIN current ON current.place_id = places.place_id;`)
  })
  .then((data) => {
    cb(data.rows)
  })
};

module.exports = {
  getQuery,
  postPotential
}