var express = require('express');
var db = require('../config/db');
var app = express();
module.exports = app;

app.get('/', function(req, res){
  	//render views/login.ejs template file
  	res.status(200).send('ok');
  	
  	res.render('pages/login', {
  		title: 'this is the login page',
    	user: '',
    	password: ''
	})
});

// upon that request at the /login endpoint
app.post('/', function(request, response){
  request.assert('user', 'user is required').notEmpty();
  request.assert('password', 'password is required').notEmpty();

  var errors = request.validationErrors();
    if (!errors) { // No validation errors
	var item = {
            user: request.sanitize('user').escape().trim(),
            password: request.sanitize('password').escape().trim()
        };

   var query = "SELECT id, username FROM users WHERE username = '" + item.user + "' AND password ='" + item.password + "';";
	 db.any(query)
            .then(function (result) {
            	if (result.length === 0) {
            		  request.flash('error', 'Username or password is incorrect.');
                	response.redirect('/login')
                }
                else {
                  request.session.user = result[0];
	                response.redirect('/')
            	}

            }).catch(function (err) {
            request.flash('error', err);
            response.render('pages/login', {
                user: item.user,
                password: item.password
            })
        })
    } else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('pages/login', {
            user: request.body.user,
            password: request.body.password
        })
    }
});
