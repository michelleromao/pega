const mongoose = require('mongoose');

const { Schema } = mongoose;

const Payments = new Schema({
  idPayment: { type: String, required: true },
  type: { type: String, required: true },
});
module.exports = mongoose.model('Payments', Payments);
