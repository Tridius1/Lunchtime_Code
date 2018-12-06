var pgp = require('pg-promise')();

const dbConfig = {
   host: 'localhost',
   port: 5000,
   database: 'Lunchtime_Code',
   user: 'postgres',
   password: 'admin'
};

var db = pgp(dbConfig);

module.exports = db;
