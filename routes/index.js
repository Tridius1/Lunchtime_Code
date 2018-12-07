var express = require('express');
var app = express();
var db = require('../config/db');


app.get('/', function(req, res){
  //var query = 'select username from users';
  //db.any(query).then(function(rows){
  
  //render views/index.ejs template file
    res.render('index', {title: 'INDEX PAGE'}) // data: rows})
 // )
});

module.exports = app;




var express = require('express');
var app = express();
var db = require('../config/db');


app.get('/foo', function(req, res){
  var query = 'select watchlist from users where username='joe' and password='password';';
  db.any(query).then(function(rows){
  
  render result as JSON object
    res.json(rows)
  )
});

module.exports = app;
