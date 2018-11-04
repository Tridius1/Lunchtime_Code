//server.js

var express = require('express');
var  bodyParser = require('body-parser');
var app = express();

// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 5000;

// set engine to ejs
app.set('view engine', 'ejs');


// index
var index = require('./routes/index');
app.use('/', index);

//login
var login = require('./routes/login');
app.use('/login', login);

//signup
var signup = require('./routes/signup');
app.use('/signup', signup);

//stockSelect
var stockSelect = require('./routes/stockSelect');
app.use('/stockSelect', stockSelect);

app.listen(PORT);
console.log('Listening on port ' + PORT + '...');

//Tell node to look into views for css/js/img 
app.use(express.static(__dirname + '/views'));
 
// use this so Express can process URL encoded forms, youll see the body of the post in the terminal
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var methodOverride = require('method-override');
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));

var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser('csci3308'));
app.use(session({
    secret: 'csci3308',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.use(flash());


