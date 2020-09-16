const { uuid } = require('uuidv4');

class Size {
  constructor({ size }) {
    this.idSize = uuid();
    this.size = size;
  }
}

module.exports = Size;
