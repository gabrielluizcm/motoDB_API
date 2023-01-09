import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).json(null);
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) { return res.status(400).json({ errors: ['ID is missing'] }); }

      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.status(500).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) { return res.status(400).json({ errors: ['ID is missing'] }); }

      const user = await User.findByPk(req.params.id);
      if (!user) { return res.status(400).json({ errors: ['User not found'] }); }

      const updatedUser = await user.update(req.body);

      return res.json(updatedUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) { return res.status(400).json({ errors: ['ID is missing'] }); }

      const user = await User.findByPk(req.params.id);
      if (!user) { return res.status(400).json({ errors: ['User not found'] }); }

      await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
