const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
  console.log('hello');
  res.send({s: 3});
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});