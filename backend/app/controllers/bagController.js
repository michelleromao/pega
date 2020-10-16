const { v4 } = require('uuid');
const AnnouncementBag = require('../models/announcement_bag');
const Announcement = require('../models/announcement');
const Bag = require('../models/bag');
const Transaction = require('../models/transaction');

class BagController {
  static async index(request, response) {
    try {
      const promise = await Bag.find().exec();
      if (promise.length === 0) {
        return response
          .status(401)
          .json({ message: 'Ops, não há sacolas aqui' });
      }
      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async show(request, response) {
    try {
      const { id } = request.params;
      const criterion = { idBag: id };
      const promise = await Bag.find(criterion).exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa sacola' });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async create(request, response) {
    try {
      const {
        idBuyer,
        announcements,
        idPayment,
        value,
        idCupom,
        totalValue,
      } = request.body;
      const idBag = v4();
      const criterion = { idAnnouncement: { $in: announcements } };
      const promiseFind = await AnnouncementBag.find(criterion);
      if (promiseFind.length !== 0) {
        return response
          .status(400)
          .json({
            message:
              'Não é possível realizar esta compra, algum produto já foi comprado',
          })
          .end();
      }

      const updateStatusAnnouncementPromise = await Announcement.updateMany(
        criterion,
        {
          $set: {
            idStatus: '9008a1d4-59af-4fa2-9595-e868c6c0e4bb',
          },
        },
      ).exec();
      const createBagPromise = await Bag.create({
        idBag,
        idBuyer,
        announcements,
        idPayment,
        value,
        idCupom,
        totalValue,
      });

      const announcement = announcements.map(a => {
        return {
          idAnnouncement_Bag: v4(),
          idAnnouncement: a,
          idBag,
        };
      });

      const createAnnouncementBagPromise = await AnnouncementBag.insertMany(
        announcement,
      );
      const idTransaction = v4();

      const createTransactionPromise = await Transaction.create({
        idTransaction,
        statusTransaction: '00fd31a5-d50f-4ac2-945e-08166aff88bd',
        idBag,
      });
      return response.json(createBagPromise);
    } catch (err) {
      return err;
    }
  }

  static async delete(request, response) {
    try {
      const { id } = request.params;
      const criterion = { idBag: id };
      const promiseExist = await Bag.find(criterion).exec();
      if (promiseExist === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa sacola' });
      }
      const deleteBagPromise = await Bag.deleteOne(criterion).exec();
      const deleteTransactionPromise = await Transaction.deleteOne(
        criterion,
      ).exec();
      const deleteAnnouncementBagPromise = await AnnouncementBag.deleteMany(
        criterion,
      ).exec();
      if (
        deleteTransactionPromise.ok === 1 &&
        deleteAnnouncementBagPromise.ok === 1 &&
        deleteBagPromise === 1
      ) {
        return response.json({ message: 'Excluído com sucesso' });
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível excluir a sacola' });
    } catch (err) {
      return err;
    }
  }
}

module.exports = BagController;
