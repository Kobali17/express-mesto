const router = require('express').Router();

const path = require('path');
const fs = require('fs');

const cards = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/cards.json'), 'utf8'));

router.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = router;
