const path = require('path');
const fs = require('fs');
const uploadConfig = require('../config/upload');
const PhotoUsers = require('../models/photo_user');

class PhotoUser {
  static async index(request, response) {
    try {
      const promise = await PhotoUsers.find().exec();
      if (promise.length === 0) {
        return response.status(400).json({ message: 'Ops, não há fotos aqui' });
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
      const promise = await PhotoUsers.find(criterion).exec();
      if (promise.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar essa foto desse usuário',
        });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async update(request, response) {
    try {
      const { id } = request.params;
      const { originalname, filename } = request.file;
      const criterionId = { idUser: id };
      const promiseExist = await PhotoUsers.find(criterionId).exec();
      if (promiseExist.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse usuário',
        });
      }
      const { idImage } = promiseExist[0];

      if (promiseExist[0].filename !== 'default.png') {
        const userAvatarFilePath = path.join(
          uploadConfig.user.directory,
          promiseExist[0].filename,
        );
        const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

        if (userAvatarFileExists) {
          await fs.promises.unlink(userAvatarFilePath);
        }
        const updatePromise = await PhotoUsers.updateOne(
          { idUser: id },
          {
            idImage,
            filename,
            originalname,
            idUser: id,
          },
        );
        if (updatePromise.ok === 1) {
          const res = await PhotoUsers.find(criterionId).exec();
          return response.json(res);
        }
        return response
          .status(400)
          .json({ message: 'Não foi possível atualizar a foto' });
      }
      const updatePromise = await PhotoUsers.updateOne(
        { idUser: id },
        {
          idImage,
          filename,
          originalname,
          idUser: id,
        },
      );
      if (updatePromise.ok === 1) {
        const res = await PhotoUsers.find(criterionId).exec();
        return response.json(res);
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível atualizar a foto' });
    } catch (err) {
      return err;
    }
  }

  static async delete(request, response) {
    try {
      const { id } = request.params;
      const criterio = { idUser: id };

      const promiseExist = await PhotoUsers.find(criterio).exec();
      if (promiseExist.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse usuário',
        });
      }
      const { idImage } = promiseExist[0];
      if (promiseExist[0].filename !== 'default.png') {
        const userAvatarFilePath = path.join(
          uploadConfig.user.directory,
          promiseExist[0].filename,
        );
        const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

        if (userAvatarFileExists) {
          await fs.promises.unlink(userAvatarFilePath);
        }
      }
      const updatePromise = await PhotoUsers.updateOne(
        { idUser: id },
        {
          idImage,
          filename: 'default.png',
          originalname: 'default.png',
          idUser: id,
        },
      );
      if (updatePromise.ok === 1) {
        return response.json({ message: 'Removido com sucesso' });
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível excluir a imagem' });
    } catch (err) {
      return err;
    }
  }
}
module.exports = PhotoUser;
