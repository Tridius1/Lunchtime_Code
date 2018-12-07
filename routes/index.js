var express = require('express');
var db = require('../config/db');
var app = express();
var session = require('express-session');
var https = require('axios');
var jsonQuery = require('json-query');

app.get('/', function (request, response) {
    //var query = 'select watchlist from users where id = $1';

    db.any('select watchlist from users where id = $1', 1)
    .then(data => {
            request.flash('success', 'Data returned successfully!');

            //WILL USE THIS LINE BELOW
            //var myList = data[0].watchlist;

            //LINE BELOW IS FOR TESTING
            var myList = ['WFC', 'AMD', 'CHK'];
            var highs = [];
            https.get('https://api.iextrading.com/1.0/stock/market/list/mostactive')
            .then(function(res) {
              myList.forEach(function(symbol) {
                highs.push(jsonQuery('data.[symbol='+ symbol +'].high', {data: res}).value);
              });

              response.render('index', {
               title: 'INDEX PAGE',
               x: Array.from(Array(highs.length).keys()),
               y: highs
              });

          }).catch(function(error) {
            console.log(error);
          });
    })
    .catch(function (err) {
        // display error message in case an error
        request.flash('error', err);
        response.render('index', {
          title: 'INDEX PAGE',
          x1: '',
          x2: ''
       })
    })
});



module.exports = app;
