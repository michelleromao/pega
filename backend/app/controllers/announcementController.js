const Announcement = require('../models/announcement');

const announcements = [];

class AnnouncementController {
  static index(request, response) {
    try {
      return response.json(announcements);
    } catch (err) {
      return err;
    }
  }

  static show(request, response) {
    try {
      const id = request.params;
      const announcement = announcements.find(a => {
        if (a.idAnnouncement === id) {
          return a;
        }
        return null;
      });
      if (!announcement) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse anúncio' });
      }

      return response.json(announcement);
    } catch (err) {
      return err;
    }
  }

  static create(request, response) {
    try {
      const {
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
      } = request.body;

      const announcement = new Announcement({
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
      });
      announcements.push(announcement);
      return response.json(announcement);
    } catch (err) {
      return err;
    }
  }

  static update(request, response) {
    try {
      const { id } = request.params;
      const {
        title,
        color,
        size,
        photos,
        state,
        description,
        initPrice,
        valueOffert,
        idOwner,
        idCategory,
        deliveryType,
        paymentType,
        idStatus,
      } = request.body;

      const index = announcements.findIndex((u, i) => {
        if (u.idAnnouncement === id) {
          return i;
        }
        return null;
      });

      if (!index) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse usuário' });
      }

      if (valueOffert && announcements[index].initPrice > valueOffert) {
        const price = announcements[index].initPrice;
        if (announcements[index].initPrice < valueOffert) {
          const announcement = {
            id,
            title,
            color,
            size,
            photos,
            state,
            description,
            initPrice: valueOffert,
            offert: false,
            valueOffert: undefined,
            idOwner,
            idCategory,
            deliveryType,
            paymentType,
            idStatus,
          };
          announcements[index] = announcement;
          return response.json(announcement);
        }

        const announcement = {
          id,
          title,
          color,
          size,
          photos,
          state,
          description,
          price,
          offert: true,
          valueOffert,
          idOwner,
          idCategory,
          deliveryType,
          paymentType,
          idStatus,
        };
        announcements[index] = announcement;
        return response.json(announcement);
      }
      const announcement = {
        id,
        title,
        color,
        size,
        photos,
        state,
        description,
        initPrice,
        offert: false,
        valueOffert: undefined,
        idOwner,
        idCategory,
        deliveryType,
        paymentType,
        idStatus,
      };
      announcements[index] = announcement;
      return response.json(announcement);
    } catch (err) {
      return err;
    }
  }

  static delete(request, response) {
    try {
      const { id } = request.params;

      const index = announcements.findIndex((a, i) => {
        if (a.idAnnouncement === id) {
          return i;
        }
        return null;
      });

      if (!index) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse usuário' });
      }

      announcements.splice(index, 1);

      return response.json(announcements);
    } catch (err) {
      return err;
    }
  }
}

module.exports = AnnouncementController;
