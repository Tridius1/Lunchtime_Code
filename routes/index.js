var express = require('express');
var db = require('../config/db');
var app = express();
var https = require('axios');
var jsonQuery = require('json-query');

module.exports = app;

app.get('/', function (request, response) {
    //var query = 'select watchlist from users where id = $1';
  // if(request.session.user)
    //console.log(id);
    res.status(200).send('ok');
    
    if(request.session.user){
    var id = request.session.user.id;
    db.any('select watchlist from users where id = $1', id)
    .then(data => {
            request.flash('success', 'Data returned successfully!');

            var myList = data[0].watchlist;

            //LINE BELOW IS FOR TES//console.log(request.session.user.id);TING
            //var myList = ['WFC', 'AMD', 'CHK'];

            var highs = [];
            https.get('https://api.iextrading.com/1.0/stock/market/list/mostactive')
            .then(function(res) {
              myList.forEach(function(symbol) {
                highs.push(jsonQuery('data.[symbol='+ symbol +'].high', {data: res}).value);
              });

              response.render('index', {
               title: 'INDEX PAGE',
               user: request.session.user,
               x: Array.from(Array(highs.length).keys()),
               y: highs
              });

          }).catch(function(error) {
            console.log(error);
          });
    })
    .catch(function (err) {
        request.flash('error', err);
        response.render('index', {
          title: 'INDEX PAGE',
          user: request.session.user,
          x1: '',
          x2: ''
       })
    })
  }
  else{
    var err = new Error("Not logged in!");
    response.redirect('/login');
  }
});
