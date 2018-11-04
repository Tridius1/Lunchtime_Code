var express = require('express');
var app = express();
var db = require('../config/db');


app.get('/', function(req, res){
  //render views/index.ejs template file
  res.render('signup', {title: 'SIGNUP PAGE'})
});

module.exports = app;

