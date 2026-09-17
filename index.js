const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/dotaorlol', (req, res) => {
  res.send('dota 2');
});
app.get('/bestdota2hero', (req, res) => {
  res.send('phantom lanser');
});
app.get('/worstdota2hero', (req, res) => {
  res.send('axe');
});
app.get('/whatdota2playerslove', (req, res) => {
  res.send('man');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});