(req, res) => {

    var body = "";

    req.on('data', function (chunk) {
      body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
      console.log("chunk:", chunk);
    });

    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
      // 解析参数
      body = JSON.parse(body);  //将一个字符串反序列化为一个对象
      console.log("body:", body);

     // 设置响应头部信息及编码
     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
     var data = {"code":200, "msg":"success", "token":"token_" + body.username + "_" + body.password};
     res.end(JSON.stringify(data));

    });

  }