const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let pathname = req.url;
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
      // res.setHeader("Access-Control-Allow-Origin", "http://bp.daily.bird.test");
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      // : Request header field pragma is not allowed by Access-Control-Allow-Headers 
      // 看Network控制台 options那条请求 把 Access-Control-Request-Headers: 里的东西换到这里来
      res.setHeader("Access-Control-Allow-Headers", 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With,Token,x-access-token');
      res.setHeader( "Access-Control-Allow-Credentials", "true");
      res.setHeader( "X-Content-Type-Options", "nosniff");
      res.setHeader( "X-XSS-Protection", "1");

      // res.writeHead(302,{
      //   'Location': 'http://bp.cn.daily.bp.com/cnbp/order/machiningorder?redirect=http://daily.cni.bp.com:7001/v1/processOrder/query'
      // })
  res.end()
});

server.listen(80);