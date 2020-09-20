const { v4 } = require('uuid');
const Style = require('../models/style');

class StyleController {
  static async index(request, response) {
    try {
      const promise = await Style.find().exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Ops, não há categorias aqui' });
      }
      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async show(request, response) {
    try {
      const { id } = request.params;
      const criterion = { idStyle: id };
      const promise = await Style.find(criterion).exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa categoria' });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async create(request, response) {
    try {
      const { name } = request.body;
      const idStyle = v4();
      const criterion = { name };
      const promise = await Style.find(criterion).exec();
      if (promise.length !== 0) {
        return response
          .status(400)
          .json({
            message:
              'Não é possível criar esta categoria, pois ela já foi criada',
          })
          .end();
      }

      const createPromise = await Style.create({
        idStyle,
        name,
      });
      return response.json(createPromise);
    } catch (err) {
      return err;
    }
  }

  static async update(request, response) {
    try {
      const { id } = request.params;
      const { name } = request.body;
      const criterionId = { idStyle: id };
      const promiseExist = await Style.find(criterionId).exec();
      if (promiseExist.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa categoria' });
      }
      const updatePromise = await Style.updateOne(
        { idStyle: id },
        {
          id,
          name,
        },
      );
      if (updatePromise.ok === 1) {
        const res = await Style.find(criterionId).exec();
        return response.json(res);
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível atualizar a categoria' });
    } catch (err) {
      return err;
    }
  }

  static async delete(request, response) {
    try {
      const { id } = request.params;
      const criterio = { idStyle: id };

      const promiseExist = await Style.find(criterio).exec();
      if (promiseExist.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa categoria' });
      }
      const promiseRemove = await Style.deleteOne(criterio).exec();
      if (promiseRemove.ok === 1) {
        return response.json({ message: 'Excluído com sucesso' });
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível excluir a categoria' });
    } catch (err) {
      return err;
    }
  }
}
module.exports = StyleController;
