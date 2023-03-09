// get the client
const mysql = require('mysql2');

const obj = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 3306),
  user: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
}
console.log("obj is", obj)


// create the connection to database
const connection = mysql.createConnection(obj);

// simple query
connection.query(
  'SELECT * FROM `users`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
