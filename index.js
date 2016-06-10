require('http').createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello lxd');
  res.end();
}).listen(8080);

console.log('Listenting on port 8080');
