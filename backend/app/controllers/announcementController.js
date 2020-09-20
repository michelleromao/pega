const { v4 } = require('uuid');
const Announcement = require('../models/announcement');

class AnnouncementController {
  static async index(request, response) {
    try {
      const promise = await Announcement.find().exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Ops, não há anúncios aqui' });
      }
      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async show(request, response) {
    try {
      const { id } = request.params;
      const criterion = { idAnnouncement: id };
      const promise = await Announcement.find(criterion).exec();
      if (promise.length === 0) {
        return response
          .status(500)
          .json({ message: 'Não foi possível encontrar esse anúncio' });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async create(request, response) {
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
      const idAnnouncement = v4();

      const createPromise = await Announcement.create({
        idAnnouncement,
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
      return response.json(createPromise);
    } catch (err) {
      return err;
    }
  }

  static async update(request, response) {
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
        idOwner,
        idCategory,
        deliveryType,
        paymentType,
        idStatus,
      } = request.body;

      const criterion = { idAnnouncement: id };

      const promiseExist = await Announcement.find(criterion).exec();
      if (promiseExist.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse anúncio' });
      }
      if (promiseExist[0].initPrice > initPrice) {
        const price = promiseExist[0].initPrice;
        const updatePromise = await Announcement.updateOne(
          { idAnnouncement: id },
          {
            idAnnouncement: id,
            title,
            color,
            size,
            photos,
            state,
            description,
            initPrice: price,
            offert: true,
            valueOffert: initPrice,
            idOwner,
            idCategory,
            deliveryType,
            paymentType,
            idStatus,
          },
        );
        if (updatePromise.ok === 1) {
          const res = await Announcement.find(criterion).exec();
          return response.json(res);
        }
        return response
          .status(400)
          .json({ message: 'Não foi possível atualizar o anúncio' });
      }
      const updatePromise = await Announcement.update(
        { idAnnouncement: id },
        {
          idAnnouncement: id,
          title,
          color,
          size,
          photos,
          state,
          description,
          initPrice,
          offert: false,
          valueOffert: null,
          idOwner,
          idCategory,
          deliveryType,
          paymentType,
          idStatus,
        },
      );
      if (updatePromise.ok === 1) {
        const res = await Announcement.find(criterion).exec();
        return response.json(res);
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível atualizar o anúncio' });
    } catch (err) {
      return err;
    }
  }

  static async delete(request, response) {
    try {
      const { id } = request.params;
      const criterio = { idAnnouncement: id };
      const promiseExist = await Announcement.find(criterio).exec();
      if (promiseExist.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse anúncio' });
      }
      const promiseRemove = await Announcement.deleteOne(criterio).exec();
      if (promiseRemove.ok === 1) {
        return response.json({ message: 'Excluído com sucesso' });
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível excluir o anúncio' });
    } catch (err) {
      return err;
    }
  }
}

module.exports = AnnouncementController;