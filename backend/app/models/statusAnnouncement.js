const mongoose = require('mongoose');

const { Schema } = mongoose;

const StatusAnnouncements = new Schema({
  idStatus: { type: String, required: true },
  type: { type: String, required: true },
});
module.exports = mongoose.model('StatusAnnouncements', StatusAnnouncements);
