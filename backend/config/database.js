//get client
const mysql = require("mysql2");
const constant = require ("./constant")

// import constant values like pass and username
// const constant = require("./constant");

// console.log(constant);
// create the connection to database
const connection = mysql.createConnection({
	host: 'localhost',
    user: constant.USER_DB,
    database: constant.DB,
    password: constant.PASSWORD_DB,
  });

module.exports = connection;