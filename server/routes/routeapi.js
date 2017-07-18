const express = require('express');

const router = new express.Router();
const Search = require("../models/search");
router.post('/create/search', (req, res, next) => {
	Search.create({
    title:req.body.title,
    description:req.body.description,
    _user:req.session.passport.id
  }).then(function(data, error) {
  	debugger
    res.send('/auth?msg=Venue created.');
  })
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: "this is the message"
  });
});





module.exports = router;