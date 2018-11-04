var express = require('express');
var app = express();

app.get('/', function(req, res){
  //render views/index.ejs template file
  res.render('index', {title: 'INDEX PAGE'})
});

module.exports = app;
