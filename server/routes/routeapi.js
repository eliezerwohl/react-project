const express = require('express');

const router = new express.Router();
const Search = require("../models/search");


router.route('/search')
.post(function(req, res, next) {
	Search.create({
    title:req.body.title,
    date:req.body.date,
    description:req.body.description,
    _user:req.session.passport.user
  }).then(function(data, error) {
    res.send(data._doc);
  })
})
.get(function(req, res, next) {
	Search.find({
    _user:req.session.passport.user
  }).then(function(data, error) {
    res.send(data);
  })
})
.delete(function(req, res, next) {
  Search.remove({
    _user:req.session.passport.user,
    _id:req.body.id
  }).then(function(data, error) {
    res.send(data);
  })
})

router.post('/', (req, res, next) => {
  res.status(200).json({
    message: "this is the message"
  });
});





module.exports = router;