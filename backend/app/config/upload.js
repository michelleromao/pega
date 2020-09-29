const path = require('path');
const crypto = require('crypto');
const multer = require('multer');

const tmpFolderUser = path.resolve(__dirname, '..', '..', 'tmpUser');
const tmpFolderAnnouncement = path.resolve(
  __dirname,
  '..',
  '..',
  'tmpAnnouncement',
);

module.exports = {
  user: {
    directory: tmpFolderUser,
    storage: multer.diskStorage({
      destination: tmpFolderUser,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('HEX');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
  announcement: {
    directory: tmpFolderAnnouncement,
    storage: multer.diskStorage({
      destination: tmpFolderAnnouncement,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('HEX');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
};
