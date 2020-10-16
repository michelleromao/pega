const mongoose = require('mongoose');

const { Schema } = mongoose;

const Sizes = new Schema({
  idSize: { type: String, required: true },
  size: { type: String, required: true },
});
module.exports = mongoose.model('Sizes', Sizes);
