const mongoose = require('mongoose');

const { Schema } = mongoose;

const Styles = new Schema({
  idStyle: { type: String, required: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model('Styles', Styles);
