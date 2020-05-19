const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
  let pathname = req.url
  if (pathname === '/test') {
    fs.readFile(path.resolve('./index.html'),(err,data) => {
      req.writeHead(200, {
        type: 'text/html'
      })
      req.send(data)   
    })
  }
})