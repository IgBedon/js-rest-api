import Aluno from "../models/AlunoModel";

class HomeController {
  async index(req, res) {
    res.json("Teste");
  }

}

export default new HomeController();
