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
        'Set-Cookie': ['myCookie=test;SameSite=None;Secure;domain=.domain.com']
      });
    //   res.writeHead(200, [
    //     ['Set-Cookie', 'mycookie1=value1'],
    //     ['Set-Cookie', 'mycookie2=value2']
    // ]);
      fs.readFile(path.resolve(__dirname + "/index.html"), (err, data) => {
        res.end(data);
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