const express = require('express');

const router = new express.Router();

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: "this is the message"
  });
});


module.exports = router;