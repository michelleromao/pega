const { uuid } = require('uuidv4');

class AnnouncementBag {
  constructor({ idAnnoucement, idBag }) {
    this.idAnnoucement_Bag = uuid();
    this.idAnnoucement = idAnnoucement;
    this.idBag = idBag;
  }
}

module.exports = AnnouncementBag;
