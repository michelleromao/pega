const { uuid } = require('uuidv4');

class FavoriteAnnouncements {
  constructor({ idUser, idAnnoucement }) {
    this.idFavoriteAnnouncements = uuid();
    this.idUser = idUser;
    this.idAnnouncement = idAnnoucement;
  }
}

module.exports = FavoriteAnnouncements;
