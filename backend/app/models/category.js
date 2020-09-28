const mongoose = require('mongoose');

const { Schema } = mongoose;

const Categories = new Schema({
  idCategory: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model('Categories', Categories);
