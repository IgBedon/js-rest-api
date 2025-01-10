import Aluno from "../models/AlunoModel";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create( {
      nome: "Teste",
      sobrenome: "01",
      email: "teste@gmail.com",
      idade: 12,
      peso: 43.3,
      altura: 34.2
    })
    res.json(novoAluno);
  }

}

export default new HomeController();
