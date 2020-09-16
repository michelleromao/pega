const { uuid } = require('uuidv4');

class Bag {
  constructor({ buyer, announcements, idPayment, value, cupom, totalValue }) {
    this.idBag = uuid();
    this.buyer = buyer;
    this.announcements = announcements;
    this.idPayment = idPayment;
    this.value = value;
    this.idCupom = cupom;
    this.totalValue = totalValue;
  }
}

module.exports = Bag;
