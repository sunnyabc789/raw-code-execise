const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let pathname = req.url;
    fs.readFile(path.resolve(__dirname + pathname), (err, data) => {
      res.end(data);
    });
});

server.listen(3000);
