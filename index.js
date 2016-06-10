var port = process.env.PORT || 8080;
require('http').createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello lxd');
  res.end();
}).listen(port);

console.log('Listenting on port ' + port);
