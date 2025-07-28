const https = require('https');
const fs = require('fs');
const path = require('path');
// 需要装依赖
const httpProxy = require('http-proxy');
// node自带
const zlib = require('zlib');

const privateKey  = fs.readFileSync(path.join(__dirname, './ca/private.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, './ca/file.crt'), 'utf8');
const credentials = {key: privateKey, cert: certificate};

const proxy = httpProxy.createProxyServer({})


const httpsServer = https.createServer(credentials, (req, res) => {
    let pathname = req.url;
    console.log(pathname,'===')
    if (pathname === "/") {
      fs.readFile(path.resolve(__dirname + "/index.html"), (err, data) => {
        res.end(data);
      });
    }

    if (pathname === '/proxy') {
        // 跨域会有这东西 rawProxy就会出问题
      if (req.method === 'OPTIONS') {

        const headers = {
          "Access-Control-Allow-Origin": "https://www.example.com", // 或者指定特定的域名
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Headers": "Content-Type, x-xsrf-token",
          "Access-Control-Max-Age": "86400" // 24小时
        };
 
        res.writeHead(200, headers);
        res.end();
        return;
      } else {

        // https://github.com/http-party/node-http-proxy?spm=215a4a3a.2ef5001f.0.0.6da43bc7r7hU23#readme
        const target = 'www.example1.com'
        proxy.web(req, res, {
         target: {
          protocol: 'https:',
          host: target,
          port: 443
         },
        changeOrigin: true,
        selfHandleResponse: true,
        secure: false,
       }, (err) => {
        console.log(err,'e==')
         if (err) {
           res.writeHead(500, {
             'Content-Type': 'text/plain'
           });
           res.end('Something went wrong.');
         }
       })

       proxy.on('proxyReq', (proxyReq, req, res, options) => {
          proxyReq.setHeader('Cookie', 'abc')
       })

          proxy.on('proxyRes', (proxyRes, req, res) =>{
          const headers = {
            "Access-Control-Allow-Origin": "https://www.example.com", // 或者指定特定的域名
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers": "Content-Type, x-xsrf-token ",
            "Access-Control-Max-Age": "86400", // 24小时
            // 'content-type': 'application/json;charset=UTF-8',
            // 'content-encoding': 'gzip',
            ...proxyRes.headers,
          };

          res.writeHead(200, headers);
          proxyRes.pipe(res)
          return
       });
      }
    }

    if (pathname === "/index.js") {
      res.writeHead(200, {
        'Set-Cookie': ['myCookie=test;SameSite=None;Secure;domain=.domain.com']
      });
    //   res.writeHead(200, [
    //     ['Set-Cookie', 'mycookie1=value1'],
    //     ['Set-Cookie', 'mycookie2=value2']
    // ]);
      fs.readFile(path.resolve(__dirname + "/index.js"), (err, data) => {
        res.end(data);
      });
    }

    
});


const SSLPORT = 8001;


httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});