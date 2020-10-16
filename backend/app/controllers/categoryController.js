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
      const createPromise = await Category.create([
        {
          idCategory: 'f5f0167c-686a-4dfa-b074-8b654dabd917',
          name: 'Calçados',
        },
        {
          idCategory: 'd751a2b7-39f4-4405-a315-c75e1f7c44dd',
          name: 'Acessórios',
        },
        {
          idCategory: '24ac65b9-9a95-43bb-9772-863295dd82d7',
          name: 'Blusas',
        },
        {
          idCategory: '2faf61e1-5f4b-421c-9f9d-2734e4fc6913',
          name: 'Calças',
        },
        {
          idCategory: 'ee35f870-2d84-4932-9469-3cc96655268c',
          name: 'Shorts',
        },
        {
          idCategory: '9bd8a6c7-86fd-48ee-bd3f-75325059826e',
          name: 'Regatas',
        },
        {
          idCategory: '0bee9c3a-9e87-46a2-b99d-21ed9acffd48',
          name: 'Bermudas',
        },
        {
          idCategory: 'b6dab55e-cd41-4a14-a15a-cb0e9763dbc1',
          name: 'Unissex',
        },
        {
          idCategory: '36d12143-8160-4d4f-ad72-7ed763bd5cb2',
          name: 'Vestidos',
        },
        {
          idCategory: 'ff63b7a5-5e0b-4225-a922-b02e8e30daa7',
          name: 'Infantil',
        },
        {
          idCategory: '2050fa35-649d-4f99-8169-73d24f2a6a78',
          name: 'Masculino',
        },
        {
          idCategory: '92d10826-759a-40c3-a9c4-b98c6c3459a3',
          name: 'Feminino',
        },
        {
          idCategory: 'f6f9e750-76b3-4f94-b296-f77059155086',
          name: 'Saias',
        },
        {
          idCategory: 'ade37718-5e6b-4997-834a-ced172898422',
          name: 'Macacões',
        },
        {
          idCategory: '43773d78-3f22-446b-a5d0-b1a7f62ebfee',
          name: 'Bodys',
        },
        {
          idCategory: '5bf2c9bc-4eaf-4878-b13e-5106e306b2b6',
          name: 'Conjuntos',
        },
        {
          idCategory: '899f4067-f122-4db4-aa62-fa7cbd6ec6db',
          name: 'Casacos e Jaquetas',
        },
        {
          idCategory: '0800c156-98d1-4643-b620-af53c1a1bfb0',
          name: 'Kimonos',
        },
        {
          idCategory: '2d56e270-a735-4aa1-b786-b6f57f5911da',
          name: 'Maternidade',
        },
        {
          idCategory: '28f60cc3-7cdc-4f68-a078-6df5fc5450fa',
          name: 'Pijamas',
        },
        {
          idCategory: '165629b2-d0b0-4d6b-be47-b68aa86f48b5',
          name: 'Cropped',
        },
        {
          idCategory: '1e87f3b7-9032-468c-b23f-6a180e89213c',
          name: 'Outros',
        },
      ]);
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
