nginx重启
nginx/sbin/nginx -s reload

代理   proxy_pass http://127.0.0.1:8081;


nohup node server.js &

说明：

nohup 命令对 server.js 进程做了三件事

1
2
3
（1）阻止SIGHUP信号发到这个进程。
（2）关闭标准输入。该进程不再能够接收任何输入，即使运行在前台。
（3）重定向标准输出和标准错误到文件nohup.out。
也就是说，nohup命令实际上将子进程与它所在的 session 分离了。

注意，nohup命令不会自动把进程变为"后台任务"，所以必须加上&符号。


pkill node   //关闭 node 服务


nginx限制文件上传大小1M
设置 client_max_body_size 10m;