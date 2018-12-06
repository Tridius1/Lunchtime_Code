var express = require('express');
var app = express();
module.exports = app;


app.get('/', function(req, res){

 	if(req.session.user){
		
		//render views/index.ejs template file
	  	res.render('index', {
	  		title: 'INDEX PAGE',
	  		user: req.session.user
	  	})
  	}
  	else{
  		var err = new Error("Not logged in!");
      	next(err);  //Error, trying to access unauthorized page!
  	}

});
/*
app.use('/', function(err, req, res, next){
console.log(err);
   //User should be authenticated! Redirect him to log in.
   res.redirect('/login');
});
*/