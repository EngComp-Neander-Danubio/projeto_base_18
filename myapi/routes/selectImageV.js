var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:placa', async function(req, res, next) {
  const placa = req.params.placa;

  // Construindo o caminho para a pasta das imagens com base na placa
  const pastaImagens = path.join(path.resolve(__dirname, `../public/uploads/veiculos/`), placa);

  try {
    // Verificando se a pasta de imagens existe
    if (!fs.existsSync(pastaImagens)) {
      console.error('Pasta de imagens não encontrada:', pastaImagens);
      return res.sendStatus(404); // Retornar status 404 (Not Found) caso a pasta não exista
    }

    // Lendo o conteúdo da pasta
    fs.readdir(pastaImagens, async (err, files) => {
      if (err) {
        console.error('Erro ao ler a pasta:', err);
        return res.sendStatus(500); // Retornar status 500 (Internal Server Error) em caso de erro
      }

      const imagens = files.map((file) => {
        return path.join(pastaImagens, file);
      });

      res.json(imagens);
    });
  } catch (ex) {
    console.error('Erro ao processar as imagens:', ex);
    res.sendStatus(500); // Retornar status 500 (Internal Server Error) em caso de erro
  }
});

module.exports = router;
