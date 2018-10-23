const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const { port , connection } = require('./config/environment');

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(`${__dirname}/public`));

// ****************************
// Query from the SQL DataBase
// ****************************
app.get('/', (req, res) => {
  // res.send('hello from server');
  const column = req.query.column;
  const query =
  `
    select
  	  \`${column}\` as 'value',
  	  count(\`${column}\`) as 'count',
  	  round(avg(age),2) as 'average_age'
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
    console.log('data successful');
    if (err) {
      return res.send(err);
    } else {
      return res.json(rows);
    }
  });
});
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`listening to ${port}`));

module.exports = app;
