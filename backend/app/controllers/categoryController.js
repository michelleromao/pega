const { v4 } = require('uuid');
const Category = require('../models/category');

class CategoryController {
  static async index(request, response) {
    try {
      const promise = await Category.find().exec();
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
      const criterion = { idCategory: id };
      const promise = await Category.find(criterion).exec();
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
      const idCategory = v4();
      const criterion = { name };
      const promise = await Category.find(criterion).exec();
      if (promise.length !== 0) {
        return response
          .status(400)
          .json({
            message:
              'Não é possível criar esta categoria, pois ela já foi criada',
          })
          .end();
      }

      const createPromise = await Category.create({
        idCategory,
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
      const criterionId = { idCategory: id };
      const promiseExist = await Category.find(criterionId).exec();
      if (promiseExist.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa categoria' });
      }
      const updatePromise = await Category.updateOne(
        { idCategory: id },
        {
          id,
          name,
        },
      );
      if (updatePromise.ok === 1) {
        const res = await Category.find(criterionId).exec();
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
      const criterio = { idCategory: id };

      const promiseExist = await Category.find(criterio).exec();
      if (promiseExist.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar essa categoria' });
      }
      const promiseRemove = await Category.deleteOne(criterio).exec();
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
module.exports = CategoryController;
