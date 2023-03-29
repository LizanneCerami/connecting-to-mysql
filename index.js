//library "box of tools"
const mysql = require('mysql2');
const connection = require('./connection.js')

// create the connection to the database (createConnection = tool from toolbox/library)
const db = mysql.createConnection(connection);

db.query("SELECT * FROM customers", (err, data)=>{
  if(err) {
    console.error(err);
  }
  console.table(data);
  db.end();
});

