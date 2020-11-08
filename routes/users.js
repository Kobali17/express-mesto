const router = require('express').Router();

const path = require('path');
const fs = require('fs');

const sendUser = (req, res) => {
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8'));
  const thisUsers = users.filter((user) => user._id === req.params.id);
  if (thisUsers.length === 0) {
    res.status(404);
    res.send({ message: 'Нет пользователя с таким id' });
  } else {
    res.send(users[req.params.id]);
  }
};

router.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8'));
  res.send(users);
});

router.get('/users/:id', sendUser);

module.exports = router;
