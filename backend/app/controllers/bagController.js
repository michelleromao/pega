const { v4 } = require('uuid');
const AnnouncementBag = require('../models/announcement_bag');
const Bag = require('../models/bag');

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
      console.log(promiseFind);
      if (promiseFind.length !== 0) {
        return response
          .status(400)
          .json({
            message:
              'Não é possível realizar esta compra, algum produto já foi comprado',
          })
          .end();
      }

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
      // create transaction
      return response.json(createBagPromise);
    } catch (err) {
      return err;
    }
  }
}

module.exports = BagController;
