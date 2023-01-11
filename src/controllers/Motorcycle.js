import Motorcycle from '../models/Motorcycle';
import Photo from '../models/Photo';

class MotorcycleController {
  async index(req, res) {
    try {
      const motorcycles = await Motorcycle.findAll({
        attributes: ['brand', 'model', 'year', 'displacement', 'cylinders', 'weight', 'top_speed'],
        order: [['id', 'desc'], [Photo, 'id', 'desc']],
        include: {
          model: Photo,
          attributes: ['file_name'],
        },
      });
      return res.json(motorcycles);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async create(req, res) {
    try {
      req.body.creator_id = req.userId;
      const motorcycle = await Motorcycle.create(req.body);

      return res.json(motorcycle);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) { return res.status(400).json({ errors: ['Missing ID'] }); }

      const motorcycle = await Motorcycle.findByPk(id, {
        attributes: ['brand', 'model', 'year', 'displacement', 'cylinders', 'weight', 'top_speed'],
        order: [['id', 'desc'], [Photo, 'id', 'desc']],
        include: {
          model: Photo,
          attributes: ['file_name'],
        },
      });
      if (!motorcycle) { return res.status(404).json({ errors: ['Motorcycle not found'] }); }

      return res.json(motorcycle);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) { return res.status(400).json({ errors: ['Missing ID'] }); }

      const motorcycle = await Motorcycle.findByPk(id);
      if (!motorcycle) { return res.status(404).json({ errors: ['Motorcycle not found'] }); }

      const newMotorcycle = await motorcycle.update(req.body);

      return res.json(newMotorcycle);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) { return res.status(400).json({ errors: ['Missing ID'] }); }

      const motorcycle = await Motorcycle.findByPk(id);
      if (!motorcycle) { return res.status(404).json({ errors: ['Motorcycle not found'] }); }

      await motorcycle.destroy();
      return res.json({ success: true });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new MotorcycleController();
