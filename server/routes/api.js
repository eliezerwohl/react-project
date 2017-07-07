const express = require('express');

const router = new express.Router();

router.post('/test', (req, res, next) => {
  res.status(200).json({
    message: "this is the message"
  });
});


router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

module.exports = router;