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
    owner,
    category,
    deliveryType,
    paymentType,
    status,
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
    this.owner = owner;
    this.category = category;
    this.deliveryType = deliveryType;
    this.paymentType = paymentType;
    this.status = status;
  }
}

module.exports = Announcement;
