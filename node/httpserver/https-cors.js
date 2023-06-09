const https = require('https');
const fs = require('fs')
const path = require('path')

const privateKey  = fs.readFileSync(path.join(__dirname, './ca/private.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, './ca/file.crt'), 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, (req, res) => {
  console.log(req.headers,'here===')
  console.log(req.headers.cookie,'here===')
    //设置允许 http://localhost:3000 这个域响应
    //   res.writeHead(302, {
    //     "content-type": "application/javascript",
    //     "Access-Control-Allow-Origin": "http://bp.cn.daily.bp.com",
    //     "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
    //     "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With",
    //     "Access-Control-Allow-Credentials": "true"
    //   });
      // res.setHeader("Access-Control-Allow-Origin", "http://bp.cn.domain.com:3000");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With,Token,x-access-token');
      res.setHeader( "Access-Control-Allow-Credentials", "true");
      res.setHeader( "X-Content-Type-Options", "nosniff");
      res.setHeader( "X-XSS-Protection", "1");
      res.end()
});

const SSLPORT = 443;


httpsServer.listen(SSLPORT, function() {
    console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});