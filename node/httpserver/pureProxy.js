// 需要装依赖
const httpProxy = require('http-proxy');
const fs = require('fs')
const path = require('path')
const httpProxy = require('http-proxy');


const privateKey  = fs.readFileSync(path.join(__dirname, './ca/private.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, './ca/file.crt'), 'utf8');
const credentials = {key: privateKey, cert: certificate};

const proxy = httpProxy.createProxyServer({
  host: "www.example.com",
  target:'https://www.example.com',
  ssl: credentials,
  secure: false,
  selfHandleResponse: true
}).listen(8001); 

