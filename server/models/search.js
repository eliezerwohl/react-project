const mongoose = require('mongoose');
// define the Search model schema
const SearchSchema = new mongoose.Schema({
  name: String,
  date: String
});

module.exports = mongoose.model('Search', SearchSchema);