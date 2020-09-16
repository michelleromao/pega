const { uuid } = require('uuidv4');

class Category {
  constructor({ name }) {
    this.idCategory = uuid();
    this.name = name;
  }
}

module.exports = Category;
