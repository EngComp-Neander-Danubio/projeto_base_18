var express = require('express');
var router = express.Router();

async function getV() {
    try {
      const response = await fetch("http://localhost:4000/selectV/");
      if (response.status === 200) {
        const json = await response.json();
        //console.log(json);
        return json;
      } else {
        throw "Deu erro!!";
      }
    } catch (ex) {
      throw ex;
    }
  }  

router.get('/:placa', async function (req, res, next) { 
    let placa = req.params.placa;

    const veiculos = await getV();
    const v = veiculos.find((veiculos) => veiculos.placa === placa);
    try {
        res.render('form_updateV', { dadoV: v , isAuthenticated: req.cookies.token ? true : false });

    }catch (err) {
        res.status(500).send({ err: 'deu erro!!' })
    }
    
})

module.exports = router;