var express = require('express');
var router = express.Router();

router.get('/:placa', async function (req, res, next) {
  const placa = req.params.placa;
  placa = toString(placa);
  console.log(placa);
  //const modelo = req.params.modelo;
  console.log("chegou aqui")
  try {
    // Chamar a API para obter as imagens correspondentes com base na 'placa' e no 'modelo'
    const response = await fetch("http://localhost:4000/selectImageV/${placa}");
    if (response.status === 200) {
      const imagens = await response.json();

      // Renderizar a view com as imagens recebidas
      res.render('imagesV', { imagens: imagens }); // 'sua_view' é o nome da view que exibirá as imagens
    } else {
      throw "Deu erro na chamada à API!!";
    }
  } catch (ex) {
    throw ex;
  }
});

module.exports = router;
