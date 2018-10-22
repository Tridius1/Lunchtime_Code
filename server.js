//server.js

var express = require('express');
var  bodyParser = require('body-parser');
var db = require('./config/db');
var app = express();

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 5000;

// set engine to ejs
app.set('view engine', 'ejs');

// index
app.get('/', function(req, res){
  res.render('pages/index');
});

// sign up
app.get('/signup', function(req, res){
  res.render('pages/signup');
});

// log in
app.get('/login', function(req, res){
  res.render('pages/login');
});

// stockSelect
app.get('/stockSelect', function(req, res){
  res.render('pages/stockSelect');
});

app.listen(PORT);
console.log('Listening on port ' + PORT + '...');

//Tell node to look into views for css/js/img 
app.use(express.static(__dirname + '/views'));
 
// use this so Express can process URL encoded forms, youll see the body of the post in the terminal
app.use(bodyParser.urlencoded({extended: true}));

