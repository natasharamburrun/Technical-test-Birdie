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
  const queryString =
  'SELECT * FROM census_learn_sql LIMIT 100';
  connection.query(queryString, (err, rows) => {
    if(err) {
      return res.send(err);
    }

    console.log('successful');

    const demoData = rows.map((row) => {
      return row;
    });

    res.json({
      data: demoData
    });
    // } else {
    //   return res.json({
    //     data: rows
    //   });
  }
  );
}
);

// connection.end();

app.listen(port, () => console.log(`Express running on port ${port}`));

module.exports = app;
