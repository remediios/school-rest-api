import User from "../models/User";

class UserController {
  // index

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "name", "email"] });

      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // store
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;
      res.json({ id, name, email });
    } catch (error) {
      res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      if (!req.userId) {
        return res.status(400).json({ error: ["ID is required"] });
      }

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ error: ["User not found"] });
      }
      const newUserData = await user.update(req.body);
      const { id, name, email } = newUserData;
      return res.json({ id, name, email });
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const id = req.userId;
      if (!id) {
        return res.status(400).json({ error: ["ID is required"] });
      }

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({ error: ["User not found"] });
      }
      await user.destroy();
      return res.json({ msg: "User deleted" });
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
