保活链接

const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.get('/clock', function (req, res) {
    setInterval(function () {  //服务端接收到以后不断开 而是res.write 
        res.write(`
            <script type="text/javascript">
                parent.document.getElementById('clock').innerHTML = "${new Date().toLocaleTimeString()}";
            </script>
        `);
    }, 1000);
});
app.listen(8080);


    <div id="clock"></div>
    <iframe src="/clock" style=" display:none" />  