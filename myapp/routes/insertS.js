var express = require('express');
var router = express.Router();

router.post('/', async function(req, res, next) {
    let nome = req.body.nomeCompleto;
    let idade = req.body.idade;
    let dataNascimento = req.body.dataNascimento;
    let sexo = req.body.sexo;
    let genitora = req.body.genitora;
    let genitor = req.body.genitor;
    let faccoes = req.body.faccoes;
    let numero = req.body.numero;
    let rua = req.body.rua;
    let bairro = req.body.bairro;
    // Você pode lidar com a imagem da forma que preferir, talvez salvá-la no servidor, por exemplo:
    //let imagem = req.body.imagem;

    let dados = {
      'nomeCompleto': nome,
      'idade': idade,
      'dataNascimento': dataNascimento,
      'sexo': sexo,
      'genitora': genitora,
      'genitor': genitor,
      'faccoes': faccoes,
      'numero': numero,
      'rua': rua,
      'bairro': bairro,
      //'imagem': imagem
  };
    dados = JSON.stringify(dados)
    console.log(dados);
    try {
      await fetch("http://localhost:4000/insertSusp/", {
        method: "POST",
        body: dados,
        headers: { "Content-Type": "application/json" },
      }).then(res.redirect("selectSusp"));
    } catch (ex) {
      res.status(500).send({ erro: "deu erro!!" });
    }
  });


module.exports = router;
