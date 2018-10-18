const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const port = 4000;
//***********************************************************************************
//cross origin resource sharing - this allow AJAX to access resource from remote host
//***********************************************************************************
app.use(cors());

// const routes = require('./config/routes');

app.use(express.static(`${__dirname}/public`));

//******************************
// create connection to database
//******************************
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
//
// // connection.end();
//
//
//****************************
// Query from the SQL DataBase
//****************************
app.get('/', (req, res) => {
  // res.send('hello from server');
  const column = req.query.column;
  const query = `
    select
  	  \`${column}\` as 'value',
  	  count(\`${column}\`) as 'count',
      count(\`${column}\`) as 'total_rows',
  	  avg(age) as 'average_age'
    from
      census_learn_sql
    group by
      \`${column}\`
    order by
      \`${column}\`
      desc
    limit
      100`;

  connection.query(query, (err, rows) => {
    //if(err) throw err
    if (err) {
      return res.send(err);
    } else {
      return res.json(rows);
    }
  });
});


app.use(bodyParser.json());

// app.use('/api', routes);

app.listen(port, () => console.log(`listening to ${port}`));

module.exports = app;
