const mongoose = require('mongoose');
// define the Search model schema
const SearchSchema = new mongoose.Schema({
  title: String,
  description:String,
  date: String
});

module.exports = mongoose.model('Search', SearchSchema);