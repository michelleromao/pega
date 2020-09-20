const mongoose = require('mongoose');

const { Schema } = mongoose;

const StatusTransactions = new Schema({
  idStatus: {
    type: String,
    required: true,
  },
  type: { type: String, required: true },
});
module.exports = mongoose.model('StatusTransactions', StatusTransactions);
