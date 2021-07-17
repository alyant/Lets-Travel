const { Pool } = require('pg');
const { DB_PASSWORD, DB_USER } = require('../config.js')

const pool = new Pool({
  user: DB_USER,
  password: DB_PASSWORD,
  database: 'lets_travel',
  host: 'localhost',
  port: 5432,
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
    return pool.query(`SELECT places.city, places.country, places.place_id
    FROM places
    INNER JOIN current ON current.place_id = places.place_id;`)
  })
  .then((data) => {
    cb(data.rows)
  })
  .catch(err => cb('Already logged'));
};

const getPotential = (cb) => {
  const sql = `SELECT places.city, places.country, places.place_id
  FROM places
  INNER JOIN current ON current.place_id = places.place_id;`;
  pool.query(sql)
  .then((data) => {
    cb(data.rows)
  })
  .catch(err => cb(err));
};

const deletePotential = (id, cb) => {
  const sql = `DELETE FROM current WHERE place_id = ${id};`;
  pool.query(sql)
  .then(() => {
    getPotential(cb);
  })
  .catch((err) => {
    cb(err);
  });
};

module.exports = {
  getQuery,
  postPotential,
  getPotential,
  deletePotential
}