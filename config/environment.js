//******************************
// create connection to database
//******************************
const port= process.env.PORT || 4000;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
  user: 'test-read',
  password: 'xnxPp6QfZbCYkY8',
  database: 'birdietest'
});
connection.connect(err => {
  if(err) {
    return err;
  }
  console.log('connected to database');
});

module.exports = {connection, port} ;
