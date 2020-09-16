const { uuid } = require('uuidv4');

class Announcement {
  constructor({
    title,
    color,
    size,
    photos,
    state,
    description,
    initPrice,
    idOwner,
    idCategory,
    deliveryType,
    paymentType,
    idStatus,
  }) {
    this.idAnnouncement = uuid();
    this.title = title;
    this.color = color;
    this.size = size;
    this.photos = photos;
    this.state = state;
    this.description = description;
    this.initPrice = initPrice;
    this.offert = undefined;
    this.valueOffert = undefined;
    this.idOwner = idOwner;
    this.idCategory = idCategory;
    this.deliveryType = deliveryType;
    this.paymentType = paymentType;
    this.idStatus = idStatus;
  }
}

module.exports = Announcement;
