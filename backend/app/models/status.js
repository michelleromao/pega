const { uuid } = require('uuidv4');

class Status {
  constructor({ type }) {
    this.idStatus = uuid();
    this.type = type;
  }
}

module.exports = Status;
