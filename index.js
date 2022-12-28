'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  const expiresDate = new Date(now + 30* 1000 * 60 * 60 * 24);
  console.log(`now:${now} expiresDate:${expiresDate}`)
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.setHeader('Set-Cookie','key=value;expires=Wed, 21 Oct 2025 07:28:00 GMT');
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  res.end(new Date(last_access_time).toString());
});
const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});