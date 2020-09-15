const { uuid } = require('uuidv4');

class Address {
  constructor({ zipCode, street, number, city, state, main }) {
    this.idAddress = uuid();
    this.zipCode = zipCode;
    this.street = street;
    this.number = number;
    this.city = city;
    this.state = state;
    this.main = main;
  }
}

module.exports = Address;
