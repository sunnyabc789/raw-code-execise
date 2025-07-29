SSE 服务器推送

SEO 搜索优化

SSR 服务器渲染

EventSource API 
只支持发送GET请求
总体鸡肋  XHR Fetch也能发这个请求 用这个也没带来太大好处
```
    if ('EventSource' in window) {

            // 建立SSE连接，创建EventSource实例，支持跨越
            let source = new EventSource("https://aistudio.xxx-inc.com/api/aiapp/run/LbCnydgZQXQ/1.1.8", 
            { 
              withCredentials: true,
              accept: "*/*",
              method:'POST'

            }
            );

            // 连接创建成功的回调事件
            source.onopen = function (event) {
              console.log("连接成功")
            };

            // 连接创建失败的回调事件
            source.onerror = function (event) {
              //执行错误的页面逻辑,关闭连接
              console.log("连接失败")
              source.close();
            }

            // 接受到数据的回调事件
            source.onmessage = function (event) {
              if (event.data == "[DONE]") {
                //执行完成的页面逻辑
                condole.log(event.data,'1===')
                source.close();
              } else {

              }
            }
          }
        }}
```


```
  onClick={() => {
          if (controllerRef.current) {
            controllerRef.current.abort();
            CnMessage.notice('已中断上一次');
          }
          controllerRef.current = new AbortController();
          let signal = controllerRef.current.signal;

          fetch("https://xx.xxx-inc.com/api/aiapp/run/xx/latest", {
            signal,
            "headers": {
              "accept": "*/*",
              "accept-language": "zh-CN,zh;q=0.9,ru;q=0.8,en;q=0.7",
              "cache-control": "no-cache",
              "content-type": "application/json;charset=UTF-8",
              "pragma": "no-cache",
              "priority": "u=1, i",
              "user-zone": "Asia/Shanghai",
            },
            "referrerPolicy": "no-referrer-when-downgrade",
            "body": `{\"empId\": \"123\",\"question\": \"美流分析\",\"sessionId\": \"${+new Date() +window._GATEWAY_PF.workerNo}\",\"stream\": true,\"returnRunLog\": true}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          }).then(response => {
            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let buffer = "";

            function processStreamResult(result) {
              const chunk = decoder.decode(result.value, { stream: !result.done });
              buffer += chunk;
              //逐条解析后端返回数据
              const lines = buffer.split("\n");
              buffer = lines.pop();

              // 判断是否中断此条消息生成，设置一个标志位,flag为true继续输出为false中断
              if (true) {
              // if (flag) {
                let chatStr = ''
                lines.forEach((line) => {
                  console.log(line)
                  if (line.trim().length > 0) {
                    if (line.match(/^data*/gi)) {
                      // chatStr += line.slice(5);
                      const jsonStr = line.slice(5).trim();
                      const json = JSON.parse(jsonStr)
                      chatStr += json.data.content;
                    
                      //将结果赋值给你需要展示输出结果的地方
                      // console.log(chatStr)
                      if (chatStr === '[DONE]') return
                      setContent(chatStr)

                    }
                    if (line.match(/^data:*$/gi)) {
                      //添加回车，展示的时候才会换行
                      chatStr += "\n";
                    }
                    if (line.match(/^meta*/gi)) {
                      //此条消息输出结束，添加你的逻辑代码
                    }
                  }
                });
              } else {
                //中断此条消息生成后，你的逻辑代码
              }
              console.log(result.done,'result.done===')
              if (!result.done) {
                return reader.read().then(processStreamResult);
              }
            }

            return reader.read().then(processStreamResult);
          })
        }}
```