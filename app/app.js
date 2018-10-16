//app/app.js

var url = require('url');
var fs = require('fs');


function renderHTML(path, res){
  fs.readFile(path, null, function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Oops! File not found!');
    } else {
        res.write(data);
    }
    res.end();
  });
}


module.exports = {
  handleRequest: function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    var path = url.parse(req.url).pathname;
    switch (path) {
      case '/':
        renderHTML('./public/pages/index.html', res);
        break;
      case '/login':
        renderHTML('./public/pages/login.html', res);
        break;
      case '/select':
        renderHTML('./public/pages/stockSelect.html', res);
        break;
      case '/signup':
        renderHTML('./public/pages/signup.html', res);
        break;
      default:
        res.writeHead(404);
        res.write('Route not defined!');
        res.end();
    }
  }
};
