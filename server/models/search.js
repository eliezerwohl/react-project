const mongoose = require('mongoose');
// define the Search model schema
const SearchSchema = new mongoose.Schema({
  title: String,
  description:String,
  date: Date,
  _user:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Search', SearchSchema);