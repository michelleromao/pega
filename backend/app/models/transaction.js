const mongoose = require('mongoose');

const { Schema } = mongoose;

const Transactions = new Schema({
  idTransaction: { type: String, required: true },
  statusTransaction: { type: String, required: true },
  idBag: { type: String, required: true },
});

module.exports = mongoose.model('Transactions', Transactions);
