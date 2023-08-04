const http = require('http');
const app = require('./app/app');
const api = require('./api/api');

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api')) {
    api(req, res);
  } else {
    app(req, res);
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
