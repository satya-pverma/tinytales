var createError = require('http-errors');
var express = require('express');
var path = require('path');
const { json } = require('express')

var cors = require("cors");


var app = express();


app.use(cors());
// var talesApi =// require('./routes/talesApi');
// app.use(express.json())
// app.use("/talesApi", talesApi);

app.use(require('./routes/talesApi'))


if (process.env.NODE_ENV == "production") {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


module.exports = app;
