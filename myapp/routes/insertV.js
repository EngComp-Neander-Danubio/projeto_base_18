var express = require("express");
var router = express.Router();

router.post("/", async function(req, res, next) {
  let modelo = req.body.modelo;
  let marca = req.body.marca;
  let placa = req.body.placa;
  let chassi = req.body.chassi;
  let datas25 = req.body.datas25;
  //let status = req.body.status;
  let ocorrencia = req.body.ocorrencia;
  let local = req.body.local;
  //let imagem = req.body.imagem;
   let dadosV = {
    'modelo': modelo,
    'marca': marca,
    'placa': placa,
    'chassi': chassi,
    'datas25': datas25,
    //'status': status,
    //'imagem': imagem,
    'ocorrencia': ocorrencia,
    'locals13': local
  }
  dadosV = JSON.stringify(dadosV)
  console.table(dadosV);

  try {
    await fetch("http://localhost:4000/insertV/", {
      method: "POST",
      body: dadosV,
      headers: { "Content-Type": "application/json" },
    }).then(res.redirect("selectV"));
  } catch (ex) {
    res.status(500).send({ erro: "deu erro!!" });
  }
});

module.exports = router;
