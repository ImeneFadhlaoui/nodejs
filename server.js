const http = require('http');
var os = require('os');
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World !');
});

const PORT = 3001

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

