const express = require('express');
const app = express();
const PORT = 3400;
const db = require('../db/index.js');
const { getQuery, postPotential } = require('../db/index.js');


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.get('/nextPlace', (req, res) => {
  let nextRandomID = Math.floor(Math.random() * 30);
  if (nextRandomID === 0) {
    nextRandomID = 30;
  }
  getQuery(nextRandomID, (data) => {
    res.send(data);
  })
})

app.post('/postPlace', (req, res) => {
  postPotential(req.body, (data) => {
    res.send(data);
  })
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;