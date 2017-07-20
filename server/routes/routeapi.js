const express = require('express');

const router = new express.Router();
const Search = require("../models/search");
router.post('/create/search', (req, res, next) => {
	Search.create({
    title:req.body.title,
    date:req.body.date,
    description:req.body.description,
    _user:req.session.passport.user
  }).then(function(data, error) {
    res.send('created');
  })
});

router.get('/view/search', (req, res, next) => {
	Search.find({
    _user:req.session.passport.user
  }).then(function(data, error) {
  	debugger
    res.send(data);
  })
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: "this is the message"
  });
});





module.exports = router;