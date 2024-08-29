const http = require('http')

http.createServer(function (req,res) {
    res.end("This was created")
}).listen(8081)

console.log('Server running at http://localhost:8081/')