const path = require('path');
const express = require('express');
const cards = require('./routes/cards.js');
const users = require('./routes/users.js');

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public/build')));
app.use('/', cards);
app.use('/', users);
app.get('*', (req, res, next) => {
  res.status(404);
  res.send({ message: 'Запрашиваемый ресурс не найден' });
  next();
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
