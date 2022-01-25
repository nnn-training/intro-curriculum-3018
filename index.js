'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  const limit_time = 'Mon, 07 Jan 2036 00:00:00 GMT'
  res.setHeader('Set-Cookie', `last_access=${now};expires=${limit_time}`);
  res.end(`last_access=${now};expires=${limit_time}`);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

