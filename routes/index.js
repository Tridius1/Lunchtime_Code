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
