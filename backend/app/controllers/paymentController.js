const { v4 } = require('uuid');
const Payment = require('../models/payment');

class PaymentController {
  static async index(request, response) {
    try {
      const promise = await Payment.find().exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Ops, não há tipo de pagamentos aqui' });
      }
      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async show(request, response) {
    try {
      const { id } = request.params;
      const criterion = { idPayment: id };
      const promise = await Payment.find(criterion).exec();
      if (promise.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse tipo de pagamento',
        });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async create(request, response) {
    try {
      const createPromise = await Payment.create({
        idPayment: 'd51c243e-8adb-41fb-8093-b9241be23665',
        type: 'Picpay',
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
      const criterionId = { idPayment: id };
      const promiseExist = await Payment.find(criterionId).exec();
      if (promiseExist.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse tipo de pagamento',
        });
      }
      const updatePromise = await Payment.updateOne(
        { idPayment: id },
        {
          id,
          type,
        },
      );
      if (updatePromise.ok === 1) {
        const res = await Payment.find(criterionId).exec();
        return response.json(res);
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível atualizar o tipo de pagamento' });
    } catch (err) {
      return err;
    }
  }

  static async delete(request, response) {
    try {
      const { id } = request.params;
      const criterio = { idPayment: id };

      const promiseExist = await Payment.find(criterio).exec();
      if (promiseExist.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse tipo de pagamento',
        });
      }
      const promiseRemove = await Payment.deleteOne(criterio).exec();
      if (promiseRemove.ok === 1) {
        return response.json({ message: 'Excluído com sucesso' });
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível excluir o tipo de pagamento' });
    } catch (err) {
      return err;
    }
  }
}
module.exports = PaymentController;
