const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
//cross origin resource sharing - this allow AJAX to access resource from remote host


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
});

app.get('/', (req, res) => {
  // res.send('hello from server');
  connection.query('SELECT * FROM census_learn_sql', (err, results) => {
    if(err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

// connection.end();

app.listen(port, () => console.log(`Express running on port ${port}`));

module.exports = app;
