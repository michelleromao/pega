const mongoose = require('mongoose');

const { Schema } = mongoose;

const Cities = new Schema({
  idCity: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model('Cities', Cities);
