const fs = require('fs')
const http = require('http')
const path = require('path')

const server = http.createServer((req,res) => {
  let url = req.url
  if (url === '/') {
    fs.readFile(path.resolve(__dirname, './index.html'), (err, data) => {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data)
      setTimeout(() => {
        res.write(`
        <script type="text/javascript">
            alter('success')
            parent.document.getElementById('test').innerHTML = "success";
        </script>
    `)
      }, 3000)
    })
  }
  if (url === '/clock') {
      //keep-alive  network里会一直看到那条链接的time waterfall增加 浏览器小圈圈一直在转
      setInterval(function () {  //服务端接收到以后不断开 而是res.write 
        res.write(`
            <script type="text/javascript">
                parent.document.getElementById('clock').innerHTML = "${new Date().toLocaleTimeString()}";
            </script>
        `);
        }, 20000);
  }
})

server.listen(3000)