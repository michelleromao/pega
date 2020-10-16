const { v4 } = require('uuid');
const Delivery = require('../models/delivery');

class DeliveryController {
  static async index(request, response) {
    try {
      const promise = await Delivery.find().exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Ops, não há tipo de entrega aqui' });
      }
      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async show(request, response) {
    try {
      const { id } = request.params;
      const criterion = { idDelivery: id };
      const promise = await Delivery.find(criterion).exec();
      if (promise.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse tipo de entrega',
        });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async create(request, response) {
    try {
      const createPromise = await Delivery.create({
        idDelivery: 'e005eb43-21ac-48ff-9944-b1f2510e6126',
        type: 'Frete',
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
      const criterionId = { idDelivery: id };
      const promiseExist = await Delivery.find(criterionId).exec();
      if (promiseExist.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse tipo de entrega',
        });
      }
      const updatePromise = await Delivery.updateOne(
        { idDelivery: id },
        {
          id,
          type,
        },
      );
      if (updatePromise.ok === 1) {
        const res = await Delivery.find(criterionId).exec();
        return response.json(res);
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível atualizar o tipo de entrega' });
    } catch (err) {
      return err;
    }
  }

  static async delete(request, response) {
    try {
      const { id } = request.params;
      const criterio = { idDelivery: id };

      const promiseExist = await Delivery.find(criterio).exec();
      if (promiseExist.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse tipo de entrega',
        });
      }
      const promiseRemove = await Delivery.deleteOne(criterio).exec();
      if (promiseRemove.ok === 1) {
        return response.json({ message: 'Excluído com sucesso' });
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível excluir o tipo de entrega' });
    } catch (err) {
      return err;
    }
  }
}
module.exports = DeliveryController;
