const router = require('express').Router();

const {
  getUser, getUsers, createUser, updateUserInfo, updateUserAvatar,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.patch('/users/me', updateUserInfo);
router.patch('/users/me/avatar', updateUserAvatar);
module.exports = router;
