const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

router.get('/error', (req, res) => {
    res.json({ message: 'Something broke'});
  throw new Error('Something broke!');
});

module.exports = router;
