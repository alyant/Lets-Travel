const { Pool } = require('pg');

const pool = new Pool({
  user: 'ag',
  password: 'secret',
  database: 'lets_travel'
});

pool.connect()
  .then(() => { console.log('Connected to DB'); })
  .catch((err) => { console.log('Not connected to DB', err); });

