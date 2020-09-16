const { uuid } = require('uuidv4');

class Delivery {
  constructor({ type }) {
    this.idDelivery = uuid();
    this.type = type;
  }
}

module.exports = Delivery;
