var express = require('express');
var app = express();


app.get('/', function(req, res){
  //render views/signup.ejs template file
  res.render('pages/login', {title: 'this is the login page'})
});

module.exports = app;
