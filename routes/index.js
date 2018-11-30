var express = require('express');
var bodyParser = require('body-parser');
var app = express();
module.exports = app;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//global.document = express();

var url = 'https://api.iextrading.com/1.0/stock/aapl/chart/1y';


//var btn2 = document.getElementById("btn2");

//btn2.addEventListener("click", function() {
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function() {
  //console.log(xhr.responseText);
  var data = JSON.parse(xhr.responseText);
  console.log(data[0]); 
};
xhr.send();
//});


//var script = document.createElement('script');
//script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);


  //render views/index.ejs template file
//  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//  var oReq = new XMLHttpRequest();

//  oReq.open("GET", "https://api.iextrading.com/1.0/stock/aapl/chart/1y");
//  oReq.send();

//  var json = {a:1,b:2,c:3};
  //res.render('index', json);
//  var text = JSON.stringify(json);

//var getJSON = function(url, callback) {
//  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//  var xhr = new XMLHttpRequest();
//  xhr.open('GET', url, true);
//  xhr.responseType = 'json';
//  xhr.onload = function() {
//    var status = xhr.status;
//    if (status === 200) {
//      JSON.parse(xhr.responseText);
//      //callback(null, xhr.response);
//    } else {
//      callback(status, xhr.response);
//    }
//  };
//  xhr.send();
//};


//data = getJSON('https://api.iextrading.com/1.0/stock/aapl/chart/1d', function(err, data) {
  //if (err !== null) {
    //alert('Something went wrong: ' + err);
  //} else {
    //alert('Your query count: ' + data.query.count);
 //}
//});

//console.log(data);

//function loadJSON(path, success, error)
//{
//  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//  var xhr = new XMLHttpRequest();
//  xhr.onreadystatechange = function()
//  {
//    if (xhr.readyState === XMLHttpRequest.DONE) {
//      if (xhr.status === 200) {
//        if (success)
//          success(JSON.parse(xhr.responseText));
//      } else {
//        if (error)
//          error(xhr);
//      }
//    }
//  };
//  xhr.open("GET", path, true);
//  xhr.send();
//}

//loadJSON('https://api.iextrading.com/1.0/stock/aapl/chart/1y',
//  function(data) {console.log(data); },
//  function(xhr) {console.error(xhr); }
//);



app.get('/', function(req, res){
  //res.sendFile('index.ejs', {root: '../../Lunchtime_Code/views'});
  res.render('index', {title: 'Home'});
});

app.post('/', function(req, res){
  var stock_input = req.body.stock_input;
  console.log("stock input is " +stock_input)

  var url = 'https://api.iextrading.com/1.0/stock/' +stock_input+ '/chart/1y';
  console.log(url);
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
  //console.log(xhr.responseText);
  var data = JSON.parse(xhr.responseText);
  console.log(data[0].date); 
};
xhr.send();


res.end("done");
});

//app.listen(5000, function(){
//  console.log("started on port 5000");
//});

module.exports = app;
