const { v4 } = require('uuid');
const User = require('../models/user');
const PhotoUsers = require('../models/photo_user');

class UserController {
  static async index(request, response) {
    try {
      const promise = await User.find().exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Ops, não há usuários aqui' });
      }
      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async show(request, response) {
    try {
      const { id } = request.params;
      const criterion = { idUser: id };
      const promise = await User.find(criterion).exec();
      if (promise.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse usuário' });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async create(request, response) {
    try {
      const { name, email, senha, cpf, telefone } = request.body;
      const idUser = v4();
      const username = name.toLowerCase().split(' ')[0] + idUser;
      const criterionEmail = { email };
      const criterionCPF = { cpf };

      const promiseEmail = await User.find(criterionEmail).exec();
      if (promiseEmail.length !== 0) {
        return response
          .status(400)
          .json({
            message:
              'Não é possível criar este usuário, e-mail já consta na plataforma',
          })
          .end();
      }

      const promiseCPF = await User.find(criterionCPF).exec();
      if (promiseCPF.length !== 0) {
        return response
          .status(400)
          .json({
            message:
              'Não é possível criar este usuário, CPF já consta na plataforma',
          })
          .end();
      }
      const idImage = v4();
      const createPromise = await User.create({
        idUser,
        name,
        username,
        email,
        senha,
        cpf,
        telefone,
        picpay: '',
      });
      const createPromisePhoto = await PhotoUsers.create({
        idImage,
        filename: 'default.png',
        originalname: 'default.png',
        idUser,
      });
      return response.json(createPromise);
    } catch (err) {
      return err;
    }
  }

  static async update(request, response) {
    try {
      const { id } = request.params;
      const {
        cpf,
        name,
        username,
        email,
        senha,
        telefone,
        picpay,
      } = request.body;

      const criterionId = { idUser: id };
      const criterion = {
        $and: [{ idUser: { $ne: id } }, { $or: [{ email }, { cpf }] }],
      };
      const promiseExist = await User.find(criterionId).exec();
      if (promiseExist.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse usuário' });
      }
      const promise = await User.find(criterion).exec();
      if (promise.length !== 0) {
        return response
          .status(400)
          .json({
            message:
              'Não foi possível atualizar os dados, e-mail ou CPF já constam na plataforma',
          })
          .end();
      }
      const criterionUsername = {
        $and: [{ idUser: { $ne: id } }, { $or: [{ username }] }],
      };
      const promiseUsernameExist = await User.find(criterionUsername).exec();
      if (promiseUsernameExist.length !== 0) {
        return response
          .status(400)
          .json({
            message:
              'Não foi possível atualizar os dados, username já consta na plataforma',
          })
          .end();
      }
      const updatePromise = await User.updateOne(
        { idUser: id },
        {
          id,
          cpf,
          name,
          username,
          email,
          senha,
          telefone,
          picpay,
        },
      );
      if (updatePromise.ok === 1) {
        const res = await User.find(criterionId).exec();
        return response.json(res);
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível atualizar o usuário' });
    } catch (err) {
      return err;
    }
  }

  static async delete(request, response) {
    try {
      const { id } = request.params;
      const { reason } = request.body;

      const criterion = { idUser: id };
      const promiseUser = await User.find(criterion).exec();
      if (promiseUser.length === 0) {
        return response
          .status(400)
          .json({ message: 'Não foi possível encontrar esse usuário' });
      }
      const promisePhoto = await PhotoUsers.find(criterion).exec();
      const { idImage } = promisePhoto[0];

      const deletePromisePhoto = await PhotoUsers.deleteOne({
        idImage,
      });

      const promise = await User.updateOne(criterion, {
        id,
        cpf: '',
        name: '',
        username: '',
        email: '',
        senha: '',
        telefone: '',
        picpay: '',
        reason,
      }).exec();

      if (promise.ok === 1) {
        const res = await User.find(criterion).exec();
        return response.json(res);
      }

      return response
        .status(400)
        .json({ message: 'Não foi possível excluir o usuário' });
    } catch (err) {
      return err;
    }
  }
}

module.exports = UserController;
