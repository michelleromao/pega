const mongoose = require('mongoose');

const { Schema } = mongoose;

const Rates = new Schema({
  idRate: { type: String, required: true },
  star: { type: Number, required: true },
  comment: { type: String, required: true },
  evaluator: { type: String, required: true },
  rated: { type: String, required: true },
  transaction: { type: String, required: true },
});

module.exports = mongoose.model('Rates', Rates);
