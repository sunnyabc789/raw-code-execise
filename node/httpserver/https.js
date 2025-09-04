const https = require('https');
const fs = require('fs')
const path = require('path')

const privateKey  = fs.readFileSync(path.join(__dirname, './ca/private.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, './ca/file.crt'), 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, (req, res) => {
    let pathname = req.url;
    console.log(pathname,'===')
    if (pathname === "/") {
      res.writeHead(200, {
        'Set-Cookie': ['myCookie=test;SameSite=None;Secure;domain=.domain.com'],
        // "location": "https://baidu.com" 301
      });
    //   res.writeHead(200, [
    //     ['Set-Cookie', 'mycookie1=value1'],
    //     ['Set-Cookie', 'mycookie2=value2']
    // ]);
      fs.readFile(path.resolve(__dirname + "/index.html"), (err, data) => {
        res.end(data);
      });
    }

    // node sse
    if (pathname === '/getSse') {
      let count = 0;
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
      });
      res.write(`event: open\n`);
      res.write('data: ok\n\n')
      const intervalId = setInterval(() => {
        if (count > 2) {
          res.write(`event: close\n`);
          res.write('data: 234\n\n')
          res.write(`event: message\n`);
          res.write('data: 123');
          clearInterval(intervalId);
          return;
        }
        count++
        const message = `Data at ${new Date().toLocaleTimeString()}`;
        res.write(`data: ${message}\n\n`);
      }, 2000);

      // 当客户端断开连接时，清除定时器
      // req如果监听data end 好像也会触发这里 有点问题
      req.on('close', () => {
        console.log('close===');
        clearInterval(intervalId);
        res.write(`data: null`);
        //  res.write(`null`);
      });
    }


    if (pathname === '/postbody') {
      let body = '';

      // 收集 POST 数据
      req.on('data', chunk => {
        body += chunk;
      });

      // 数据接收完毕
      req.on('end', () => {
        console.log('POST 数据:', body);
        try {
          JSON.parse(body)
        } catch (e) {
          
        }
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        res.end('数据已接收\n');
      });
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