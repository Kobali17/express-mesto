const router = require('express').Router();

const path = require('path');
const fs = require('fs');

router.get('/cards', (req, res) => {
  const cards = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/cards.json'), 'utf8'));
  res.send(cards);
});

module.exports = router;
