// index.js を起動しローカルホストにアクセス http://localhost:8000/ 

// ブラウザに情報を保存する手段として、 Cookie 以外に Web Storage がある
// Web Storage も Cookie 同様、キーと値のペアをブラウザに保存する仕組み
// Local Storage、Session Storage という種類がある

// Web Storage は JavaScript であれば Cookie よりも手軽に扱うことができ、
// 保存できる容量も 5 MB と大きい。用途の違いとしては、
// Cookie はサーバーとの通信を要するため、サーバーで必要になる情報の保存場所として適している
// 一方で Web Storage は読み書きに通信を必要としないため、
// クライアントのみで必要になる情報の保存場所として適している

// ただし、セッション情報などの重要な情報は Web Storage には保存しないのが推奨
// Cookie は HttpOnly というフラグの付与により、サーバーからのみ読めるように制限できる
// しかし Web Storage には同一生成元ポリシーは適用されるものの、 
// HttpOnly フラグのような仕組みはないため、
// クロスサイトスクリプティングによって内容が意図せず読まれることを防ぎ切るのは難しい

'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  // Set-Cookieヘッダの仕様（Expires=は省略可能）
  // https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Set-Cookie
  res.setHeader('Set-Cookie', 'last_access=' + now + ';', 'expires=Mon, 07 Jan 2036 00:00:00 GMT;');
  // この時刻を表す数字はミリ秒表記になってしまう
  // res.end(req.headers.cookie);
  // ミリ秒を現す文字列をintにして格納
  const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;
  // 文字列に変換
  res.end(new Date(last_access_time).toString());
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
});

