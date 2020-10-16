const mongoose = require('mongoose');

const { Schema } = mongoose;

const PhotosAnnouncement = new Schema({
  idImage: { type: String, required: true },
  filename: { type: [String], required: true },
  originalname: { type: [String], required: true },
  idAnnouncement: { type: String, required: true },
});

module.exports = mongoose.model('PhotosAnnouncement', PhotosAnnouncement);
