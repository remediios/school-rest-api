import User from "../models/User";

class UserController {
  // index

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // store
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (error) {
      res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: ["ID is required"] });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ error: ["User not found"] });
      }
      const newUserData = await user.update(req.body);
      return res.json(newUserData);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: ["ID is required"] });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ error: ["User not found"] });
      }
      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
