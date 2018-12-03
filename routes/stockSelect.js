var express = require('express');
var app = express();

app.get('/', function(req, res){
  //render views/stockSelect.ejs template file
  res.render('pages/stockSelect', {
  	title: 'STOCKSELECT',
  	stock_list: 'Add to List'
  })



});

module.exports = app;


app.post('/', function (request, response) {


    var errors = request.validationErrors();
    if (!errors) { // No validation errors
        var item = {
		  	stock_list: request.sanitize('stock_list').escape()
        };
    }

    //string of symbols seperated by commas
    console.log(item.stock_list)


/*
        // Running SQL query to insert data into the store table
        db.none('INSERT INTO store(sname, qty, price) VALUES($1, $2, $3)', [item.sname, item.qty, item.price])
            .then(function (result) {
                request.flash('success', 'Data added successfully!');
                // render views/store/add.ejs
                response.render('store/add', {
                    title: 'Add New Item',
                    sname: '',
                    qty: '',
                    price: ''
                })
            }).catch(function (err) {
            request.flash('error', err);
            // render views/store/add.ejs
            response.render('store/add', {
                title: 'Add New Item',
                sname: item.sname,
                qty: item.qty,
                price: item.price
            })
        })
    } else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('store/add', {
            title: 'Add New Item',
            sname: request.body.sname,
            qty: request.body.qty,
            price: request.body.price
        })
    }
*/
});


//app.post('/', function (request, response) {


    // Validate user input - ensure non emptiness
    //request.assert('symb1', 'symb1 is required').notEmpty();
    
    //var errors = request.validationErrors();
    //if (!errors) { // No validation errors
    	/*
        var item = {
            // sanitize() is a function used to prevent Hackers from inserting
            // malicious code(as data) into our database. There by preventing
            // SQL-injection attacks.
            symb1: ''
        };

   var tmp = request.body.symb1
   console.log("this is tmp " + tmp);

   */
 
    /*
  $(document).reeady(function() {
  	


	const req = require('request');

	var url = 'https://api.iextrading.com/1.0/stock/market/list/infocus';
	$.ajax({url:stock_url, dataType:"jsonp"}).then(function(data) {
		var i;
		for(i = 0; i < data.length; i++){
			console.log(data.symbol);
		}
	});
  });
  */
/*
  var http = require('https://api.iextrading.com/1.0/stock/market/list/infocus');

   http.get({
       
   }, function(response) {
       // Continuously update stream with data
       var body = '';
       response.on('data', function(d) {
           body += d;
       });
       response.on('end', function() {

           // Data reception is done, do whatever with it!
           var parsed = JSON.parse(body);

           console.log(parsed)

       });


   });
   */
    //}

    
    /*
        // Running SQL query to insert data into the store table
        db.none('INSERT INTO store(sname, qty, price) VALUES($1, $2, $3)', [item.sname, item.qty, item.price])
            .then(function (result) {
                request.flash('success', 'Data added successfully!');
                // render views/store/add.ejs
                response.render('store/add', {
                    title: 'Add New Item',
                    sname: '',
                    qty: '',
                    price: ''
                })
            }).catch(function (err) {
            request.flash('error', err);
            // render views/store/add.ejs
            response.render('store/add', {
                title: 'Add New Item',
                sname: item.sname,
                qty: item.qty,
                price: item.price
            })
        })
    } else {
        var error_msg = errors.reduce((accumulator, current_error) => accumulator + '<br />' + current_error.msg, '');
        request.flash('error', error_msg);
        response.render('store/add', {
            title: 'Add New Item',
            sname: request.body.sname,
            qty: request.body.qty,
            price: request.body.price
        })
    }
    */
//});









 

    





