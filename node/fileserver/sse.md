https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html

服务器向浏览器推送信息，除了 WebSocket，还有一种方法：Server-Sent Events（以下简称 SSE）。本文介绍它的用法。

// 逆向的切片上传   -> 切片推送
严格地说，HTTP 协议无法做到服务器主动推送信息。但是，有一种变通方法，就是服务器向客户端声明，接下来要发送的是流信息（streaming）。

也就是说，发送的不是一次性的数据包，而是一个数据流，会连续不断地发送过来。这时，客户端不会关闭连接，会一直等着服务器发过来的新的数据流，视频播放就是这样的例子。本质上，这种通信就是以流信息的方式，完成一次用时很长的下载。

SSE 就是利用这种机制，使用流信息向浏览器推送信息。它基于 HTTP 协议，目前除了 IE/Edge，其他浏览器都支持。


SSE 也有自己的优点。

SSE 使用 HTTP 协议，现有的服务器软件都支持。WebSocket 是一个独立协议。
SSE 属于轻量级，使用简单；WebSocket 协议相对复杂。
SSE 默认支持断线重连，WebSocket 需要自己实现。
SSE 一般只用来传送文本，二进制数据需要编码后传送，WebSocket 默认支持传送二进制数据。
SSE 支持自定义发送的消息类型。

```
if ('EventSource' in window) {
  // ...
}

var source = new EventSource(url);


var source = new EventSource(url, { withCredentials: true });



```

EventSource实例的readyState属性，表明连接的当前状态。该属性只读，可以取以下值。

0：相当于常量EventSource.CONNECTING，表示连接还未建立，或者断线正在重连。
1：相当于常量EventSource.OPEN，表示连接已经建立，可以接受数据。
2：相当于常量EventSource.CLOSED，表示连接已断，且不会重连。


连接一旦建立，就会触发open事件，可以在onopen属性定义回调函数。


```

source.onopen = function (event) {
  // ...
};

// 另一种写法
source.addEventListener('open', function (event) {
  // ...
}, false);

```

客户端收到服务器发来的数据，就会触发message事件，可以在onmessage属性的回调函数。


```

source.onmessage = function (event) {
  var data = event.data;
  // handle message
};

// 另一种写法
source.addEventListener('message', function (event) {
  var data = event.data;
  // handle message
}, false);

```

面代码中，事件对象的data属性就是服务器端传回的数据（文本格式）。

如果发生通信错误（比如连接中断），就会触发error事件，可以在onerror属性定义回调函数。

```
source.onerror = function (event) {
  // handle error event
};

// 另一种写法
source.addEventListener('error', function (event) {
  // handle error event
}, false);

```

close方法用于关闭 SSE 连接。

```
source.close();

```

默认情况下，服务器发来的数据，总是触发浏览器EventSource实例的message事件。开发者还可以自定义 SSE 事件，这种情况下，发送回来的数据不会触发message事件。
```
source.addEventListener('foo', function (event) {
  var data = event.data;
  // handle message
}, false);
```
上面代码中，浏览器对 SSE 的foo事件进行监听。如何实现服务器发送foo事件，请看下文。



# 服务器实现
```

var http = require("http");

http.createServer(function (req, res) {
  var fileName = "." + req.url;

  if (fileName === "./stream") {
    res.writeHead(200, {
      "Content-Type":"text/event-stream",
      "Cache-Control":"no-cache",
      "Connection":"keep-alive",
      "Access-Control-Allow-Origin": '*',
    });
    res.write("retry: 10000\n");
    res.write("event: connecttime\n");
    res.write("data: " + (new Date()) + "\n\n");
    res.write("data: " + (new Date()) + "\n\n");

    let times = 0
    interval = setInterval(function () {
      if (times === 3) {
        console.log(times,'here===')
        times = 0
        res.write("end" + "\n\n");
        clearInterval(interval)
        res.end('')
        return 
      }
      res.write("data: " + (new Date()) + "\n\n");
    }, 1000);

    req.addListener("close", function () {
      clearInterval(interval);
    }, false);
  }
}).listen(8844, "127.0.0.1");

```

# 客户端实现
```
let reader 
fetch("http://localhost:3000/stream", {
  
}).then(response => {
    
    reader = response.body.getReader(); 
})

setInterval(() => {
  const textDecoder = new TextDecoder("utf-8");

  reader.read().then(({ done, value }) => {
    const chunk = textDecoder.decode(value, { stream: true });
    const lines = chunk.split("\n");
    console.log(chunk,'chunk===')
    console.log(lines)

     for (const line of lines) {
      if (line.startsWith("data: ")) {

      // const data = {
      //          id: id,
      //          message: `This is message ${id}`,
      //          timestamp: +new Date(),
      //        };
       // const json = line.slice(6);
       // const data = JSON.parse(json);
       // const p = document.createElement("p");
      } else if (line.startsWith("event: end")) {
       // const p = document.createElement("p");
       // p.textContent = "End of stream";
       // messagesDiv.appendChild(p);
        return;
      }
    }
  })
}, 1000)


// 或者
fetch("http://localhost:3000/sse").then((response) => {
    const reader = response.body.getReader();
    return new ReadableStream({
      start(controller) {
        function push() {
          reader.read().then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }

            const chunk = textDecoder.decode(value, { stream: true });
            const lines = chunk.split("\n");

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const json = line.slice(6);
                const data = JSON.parse(json);
                const p = document.createElement("p");
                p.textContent = `ID: ${data.id}, Message: ${data.message}, Timestamp: ${data.timestamp}`;
                messagesDiv.appendChild(p);
              } else if (line.startsWith("event: end")) {
                const p = document.createElement("p");
                p.textContent = "End of stream";
                messagesDiv.appendChild(p);
                return;
              }
            }

            push();
          });
        }

        push();
      },
    });

```