const mongoose = require('mongoose');

module.exports = function (uri) {
  mongoose.connect(uri);
  mongoose.connection.on('connected', function () {
    console.log(`Mongoose! Connected on ${uri}`);
  });
  mongoose.connection.on('disconnected', function () {
    console.log(`Mongoose! Desconnected of ${uri}`);
  });
  mongoose.connection.on('error', function () {
    console.log(`Mongoose! Error on connection ${uri}`);
  });
  mongoose.set('debug', true);
};
