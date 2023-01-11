import multer from 'multer';
import multerConfig from '../config/multer';
import Motorcycle from '../models/Motorcycle';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('file');

class PhotoController {
  create(req, res) {
    return upload(req, res, async (err) => {
      if (err) { res.status(400).json({ errors: [err.code] }); }

      const { originalname, filename } = req.file;
      const { motorcycleId } = req.body;

      try {
        const motorcycle = await Motorcycle.findByPk(motorcycleId);
        if (!motorcycle) { return res.status(400).json({ errors: ['Motorcycle not found'] }); }

        const photo = await Photo.create({
          original_name: originalname,
          file_name: filename,
          motorcycle_id: motorcycleId,
        });

        return res.json(photo);
      } catch (e) {
        return res.status(400).json({ errors: e.errors.map((error) => error.message) });
      }
    });
  }
}

export default new PhotoController();
