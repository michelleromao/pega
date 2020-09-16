const { uuid } = require('uuidv4');

class City {
  constructor({ name }) {
    this.idCity = uuid();
    this.name = name;
  }
}

module.exports = City;
