const mongoose = require('mongoose');
// define the Search model schema
const SearchSchema = new mongoose.Schema({
  title: String,
  description:String,
  date: String,
  _user:{ type: Number, ref: 'User' },
});

module.exports = mongoose.model('Search', SearchSchema);