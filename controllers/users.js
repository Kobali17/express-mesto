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
  User.findById(req.params.id).orFail().then((user) => {
    res.send(user);
  })
    .catch(next);
};
module.exports.updateUserInfo = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true }).then((users) => {
    res.send(users);
  }).catch(next);
};
module.exports.updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true }).then((users) => {
    res.send(users);
  }).catch(next);
};
