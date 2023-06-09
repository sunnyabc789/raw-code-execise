const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let pathname = req.url;
  if (pathname === "/") {
    // 可以发图片 文本 但是音频到了移动端用这个就不行了 express的static就可以 必须搞懂 记录到这里
    // 答复：1.本质是stream  2.stream是很底层的api 尝试用pipe   readstream.pipe(res) 失败了
    // res.setHeader('Set-Cookie', 'XSRF_TOKEN=abc;')
    // res.setHeader('Set-Cookie', 'FE_XSRF_TOKEN=efg;')
    fs.readFile(path.resolve(__dirname + "/index1.html"), (err, data) => {
      res.end(data);
    });
  }
  if (pathname === "/test") {
    // 可以发图片 文本 但是音频到了移动端用这个就不行了 express的static就可以 必须搞懂 记录到这里
    // 答复：1.本质是stream  2.stream是很底层的api 尝试用pipe   readstream.pipe(res) 失败了
    // res.setHeader('Set-Cookie', 'XSRF_TOKEN=abc;')
    // res.setHeader('Set-Cookie', 'FE_XSRF_TOKEN=efg;')
    console.log(req.headers.cookie,'req===')
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", 'Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With,Token,x-access-token');
    res.setHeader( "Access-Control-Allow-Credentials", "true");
    res.setHeader( "X-Content-Type-Options", "nosniff");
    res.setHeader( "X-XSS-Protection", "1");
    res.end()
    // fs.readFile(path.resolve(__dirname + "/index.html"), (err, data) => {
    //   res.end(data);
    // });
  }
  if (pathname.match(/\/[a-z].mjs/)) {
    fs.readFile(path.resolve(__dirname + pathname), (err, data) => {
      res.writeHead(200, {
        "content-type": "application/javascript",
      });
      res.end(data);
    });
  }

  // express-static中的 server-static 中的 send 依赖中的代码
  //   fs.stat(path, function onstat (err, stat) {
  //     if (err && err.code === 'ENOENT' && !extname(path) && path[path.length - 1] !== sep) {
  //       // not found, check extensions
  //       return next(err)
  //     }
  //     if (err) return self.onStatError(err)
  //     if (stat.isDirectory()) return self.redirect(path)
  // emit 是原生stream的?
  //     self.emit('file', path, stat)
  //     self.send(path, stat)
  //   })

  //   function next (err) {
  //     if (self._extensions.length <= i) {
  //       return err
  //         ? self.onStatError(err)
  //         : self.error(404)
  //     }

  //     var p = path + '.' + self._extensions[i++]

  //     debug('stat "%s"', p)
  //     fs.stat(p, function (err, stat) {
  //       if (err) return next(err)
  //       if (stat.isDirectory()) return next()
  //       self.emit('file', p, stat)
  //       self.send(p, stat)
  //     })
  //   }
  // }

  // 猜测可行方案 不行
    // stats = fs.statSync(currFile);
  // res.writeHead(200,{
  //   "Content-type": "application/octet-stream",
  //   "Content-Disposition": "attachment;filename=" + encodeURI(fileName),
  //   "Content-Length": stats.size,
  // });
  // let fReadStream = fs.createReadStream(currFile);
  // fReadStream.pipe(res);
});

server.listen(3001);

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
