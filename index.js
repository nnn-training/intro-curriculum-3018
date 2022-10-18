'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url === '/favicon.ico') {
    return res.end();
  }
  const now = Date.now();
  // Cookieの有効期限を2036年1月7日に設定
  const expiresDate = 'Mon, 07 Jan 2036 00:00:00 GMT';

  // Cookieの有効期限を現在から30日後に設定 (2022年度版の練習問題)
  // const expiresDate = new Date(now + 30 * 24 * 60 * 60 * 1000).toUTCString();

  console.log({now});
  console.log({expiresDate});

  res.setHeader('Set-Cookie', `last_access=${now};expires=${expiresDate};`);
  res.end(req.headers.cookie);
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

