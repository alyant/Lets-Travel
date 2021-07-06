const express = require('express');
const app = express();
const PORT = 3400;
const db = require('../db/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hi")
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;