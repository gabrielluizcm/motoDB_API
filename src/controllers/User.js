import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.status(500).json(null);
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) { return res.status(400).json({ errors: ['ID is missing'] }); }

      const user = await User.findByPk(req.params.id);
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(500).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) { return res.status(400).json({ errors: ['User not found'] }); }

      const updatedUser = await user.update(req.body);

      const { id, name, email } = updatedUser;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // On a real scenario this would inactivate user instead of deleting its entry
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) { return res.status(400).json({ errors: ['User not found'] }); }

      await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
