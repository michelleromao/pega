const { uuid } = require('uuidv4');

class Payment {
  constructor({ type }) {
    this.idPayment = uuid();
    this.type = type;
  }
}

module.exports = Payment;
