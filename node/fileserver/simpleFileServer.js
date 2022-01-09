const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let pathname = req.url;
  if (pathname === "/") {
    fs.readFile(path.resolve(__dirname + "/public/index.html"), (err, data) => {
      res.end(data);
    });
  } else {
    let stat;
    try {
      stat = fs.statSync(path.resolve(__dirname + "/public/" + pathname));
    } catch (e) {}
    if (!stat) return;

    var ranges = req.headers.range;
    var offset = 0;
    var len = stat.size;

    len = Math.max(0, len - offset);
    var BYTES_RANGE_REGEXP = /^ *bytes=/;
    if (BYTES_RANGE_REGEXP.test(ranges)) {
      // req.headers.range
      // bytes=0-1;
      // bytes=32768-35510;
      let temp = ranges.split("=")[1].split("-");
      ranges = [{ start: +temp[0], end: +temp[1] }];
      range = ranges[0];
      res.statusCode = 206;

      // 移动端会发个range请求 必须响应content-range pc端chrome能兼容不需要
      res.setHeader(
        "Content-Range",
        `${
          "bytes" +
          " " +
          (range ? range.start + "-" + range.end : "*") +
          "/" +
          len
        }`
      );

      offset += ranges[0].start;
      len = ranges[0].end - ranges[0].start + 1;
    }

    let opts = {};
    opts.start = offset;
    opts.end = Math.max(offset, offset + len - 1);

    // 一般字符文件 图片 这部分就够了
    var stream = fs.createReadStream(
      path.resolve(__dirname + "/public/" + pathname),
      opts
    );
    stream.pipe(res);
  }
});

server.listen(3000);
