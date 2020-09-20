const mongoose = require('mongoose');

const { Schema } = mongoose;

const PaymentAnnouncements = new Schema({
  idPaymentAnnouncement: {
    type: String,
    required: true,
  },
  idPayment: { type: String, required: true },
  idAnnouncement: { type: String, required: true },
});

module.exports = mongoose.model('PaymentAnnouncements', PaymentAnnouncements);
