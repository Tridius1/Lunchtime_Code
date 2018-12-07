var express = require('express');
var db = require('../config/db');
var app = express();
module.exports = app;


app.get('/', function(req, res){
  res.render('pages/signup', {
    title: 'this is the singup page',
    email: '',
    user: '',
    password: ''
    })
});

// Load user into database
// Servers listens to a post request and executes this function
// upon that request at the /signup endpoint
app.post('/', function(request, response){
  request.assert('email', 'email is required').notEmpty();
  request.assert('user', 'user is required').notEmpty();
  request.assert('password', 'password is required').notEmpty();

  var errors = request.validationErrors();
    if (!errors) { // No validation errors
	var item = {
            // sanitize() is a function used to prevent Hackers inserting into db
            email: request.sanitize('email').escape().trim(),
            user: request.sanitize('user').escape().trim(),
            password: request.sanitize('password').escape().trim(),
	          watchlist: '{"WFC", "AMD", "CHK"}'
        };
   //console.log(item.email);

   var query = "insert into users values(DEFAULT, '" + item.email + "', '" + item.user + "', '" + item.password + "','" + item.watchlist + "');";
   //console.log(query);
	 db.none(query)
            .then(function (result) {
                request.flash('success', 'Data added successfully!');

                response.render('pages/signup', {
                    email: '',
                    user: '',
                    password: ''
                })
            }).catch(function (err) {
            request.flash('error', err);
            response.render('pages/signup', {
	              email: item.email,
                user: item.user,
                password: item.password,
		            watchlist: item.watchlist
            })
        })
    } else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('pages/signup', {
            email: request.body.email,
            user: request.body.user,
            password: request.body.password
        })
    }
});
