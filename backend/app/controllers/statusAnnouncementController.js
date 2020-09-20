const { v4 } = require('uuid');
const StatusAnnouncement = require('../models/statusAnnouncement');

class StatusAnnouncementController {
  static async index(request, response) {
    try {
      const promise = await StatusAnnouncement.find().exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Ops, não há tipo de status aqui' });
      }
      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async show(request, response) {
    try {
      const { id } = request.params;
      const criterion = { idStatus: id };
      const promise = await StatusAnnouncement.find(criterion).exec();
      if (promise.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse tipo de status',
        });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async create(request, response) {
    try {
      const { type } = request.body;
      const idStatus = v4();
      const criterion = { type };
      const promise = await StatusAnnouncement.find(criterion).exec();
      if (promise.length !== 0) {
        return response
          .status(400)
          .json({
            message:
              'Não é possível criar este tipo de status, pois ele já existe',
          })
          .end();
      }

      const createPromise = await StatusAnnouncement.create({
        idStatus,
        type,
      });
      return response.json(createPromise);
    } catch (err) {
      return err;
    }
  }

  static async update(request, response) {
    try {
      const { id } = request.params;
      const { type } = request.body;
      const criterionId = { idStatus: id };
      const promiseExist = await StatusAnnouncement.find(criterionId).exec();
      if (promiseExist.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse tipo de status',
        });
      }
      const updatePromise = await StatusAnnouncement.updateOne(
        { idStatus: id },
        {
          id,
          type,
        },
      );
      if (updatePromise.ok === 1) {
        const res = await StatusAnnouncement.find(criterionId).exec();
        return response.json(res);
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível atualizar o tipo de status' });
    } catch (err) {
      return err;
    }
  }

  static async delete(request, response) {
    try {
      const { id } = request.params;
      const criterio = { idStatus: id };

      const promiseExist = await StatusAnnouncement.find(criterio).exec();
      if (promiseExist.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse tipo de status',
        });
      }
      const promiseRemove = await StatusAnnouncement.deleteOne(criterio).exec();
      if (promiseRemove.ok === 1) {
        return response.json({ message: 'Excluído com sucesso' });
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível excluir o tipo de status' });
    } catch (err) {
      return err;
    }
  }
}
module.exports = StatusAnnouncementController;
