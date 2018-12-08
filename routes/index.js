var express = require('express');
var db = require('../config/db');
var app = express();
var https = require('axios');
var jsonQuery = require('json-query');

module.exports = app;

app.get('/', function (request, response) {

    if(request.session.user){
    var id = request.session.user.id;
    db.any('select watchlist from users where id = $1', id)
    .then(data => {
            request.flash('success', 'Data returned successfully!');

            var myList = data[0].watchlist;
            var jsonArr = []
            var logo_list = []

	
	    async function populateObject(bookmarks){

                for (var i = 0; i < myList.length; i++) {
                    //console.log(myList[i])
		                //console.log(bookmarks)
                    //console.log('bookmarks before https.get ^')
                    try { 
                        var res = await https.get('https://api.iextrading.com/1.0/stock/' + bookmarks[i] + '/chart/1m');
                        highs = [];
                        dates = [];
                        lows = [];

                        var image_url = await https.get('https://api.iextrading.com/1.0/stock/' + bookmarks[i] + '/logo');
                        logo_list.push(image_url.data.url);

                    
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

<<<<<<< HEAD
	    populateObject(myList).then(function(){
		console.log('done calculating')
	        console.log(jsonArr)
	        console.log('^^^jsonArr^^^')
=======
	    populateObject(myList).then(function(){;
		      //console.log('done calculating')
	        //console.log(jsonArr)
	        //console.log('^^^jsonArr^^^')
>>>>>>> 86f3052b409f03e1a74cb418c4d1aef03a6fcf87
                response.render('index', {
                    title: 'INDEX PAGE',
                    user: request.session.user,
                    objArray: jsonArr,
<<<<<<< HEAD
		    counter: 0,
		    objLength: jsonArr.length
=======
                    url: logo_list
>>>>>>> 86f3052b409f03e1a74cb418c4d1aef03a6fcf87
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
