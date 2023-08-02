var express = require('express');
var router = express.Router();
var fs = require('fs');
const path = require('path');

router.post('/', (req, res) => {
  var dados = req.body;
  console.log(dados);
  var suspeitos = JSON.parse(fs.readFileSync(path.join(path.resolve(__dirname, "../public"), 'suspeitos.json')));
  
  suspeitos.push(dados);
  
  fs.writeFile(path.join(path.resolve(__dirname, "../public"), 'suspeitos.json'), JSON.stringify(suspeitos), (err) => {
    if (err) {
      console.error(err);
      console.log(dados);
      res.sendStatus(500);
    } else {
      console.log('Data successfully written to suspeitos.json');
      res.sendStatus(200);
    }
  }
  );
});

module.exports = router;
