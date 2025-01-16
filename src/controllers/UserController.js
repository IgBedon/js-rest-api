import User from "../models/UserModel";

class UserController {

  async readAll(req, res) {
    try{
      const users = await User.findAll();
      if(!users) return res.json(null)
      return res.json(users);
    } catch(e) {
      res.status(400).json({
        "errors": e.errors.map((erro) => erro.message)
      })
    }
  }

  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch(e) {
      res.status(400).json({
        "errors": e.errors.map((erro) => erro.message)
      })
    }
  }

  async read(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if(!user) return res.json(null);
      return res.json(user);
    } catch(e) {
      res.status(400).json({
        "errors": e.errors.map((erro) => erro.message)
      })
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if(!user) return res.json("Usuário não encontrado");

      const newUser = await user.update(req.body);
      return res.json(newUser);

    } catch(e) {
      console.log(e);
      res.status(400).json({
        "errors": e.errors.map((erro) => erro.message)
      })
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if(!user) return res.json("Usuário não encontrado");

      await user.destroy();
      res.json(user);
    } catch(e) {
      console.log(e);
      res.status(400).json({
        "errors": e.errors.map((erro) => erro.message)
      })
    }
  }

}

export default new UserController();
