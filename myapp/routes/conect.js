var express = require("express"); // Importa o módulo express-session
var router = express.Router();
var jwt = require("jsonwebtoken");
const secretKey = 'sua_chave_secreta';

async function getUsers() {
  try {
    const response = await fetch("http://localhost:4000/selectU/");
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

router.post("/", async function(req, res, next) {
  let numeral = req.body.numeral;
  let matricula = req.body.matricula;
  console.log(numeral);

  const users = await getUsers();
  const user = users.find((user) => user.matricula === matricula && user.numeral === numeral);
  
  if (!user) {
    return res.status(401).send('Credenciais inválidas');
  }
  // Gerar o token JWT
  const token = jwt.sign({ id: user.matricula }, secretKey, { expiresIn: '1h' });
  // Armazenar o token nos cookies
  res.cookie('token', token, { httpOnly: true });
  // Redirecionar para a página inicial após o login bem-sucedido
  res.redirect('/homeAccess');
});

module.exports = router;
