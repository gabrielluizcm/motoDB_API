import { extname, resolve } from 'path';
import multer from 'multer';

const rand = () => Math.floor(Math.random() * 10000 + 10000);

const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png'];

export default {
  fileFilter: (req, file, callback) => {
    if (!allowedTypes.includes(file.mimetype)) { return callback(new multer.MulterError('File must be .jpg, .jpeg or .png')); }

    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${rand()}${extname(file.originalname)}`);
    },
  }),
};
