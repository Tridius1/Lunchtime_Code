var express = require('express');
var app = express();
var db = require('../config/db');

app.get('/', function(req, res){
  //render views/stockSelect.ejs template file
  res.render('pages/stockSelect', {
  	title: 'STOCKSELECT',
  	stock_list: 'Add to List'
  })



});

module.exports = app;


app.put('/', function (req, res) {

	//change for later
	var user_id = req.session.user.id;
	var stocks = [];


    var errors = req.validationErrors();
    if (!errors) { // No validation errors
        stock_list = req.sanitize('stock_list').escape();

        //make stock_list an array
        var i;
        var new_str = stock_list;
        for(i = 0; i < new_str.length-1; i++){
        	if(new_str.charAt(i) == ','){
        		stocks.push(new_str.substring(0,i));
        		new_str = new_str.substring(i+1,new_str.length);
        		i = 0;
        	}
        }
        //last symbol
        stocks.push(new_str);

        /*
        // Fetch the id of the item from the request.
        var itemId = req.params.id;
        */

        //make query to enter new array into user table
        var j;
        var updateQuery = "UPDATE users SET watchlist='{";
        for(j = 0; j < stocks.length; j++){
        	if(j != stocks.length - 1){
        		updateQuery+= '"' + stocks[j] + '",';
        	}else{
        		updateQuery+= '"' + stocks[j] + '"';
        	}
    	}
    	updateQuery+= "}' WHERE id = " + user_id + ";";

        // Running SQL query to insert data into the store table

        db.none(updateQuery)
            .then(function (result) {
            	console.log("success!");
                req.flash('success', 'Data updated successfully!');
 				res.redirect('/');
            })
            .catch(function (err) {
                req.flash('error', err);
            })
    }
    else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        req.flash('error', error_msg);
    }
});
