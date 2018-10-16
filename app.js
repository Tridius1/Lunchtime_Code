// https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
// node_modules/server.js

const express = require('express');
const bodyParser = require('body-parser');
var db = require('./config/db');

const app = express();
const http = require('http');
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

/*
const Client = require('pg');
const client = new Client({
  connectionString: DATABASE_URL,
});

client.connect()
  .then(() => client.query('SELECT * from userDB'))
  .then((result) => {
    res.end('${result.rows[0].name}\n');
    client.end();
  });
*/


// use arrow syntax to display stuff on console
app.get('/', (req, res) =>{
  res.send('home page');
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

app.listen(PORT,hostname, () => {
  console.log('Listening on port ' + PORT + '...');
});


// use this so Express can process URL encoded forms, youll see the body of the post in the terminal
// key value pairs in postman written in x-www-for-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
