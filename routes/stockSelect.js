var express = require('express');
var app = express();

app.get('/', function(req, res){
  //render views/stockSelect.ejs template file
  res.render('pages/stockSelect', {title: 'STOCKSELECT PAGE'})
});

module.exports = app;


var http = require('http');

var options = {
	host: 'https://api.iextrading.com/1.0/stock/aapl/logo',
	method: 'GET'
};

function getJSON(options, cb){
	http.request(options,function(response){
		var body = "";
		
		response.on('data', function(some_data){
			body += some_data;
		});

		response.on('end', function(){
			var result = JSON.parse(body)
			cb(null, result);
		});

		response.on('error', cb);
	})
	.on('error', cb)
	.end();
}

var url = "";

getJSON(options, function(err, result){
	if(err){
		//error
		return
	}
	url = result;
});
    





