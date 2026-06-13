const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;

http.createServer((req, res) => {
  const file = path.join(dir, req.url === '/' ? '/publier_service_basique.html' : req.url);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); }
    else { res.writeHead(200, { 'Content-Type': 'text/html' }); res.end(data); }
  });
}).listen(8765, () => console.log('Server running on http://localhost:8765'));
