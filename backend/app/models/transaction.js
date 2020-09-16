const { uuid } = require('uuidv4');

class Transaction {
  constructor({ status, idBag, idRate }) {
    this.idTransaction = uuid();
    this.status = status;
    this.idBag = idBag;
    this.idRate = idRate;
  }
}

module.exports = Transaction;
