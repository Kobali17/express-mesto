const router = require('express').Router();

const path = require('path');
const fsPromises = require('fs').promises;

router.get('/cards', (req, res, next) => {
  fsPromises.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' })
    .then((cards) => {
      res.send(cards);
    }).catch((err) => {
      next(err);
    });
});
module.exports = router;
