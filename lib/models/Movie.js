const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String, 
    required: true, 
  },
  description: {
    type: String,
    maxlength: 500, 
    required: true
  },
  studio: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Movie', schema);
