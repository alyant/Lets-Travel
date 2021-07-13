const express = require('express');
const app = express();
const PORT = 4000;
const db = require('../db/index.js');
const { getQuery, postPotential, getPotential, deletePotential } = require('../db/index.js');


//app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/nextPlace', (req, res) => {
  let nextRandomID = Math.floor(Math.random() * 30);
  if (nextRandomID === 0) {
    nextRandomID = 30;
  }
  getQuery(nextRandomID, (data) => {
    res.send(data);
  })
});

app.post('/postPlace', (req, res) => {
  postPotential(req.body, (data) => {
    res.send(data);
  })
});

app.get('/getPotential', (req, res) => {
  getPotential((data) => {
    res.send(data);
  })
});

app.put('/deletePotential', (req, res) => {
  deletePotential(req.body.id, (data) => {
    res.send(data);
  })
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;