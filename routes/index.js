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
            var jsonArr = []

            console.log(myList[0])
            console.log('myList[0]')
	
	    async function populateObject(bookmarks){

                for (var i = 0; i < myList.length; i++) 
		{
                    //console.log(myList[i])
		    console.log(bookmarks)
                    console.log('bookmarks before https.get ^')
                    try { 
                        var res = await https.get('https://api.iextrading.com/1.0/stock/' + bookmarks[i] + '/chart/1m');
                        highs = [];
                        dates = [];
                        lows = [];

                    
                        highs = jsonQuery('data.high', {data: res}).value;
                        //console.log('TEST ^^^')
                        dates = jsonQuery("data.date", {data: res}).value;
                        lows = jsonQuery("data.low", {data: res}).value;

                        jsonArr.push({
                            mySym: bookmarks[i],
                            myHighs: highs,
                            myLows: lows,
                            myDates: dates
                        });
                    
                    
                        //console.log(jsonArr); 
                

                    } catch(error) {
                        console.log(error);
                    }
                    //workds console.log(jsonArr);
	        }
	    }

	    populateObject(myList).then(function(){;
		console.log('done calculating')
	        console.log(jsonArr)
	        console.log('^^^jsonArr^^^')
                response.render('index', {
                    title: 'INDEX PAGE',
                    user: request.session.user,
                    objArray: jsonArr
            });

	    })


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

app.get('/logout', function (request, response){
  request.session.destroy()
  response.redirect('/login');
});
