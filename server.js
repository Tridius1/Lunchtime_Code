//server.js

const express = require('express');
const bodyParser = require('body-parser');
var db = require('./config/db');

const app = express();
const http = require('http');
const hostname = '127.0.0.1';

const routes = require('./app/app');

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 5000;

http.createServer(routes.handleRequest).listen(PORT, hostname, () => {
  console.log('Listening on port ' + PORT + '...');
});
 
// use this so Express can process URL encoded forms, youll see the body of the post in the terminal
app.use(bodyParser.urlencoded({extended: true}));
