'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  
  const now = Date.now();
  // 30 days * 24 h/day * 3600 seconds/hour * 1000 milliseconds/second
  const expireDate = new Date(now + 30 * 24 * 3600 * 1000);
  res.setHeader('Set-Cookie', `last_access=${now};expires=${expireDate.toUTCString()}`);
  
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  res.end(new Date(last_access_time).toString());
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});
