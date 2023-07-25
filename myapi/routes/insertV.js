var express = require('express');
var router = express.Router();
var fs = require('fs');
const path = require('path');

router.post('/', (req, res) => {
  var dados = req.body;
  console.log(dados);
  var veiculos = JSON.parse(fs.readFileSync(path.join(path.resolve(__dirname, "../public"), 'veiculos.json')));
  
  veiculos.push(dados);
  
  fs.writeFile(path.join(path.resolve(__dirname, "../public"), 'veiculos.json'), JSON.stringify(veiculos), (err) => {
    if (err) {
      console.error(err);
      console.log(dados);
      res.sendStatus(500);
    } else {
      console.log('Data successfully written to veiculos.json');
      res.sendStatus(200);
    }
  });
});

module.exports = router;
