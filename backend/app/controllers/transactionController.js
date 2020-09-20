const { v4 } = require('uuid');
const Transaction = require('../models/transaction');
const Announcement = require('../models/announcement');
const Bag = require('../models/bag');

class TransactionController {
  static async index(request, response) {
    try {
      const promise = await Transaction.find().exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Ops, não há transações aqui' });
      }
      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async show(request, response) {
    try {
      const { id } = request.params;
      const criterion = { idTransaction: id };
      const promise = await Transaction.find(criterion).exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa transação' });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async update(request, response) {
    try {
      const { id } = request.params;
      const { statusTransaction } = request.body;
      const criterion = { idTransaction: id };
      const promiseExist = await Transaction.find(criterion).exec();
      if (promiseExist === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa transação' });
      }
      const promiseUpdate = await Transaction.updateOne(criterion, {
        $set: { statusTransaction },
      });

      const { idBag } = promiseExist[0];
      const promiseBag = await Bag.find({ idBag }).exec();
      if (promiseBag.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa sacola' });
      }
      const { announcements } = promiseBag[0];
      const criterionAnnouncements = { idAnnouncement: { $in: announcements } };
      // cancelada
      if (statusTransaction === 'a8cd0bbc-21a4-4295-8a81-d8c138197028') {
        const updateStatusAnnouncementPromise = await Announcement.updateMany(
          criterionAnnouncements,
          {
            $set: {
              idStatus: 'a7249f2f-da3c-4312-8269-4d20aa326dcc',
            },
          },
        ).exec();
      }
      // concluída
      if (statusTransaction === '852091cf-a079-4c54-bf8f-86ce8af424a4') {
        const updateStatusAnnouncementPromise = await Announcement.updateMany(
          criterionAnnouncements,
          {
            $set: {
              idStatus: '7336a7a2-07cc-4966-adb4-5a19758b1506',
            },
          },
        ).exec();
      }
      if (promiseUpdate.ok === 1) {
        const res = await Transaction.find(criterion).exec();
        return response.json(res);
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível atualizar a transação' });
    } catch (err) {
      return err;
    }
  }
}

module.exports = TransactionController;
