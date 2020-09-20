const mongoose = require('mongoose');

const { Schema } = mongoose;

const AnnouncementBags = new Schema({
  idAnnouncement_Bag: {
    type: String,
    required: true,
  },
  idAnnouncement: { type: String, required: true },
  idBag: { type: String, required: true },
});
module.exports = mongoose.model('AnnouncementBags', AnnouncementBags);
