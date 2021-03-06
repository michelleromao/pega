const { v4 } = require('uuid');
const Announcement = require('../models/announcement');
const DeliveryAnnouncement = require('../models/delivery_announcement');
const PaymentAnnouncement = require('../models/payment_announcement');
const PhotoAnnouncements = require('../models/photo_announcement');

class AnnouncementController {
  static async index(request, response) {
    try {
      const promise = await Announcement.find().exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Ops, não há anúncios aqui' });
      }
      const { id } = request.query;
      const { limit } = request.query;
      const { idStyle } = request.query;
      const { idStatus } = request.query;
      const { skip } = request.query;
      const { idOwner } = request.query;
      const { published } = request.query;
      const { paused } = request.query;
      const { sold } = request.query;
      const { draft } = request.query;
      const { reserved } = request.query;

      if (id && idOwner) {
        const criterio = { $and: [{ idOwner }, { idAnnouncement: id }] };
        const promiseUser = await Announcement.find(criterio).exec();
        return response.json(promiseUser);
      }

      if (limit) {
        const lim = Number(limit);
        const promiseLimit = await Announcement.find().limit(lim);
        if (idOwner) {
          const promiseUser = await Announcement.find({ idOwner }).limit(lim);
          return response.json({
            promiseUser,
          });
        }
        if (idStyle || idStatus) {
          const criterion = {
            $and: [{ idStyle }, { idStatus }],
          };

          if (skip) {
            if (promise.length >= skip) {
              const promiseFilterSkip = await Announcement.find(criterion)
                .skip(Number(skip))
                .limit(lim);

              return response.json({
                limite: lim,
                skip,
                promiseFilterSkip,
              });
            }
          }
          const promiseFilter = await Announcement.find(criterion).limit(lim);
          return response.json({ limite: lim, promiseFilter });
        }

        return response.json({ limite: lim, promiseLimit });
      }
      if (!limit) {
        if (idOwner) {
          const promiseUser = await Announcement.find({ idOwner }).exec();
          if (published) {
            promiseUser.forEach(p => {
              if (p.idStatus === 'a7249f2f-da3c-4312-8269-4d20aa326dcc') {
                return response.json({ promiseUser: [p] });
              }
            });
          }
          if (paused) {
            promiseUser.forEach(p => {
              if (p.idStatus === '0b438541-f970-4e20-be51-ba9398326369') {
                return response.json({ promiseUser: [p] });
              }
              return response.json({ message: 'Nao tem' });
            });
          }

          if (sold) {
            promiseUser.forEach(p => {
              if (p.idStatus === '7336a7a2-07cc-4966-adb4-5a19758b1506') {
                return response.json({ promiseUser: [p] });
              }
              return response.json({ message: 'Nao tem' });
            });
          }
          if (draft) {
            promiseUser.forEach(p => {
              if (p.idStatus === '51f68a38-c8f0-4088-a40e-7b380dab6bd0') {
                return response.json({ promiseUser: [p] });
              }
              return response.json({ message: 'Nao tem' });
            });
          }
          if (reserved) {
            promiseUser.forEach(p => {
              if (p.idStatus === '9008a1d4-59af-4fa2-9595-e868c6c0e4bb') {
                return response.json({ promiseUser: [p] });
              }
              return response.json({ message: 'Nao tem' });
            });
          }

          return response.json({
            promiseUser,
          });
        }
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
        state,
        description,
        tryOn,
        initPrice,
        idOwner,
        nameOwner,
        telOwner,
        idStyle,
        idCategory,
        deliveryType,
        priceDelivery,
        paymentType,
        idStatus,
      } = request.body;

      const idAnnouncement = v4();

      const createPromise = await Announcement.create({
        idAnnouncement,
        title,
        color,
        size,
        state,
        description,
        tryOn,
        initPrice,
        idOwner,
        nameOwner,
        telOwner,
        idStyle,
        idCategory,
        deliveryType: 'e005eb43-21ac-48ff-9944-b1f2510e6126',
        priceDelivery,
        paymentType: 'd51c243e-8adb-41fb-8093-b9241be23665',
        idStatus,
      });

      const idDeliveryAnnouncement = v4();
      const createDeliveryPromise = await DeliveryAnnouncement.create({
        idDeliveryAnnouncement,
        idDelivery: 'e005eb43-21ac-48ff-9944-b1f2510e6126',
        idAnnouncement,
      });
      const idPaymentAnnouncement = v4();
      const createPaymentPromise = await PaymentAnnouncement.create({
        idPaymentAnnouncement,
        idPayment: 'd51c243e-8adb-41fb-8093-b9241be23665',
        idAnnouncement,
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
        state,
        description,
        tryOn,
        initPrice,
        idOwner,
        telOwner,
        nameOwner,
        idStyle,
        idCategory,
        deliveryType,
        priceDelivery,
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
            state,
            description,
            tryOn,
            initPrice: price,
            offert: true,
            valueOffert: initPrice,
            idOwner,
            nameOwner,
            telOwner,
            idStyle,
            idCategory,
            deliveryType: 'e005eb43-21ac-48ff-9944-b1f2510e6126',
            priceDelivery,
            paymentType: 'd51c243e-8adb-41fb-8093-b9241be23665',
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
          state,
          description,
          tryOn,
          initPrice,
          offert: false,
          valueOffert: null,
          idOwner,
          telOwner,
          nameOwner,
          idStyle,
          idCategory,
          deliveryType: 'e005eb43-21ac-48ff-9944-b1f2510e6126',
          priceDelivery,
          paymentType: 'd51c243e-8adb-41fb-8093-b9241be23665',
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
      const promisePhoto = await PhotoAnnouncements.find(criterio).exec();

      const { idImage } = promisePhoto[0];

      const promiseRemove = await Announcement.deleteOne(criterio).exec();
      const deletePromisePhoto = await PhotoAnnouncements.deleteOne({
        idImage,
      });

      const removeDeliveryAnnouncementPromise = await DeliveryAnnouncement.deleteOne(
        criterio,
      ).exec();
      const removePaymentAnnouncementPromise = await PaymentAnnouncement.deleteOne(
        criterio,
      ).exec();
      if (
        promiseRemove.ok === 1 &&
        removePaymentAnnouncementPromise.ok === 1 &&
        removeDeliveryAnnouncementPromise.ok === 1
      ) {
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
