const { uuid } = require('uuidv4');

class Transaction {
  constructor({ status, idBag }) {
    this.idTransaction = uuid();
    this.status = status;
    this.idBag = idBag;
  }
}

module.exports = Transaction;
