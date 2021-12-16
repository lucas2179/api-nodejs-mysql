// const app = require('./config/express')();
// const port = app.get('port');

// app.listen(port, () => {
//   console.log(`Server ON running on Port ${port}`)
// });

var http = require('http');

http.createServer(function (req, res) {
  console.log("Sending 504 error to client");
  res.writeHead(504, {'Content-Type': 'text/plain'});
  res.end();
}).listen(8080);
console.log("Server started on port 8080");