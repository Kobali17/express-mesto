const router = require('express').Router();

const path = require('path');
const fsPromises = require('fs').promises;

const sendUser = (req, res, next) => fsPromises.readFile(path.join(__dirname, '../data/users.json'),
  { encoding: 'utf8' }).then((data) => {
  const users = JSON.parse(data);
  const thisUsers = users.filter((user) => user._id === req.params.id);
  if (thisUsers.length === 0) {
    res.status(404);
    res.send({ message: 'Нет пользователя с таким id' });
  } else {
    res.send(thisUsers[0]);
  }
}).catch((err) => {
  next(err);
});

router.get('/users', (req, res, next) => fsPromises.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' }).then((data) => {
  const users = JSON.parse(data);
  res.send(users);
}).catch((err) => {
  next(err);
}));

router.get('/users/:id', sendUser);

module.exports = router;
