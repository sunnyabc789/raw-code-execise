const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let pathname = req.url;
  if (pathname === "/") {
    res.writeHead(200, {
      'Set-Cookie': ['myCookie2=test;domain=.domain.com;']
    });
  //   res.writeHead(200, [
  //     ['Set-Cookie', 'mycookie1=value1'],
  //     ['Set-Cookie', 'mycookie2=value2']
  // ]);
    fs.readFile(path.resolve(__dirname + "/index.html"), (err, data) => {
      res.end(data);
    });
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
