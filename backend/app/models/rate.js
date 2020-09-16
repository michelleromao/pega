const { uuid } = require('uuidv4');

class Rate {
  constructor({ star, comment, evaluator, rated, transaction }) {
    this.idRate = uuid();
    this.star = star;
    this.comment = comment;
    this.evaluator = evaluator;
    this.rated = rated;
    this.transaction = transaction;
  }
}

module.exports = Rate;
