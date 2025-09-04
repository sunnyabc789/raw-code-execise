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


const httpsServer = https.createServer(credentials, (req, res) => {
  // const httpsServer = http.createServer((req, res) => {
  let pathname = req.url;
  console.log(pathname, '===')
  if (pathname === "/") {
      fs.readFile(path.resolve(__dirname + "/index.html"), (err, data) => {
      res.end(data);
    });
  }

    if (pathname.includes('/xxxx')) {
    // 写外面 会出现  Cannot write headers after they are sent to the client 报错 res会话挂断时 这个也需要跟着挂断
    const proxy = httpProxy.createProxyServer({})

    // 目标URL，即请求将被转发的地址
    if (req.method === 'OPTIONS') {

      const headers = {
        "Access-Control-Allow-Origin": "*", // 或者指定特定的域名
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "pragma,Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With,Token,x-access-token",
        "Access-Control-Max-Age": "86400", // 24小时
      };
      res.writeHead(200, headers);
      res.end();
      return;
    }
    const target = 'target.example.com';
    proxy.web(req, res, {
      target: {
        protocol: 'https:',
        host: target,
        port: 443
      },
      changeOrigin: true,
      selfHandleResponse: true,
      secure: false,
      //  rejectUnauthorized: false,
      //  ssl: { rejectUnauthorized: false } 
    }, (err) => {
      console.log(err, 'e==')
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/plain'
        });
        res.end('Something went wrong.');
      }
    })

    proxy.on('proxyReq', (proxyReq, req, res, options) => {
      proxyReq.setHeader('Cookie', 'ckk')
    })
    proxy.on('proxyRes', (proxyRes, req, res) => {
      const headers = {
        ...proxyRes.headers,
        "Access-Control-Allow-Origin": "*", // 或者指定特定的域名
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "pragma,Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With,Token,x-access-token",
        "Access-Control-Max-Age": "86400", // 24小时
      };
      res.writeHead(200, headers);
      proxyRes.pipe(res);
    })
  }

})
httpsServer.listen(SSLPORT, function () {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

// 写外面 会出现  Cannot write headers after they are sent to the client 报错 res会话挂断时 这个也需要跟着挂断
// const proxy = httpProxy.createProxyServer({})


// const httpsServer = https.createServer(credentials, (req, res) => {
//     let pathname = req.url;
//     console.log(pathname,'===')
//     if (pathname === "/") {
//       fs.readFile(path.resolve(__dirname + "/index.html"), (err, data) => {
//         res.end(data);
//       });
//     }

//     if (pathname === '/proxy') {
//         // 跨域会有这东西 rawProxy就会出问题
//       if (req.method === 'OPTIONS') {

//         const headers = {
//           "Access-Control-Allow-Origin": "https://www.example.com", // 或者指定特定的域名
//           "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//           "Access-Control-Allow-Credentials": true,
//           "Access-Control-Allow-Headers": "Content-Type, x-xsrf-token",
//           "Access-Control-Max-Age": "86400" // 24小时
//         };
 
//         res.writeHead(200, headers);
//         res.end();
//         return;
//       } else {

//         // https://github.com/http-party/node-http-proxy?spm=215a4a3a.2ef5001f.0.0.6da43bc7r7hU23#readme
//         const target = 'www.example1.com'
//         proxy.web(req, res, {
//          target: {
//           protocol: 'https:',
//           host: target,
//           port: 443
//          },
//         changeOrigin: true,
//         selfHandleResponse: true,
//         secure: false,
//        }, (err) => {
//         console.log(err,'e==')
//          if (err) {
//            res.writeHead(500, {
//              'Content-Type': 'text/plain'
//            });
//            res.end('Something went wrong.');
//          }
//        })

//        proxy.on('proxyReq', (proxyReq, req, res, options) => {
//           proxyReq.setHeader('Cookie', 'abc')
//        })

//        proxy.on('proxyRes', (proxyRes, req, res) =>{
//           var body = [];
//           // proxyRes.on('data', function (chunk) {
//           //   body.push(chunk);
//           // });
//           proxyRes.on('end', function () {
//             // proxyRes.headers['content-encoding'] === 'gzip' body会是个乱码 
//             // 所以 headers 很重要 不看根本不知道这个乱码是什么
//             console.log(proxyRes.headers,'header===');
//             body = Buffer.concat(body).toString();
//             console.log("res from proxied server:", body);

//             const headers = {
//               "Access-Control-Allow-Origin": "https://www.example.com", // 或者指定特定的域名
//               "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//               "Access-Control-Allow-Credentials": true,
//               "Access-Control-Allow-Headers": "Content-Type, x-xsrf-token ",
//               "Access-Control-Max-Age": "86400", // 24小时
//               //   'Content-Type': 'application/json',
//               ...proxyRes.headers,
//             };
//             res.writeHead(200, headers);
//             // 流式响应 不同于 res.end() node最底层api  
//             // 其实这块没必要放在 proxyRes.on('end' 里面
//             proxyRes.pipe(res);

//             // 如果没有  ...proxyRes.headers, 没把content-encoding: gzip响应头带上 就要解压后响应
//             // 此处留个解压的用例
//             // const gunzip = zlib.createGunzip();
//             // proxyRes.pipe(gunzip).pipe(res);

//             // process.stdout打印到控制台
//             // proxyRes.pipe(gunzip).pipe(process.stdout)
//           });


//           const headers = {
//             "Access-Control-Allow-Origin": "https://www.expamle.com", // 或者指定特定的域名
//             "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
//             "Access-Control-Allow-Credentials": true,
//             "Access-Control-Allow-Headers": "Content-Type, x-xsrf-token ",
//             "Access-Control-Max-Age": "86400", // 24小时
//             // 'content-type': 'application/json;charset=UTF-8',
//             // 'content-encoding': 'gzip',
//             ...proxyRes.headers,
//           };

//           res.writeHead(200, headers);
//           const gunzip = zlib.createGunzip();
          
//           // proxyRes.pipe(gunzip).pipe(res);
//           proxyRes.pipe(res)

          
//           return
//        });
//       }
//     }

//     if (pathname === "/index.js") {
//       res.writeHead(200, {
//         'Set-Cookie': ['myCookie=test;SameSite=None;Secure;domain=.domain.com']
//       });
//     //   res.writeHead(200, [
//     //     ['Set-Cookie', 'mycookie1=value1'],
//     //     ['Set-Cookie', 'mycookie2=value2']
//     // ]);
//       fs.readFile(path.resolve(__dirname + "/index.js"), (err, data) => {
//         res.end(data);
//       });
//     }

    
// });


// const SSLPORT = 8001;


// httpsServer.listen(SSLPORT, function() {
//     console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
// });





