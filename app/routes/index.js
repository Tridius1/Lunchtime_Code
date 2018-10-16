// routes/index.js

const Login = require('./login');

module.exports = function(app, db){
  Login(app, db);
  // Other route groups could go here, in the future
};
