var express = require('express');
var router = express.Router();
//const fetch = require('node-fetch');

router.post('/:p', async function (req, res, next) {
  let p = req.params.p;
  let modelo = req.body.modelo;
  let marca = req.body.marca;
  let placa = req.body.placa;
  let chassi = req.body.chassi;
  let datas25 = req.body.datas25;
  let ocorrencia = req.body.ocorrencia;
  let local = req.body.local;

  let dados = {
    'modelo': modelo,
    'marca': marca,
    'placa': placa,
    'chassi': chassi,
    'datas25': datas25,
    'ocorrencia': ocorrencia,
    'locals13': local
  };

  console.table(dados);

  try {
    await fetch(`http://localhost:4000/updateV/${p}`, {
      method: "PATCH",
      body: JSON.stringify(dados),
      headers: { "Content-Type": "application/json" },
    });
    res.redirect("/selectV");
  } catch (ex) {
    res.status(500).send({ erro: "deu erro!!" });
  }
});

module.exports = router;
