const http = require("http");
const path = require("path");
const fs = require("fs");

// 传音频的时候 pc这样可以 移动端不行
const server = http.createServer((req, res) => {
  let pathname = req.url;
  if (pathname === "/") {
    fs.readFile(path.resolve(__dirname + "/public/index.html"), (err, data) => {
      res.end(data);
    });
  } else {
    // var parseUrl = require("parseurl");
    // parseUrl(req).pathname;
    // var stream = new SendStream(req, pathname, {
    //   root: resolve(path.join(__dirname, "public")),
    // });
    // stream.pipe(res);

    let stat;
    try {
      stat = fs.statSync(path.resolve(__dirname + "/public/" + pathname));
    } catch (e) {}
    if (!stat) return;

    var stream = fs.createReadStream(
      path.resolve(__dirname + "/public/" + pathname),
      {
        start: 0,
        end: stat.size - 1,
      }
    );
    // this.emit("stream", stream);
    stream.pipe(res);

    //  fs.readFile(path.resolve(__dirname + "/public/" +pathname), (err, data) => {
    //    res.end(data);
    //  });
  }
});
server.listen(3000);
