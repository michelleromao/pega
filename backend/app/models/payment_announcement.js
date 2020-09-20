const mongoose = require('mongoose');

const { Schema } = mongoose;

const PaymentAnnouncements = new Schema({
  idPayment_Annoucement: {
    type: String,
    required: true,
  },
  idPayment: { type: String, required: true },
  idAnnoucement: { type: String, required: true },
});

module.exports = mongoose.model('PaymentAnnouncements', PaymentAnnouncements);
