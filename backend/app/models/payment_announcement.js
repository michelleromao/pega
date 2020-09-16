const { uuid } = require('uuidv4');

class PaymentAnnouncement {
  constructor({ idDelivery, idAnnoucement }) {
    this.idPayment_Annoucement = uuid();
    this.idPayment = idDelivery;
    this.idAnnoucement = idAnnoucement;
  }
}

module.exports = PaymentAnnouncement;
