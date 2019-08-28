const mysql = require('mysql');

const db = process.env.JAWSDB_URL
    ? mysql.createConnection(process.env.JAWSDB_URL)
    : mysql.createConnection({
          host: 'localhost',
          user: 'nich',
          password: '123456',
          database: 'burgers_db',
      });

module.exports = db;
