'use strict';
const http = require('http');
const fs = require('fs');
const jsContent = fs.readFileSync('./web-storage.js')
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.write('<script src="web-storage.js"></script>');
      break;
    case '/web-storage.js':
      res.end(jsContent);
      break;
    default:
      break;
  }
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});