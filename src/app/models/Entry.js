const mongoose = require('mongoose');


const EntrySchema = new mongoose.Schema({
  descrition: String,
  value: Number,
  type: String,
  date: {
    type: Date,
    default: Date.now()
  }
});


module.exports = mongoose.model('Entry', EntrySchema);
