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
      const createPromise = await Style.create([
        {
          idStyle: 'bd27019f-b519-4021-a8cd-57885e0dddc7',
          name: 'Básico',
        },
        {
          idStyle: '9867aef7-6913-4ae6-9ac1-c9e4102a9301',
          name: 'Casual',
        },
        {
          idStyle: '961f0303-71ac-4362-825b-5d29864aa89d',
          name: 'Confortável',
        },
        {
          idStyle: '8ca38a28-7a9f-4011-b07e-86dccbfb8924',
          name: 'E-boy',
        },
        {
          idStyle: 'e81f17b4-faa2-497a-ac2e-277fc406e575',
          name: 'E-girl',
        },
        {
          idStyle: '585741b3-8cc5-4248-9143-4d7bb3a2060c',
          name: 'Esportivo',
        },
        {
          idStyle: 'b9f64d3a-2c6b-424e-a57f-ea49881053c8',
          name: 'Fantasia',
        },
        {
          idStyle: '582017f7-1080-48b9-8947-ad541a6e0081',
          name: 'Festa',
        },
        {
          idStyle: 'f9e4e702-aeca-438f-8f9b-6790556834c9',
          name: 'Ficar em casa',
        },
        {
          idStyle: '6d8ff57f-cbc4-43c2-8d7f-f72966de2c9e',
          name: 'Floral',
        },
        {
          idStyle: '0c7d8ea1-9ae5-4430-9e11-d828e6f5c905',
          name: 'Geek',
        },
        {
          idStyle: 'ca202d3a-c06e-4ba2-9661-c813735d2dba',
          name: 'Gótico',
        },
        {
          idStyle: '6ce19360-09c7-464e-928a-951825136954',
          name: 'Praiano',
        },
        {
          idStyle: 'c0b303cc-ccb3-4568-9661-dc104302d99f',
          name: 'Punk',
        },
        {
          idStyle: '098374f5-302e-4b25-94c3-552f87bdb378',
          name: 'Social',
        },
        {
          idStyle: 'cb3dc053-3314-4831-9152-f444551f831e',
          name: 'Tropical',
        },
        {
          idStyle: '99fbca3b-d22f-4c44-a065-56b3ed85c742',
          name: 'Vintage',
        },
        {
          idStyle: '9e0e9685-707f-444e-9a17-f369c49143c8',
          name: 'Urbano',
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
