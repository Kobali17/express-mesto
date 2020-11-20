const User = require('../models/user');

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch(next);
};

module.exports.getUsers = (req, res, next) => {
  User.find({}).then((users) => {
    res.send(users);
  }).catch(next);
};

module.exports.getUser = (req, res, next) => {
  User.findById(req.params.id).then((user) => {
    if (user == null) {
      res.status(404).send({ message: 'Пользователь не найден' });
    } else {
      res.send(user);
    }
  })
    .catch(next);
};
module.exports.updateUserInfo = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }).then((users) => {
    res.send(users);
  }).catch(next);
};
module.exports.updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }).then((users) => {
    res.send(users);
  }).catch(next);
};
