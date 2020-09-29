const path = require('path');
const { v4 } = require('uuid');
const fs = require('fs');
const uploadConfig = require('../config/upload');
const PhotoAnnouncements = require('../models/photo_announcement');

class PhotoAnnouncement {
  static async index(request, response) {
    try {
      const promise = await PhotoAnnouncements.find().exec();
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
      const criterion = { idAnnouncement: id };
      const promise = await PhotoAnnouncements.find(criterion).exec();
      if (promise.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar essa foto desse anúncio',
        });
      }

      return response.json(promise);
    } catch (err) {
      return err;
    }
  }

  static async create(request, response) {
    try {
      const { id } = request.params;
      const photos = request.files;
      const originalNames = photos.map(img => {
        return img.originalname;
      });
      const fileNames = photos.map(img => {
        return img.filename;
      });
      const idImage = v4();
      const createPromisePhoto = await PhotoAnnouncements.create({
        idImage,
        filename: originalNames,
        originalname: fileNames,
        idAnnouncement: id,
      });
      return response.json(createPromisePhoto);
    } catch (err) {
      return err;
    }
  }

  static async update(request, response) {
    try {
      const { id } = request.params;
      const photos = request.files;
      const originalNames = photos.map(img => {
        return img.originalname;
      });
      console.log(originalNames);
      const fileNames = photos.map(img => {
        return img.filename;
      });
      const criterionId = { idAnnouncement: id };
      const promiseExist = await PhotoAnnouncements.find(criterionId).exec();
      if (promiseExist.length === 0) {
        return response.status(400).json({
          message: 'Não foi possível encontrar esse anúncio',
        });
      }
      const { idImage } = promiseExist[0];

      const updatePromise = await PhotoAnnouncements.updateOne(
        { idAnnouncement: id },
        {
          idImage,
          filename: fileNames,
          originalname: originalNames,
          idUser: id,
        },
      );
      if (updatePromise.ok === 1) {
        const res = await PhotoAnnouncements.find(criterionId).exec();
        return response.json(res);
      }
      return response
        .status(400)
        .json({ message: 'Não foi possível atualizar as fotos' });
    } catch (err) {
      return err;
    }
  }
}
module.exports = PhotoAnnouncement;
