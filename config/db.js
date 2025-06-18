const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "info_system",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected");
});

module.exports = connection;
