const { uuid } = require('uuidv4');

class DeliveryAnnouncement {
  constructor({ idDelivery, idAnnoucement }) {
    this.idDeliveryAnnoucement = uuid();
    this.idDelivery = idDelivery;
    this.idAnnoucement = idAnnoucement;
  }
}

module.exports = DeliveryAnnouncement;
