const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let pathname = req.url;
  if (pathname === "/") {
    res.setHeader("Set-Cookie", "myCookie2=test;");
    res.writeHead(200);
  //   res.writeHead(200, [
  //     ['Set-Cookie', 'mycookie1=value1'],
  //     ['Set-Cookie', 'mycookie2=value2']
  // ]);
    fs.readFile(path.resolve(__dirname + "/index.html"), (err, data) => {
      res.end(data);
    });
  }

  if (pathname === '/register') {
    console.log(req.headers.cookie,'req===')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With,Token,x-access-token');
    res.setHeader( "Access-Control-Allow-Credentials", "true");
    res.setHeader( "X-Content-Type-Options", "nosniff");
    res.setHeader( "X-XSS-Protection", "1");
    res.end()
  }
});

server.listen(3000);

// 一行一行读文件
// const readline = require("readline");
// //Readline是Node.js里实现标准输入输出的封装好的模块，通过这个模块我们可以以逐行的方式读取数据流。使用require(“readline”)可以引用模块。
// const fs = require("fs");
// const r1 = readline.createInterface({
//   input: fs.createReadStream("data.txt"),
// });
// var i = 1; //txt中的行数
// r1.on("line", function (line) {
//   //事件监听
//   console.log("Line from file:" + i + ":" + line);
//   if (i == 1) {
//     console.log(line);
//   }
//   i += 1;
// });
