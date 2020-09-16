const { uuid } = require('uuidv4');

class Cupom {
  constructor({ code, value, quantity }) {
    this.idCupom = uuid();
    this.code = code;
    this.value = value;
    this.quantity = quantity;
  }
}

module.exports = Cupom;
