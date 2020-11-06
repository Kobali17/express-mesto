const router = require('express').Router();

const path = require('path');
const fs = require('fs');

const users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf8'));
const thisUserExists = (req, res, next) => {
  const thisUsers = users.filter((user) => user._id === req.params.id);
  if (thisUsers.length === 0) {
    res.status(404);
    res.send({ message: 'Нет пользователя с таким id' });
  } else {
    next();
  }
};

const sendUser = (req, res) => {
  res.send(users[req.params.id]);
};
router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', thisUserExists);
router.get('/users/:id', sendUser);

module.exports = router;
