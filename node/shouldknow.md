## node 安全设计缺陷
https://github.com/nodejs/node/blob/HEAD/SECURITY.md#security
举个例子，Node.js 提供了很多操作文件的能力，
假设我们把一个不可信的用户输入，传入到这些 API 的参数中，因为这意味着外部可以随意更改传入的参数，也就是说可以随意遍历我们的目录。
典型的路径遍历漏洞 java对这种有防御 tomcat java 也没有自带对策

但是 Deno 可以说 Deno is secure by default. ，主要就是因为他提供了一套完整的权限模型。

上面提到了那么多可以读取文件的 API ，那么你在程序启动的时候就要告诉我：

这个程序是不是拥有读取文件的能力？如果要读取的话能读取哪些文件？

如果你没有告诉我，那我默认就不让你执行，如果你执行的路径没在我的白名单之内，那也不允许执行，这就是 secure by default。

整个权限模型的核心思维就是这样的

实践
node --experimental-permission xxx.js  则开启权限模式
如果想要访问或文件系统，就必须要指定下面两个标志：

 命令行命令 
--allow-fs-read：允许读取某个路径下的文件，多个可以用逗号分隔；
--allow-fs-write：允许操作某个路径下的文件，多个可以用逗号分隔；

## 权限检查
Node.js 20 还提供了一个 process.permission.has API，可以用来帮助我们在运行时检查程序是不是拥有指定的权限。我们使用刚刚的例子，在下面增加一些判断权限的代码：
返回是否拥有api操作权限
process.permission.has('fs.write')
process.permission.has('fs.write', '/Users/bytedance/Desktop/learn/')
返回是否拥有该目录操作权限

### 子进程的权限
Node.js 中的 child_process 为我们提供了创建子进程的能力，我们可以在这个子进程中执行任意的 Shell 命令。
这个命令也是相当危险的  命令注入漏洞
```
const { spawn } = require('node:child_process');

const ls = spawn('ls', ['/Users/bytedance/Desktop/learn/Node.js']);

ls.stdout.on('data', (data) => {
  console.log(`输出如下：\n${data}`);
});

ls.stderr.on('data', (err) => {
  console.error(`失败: ${err}`);
});

ls.on('close', (code) => {
  console.log(`子进程推出 ${code}`);
});
```
但如果我们加上了 --experimental-permission 标志，执行命令的时候就会报错：

我们必须要加上 --allow-child-process 才能正常允许执行子进程。另外，如果子进程中读取到了一些文件目录，我们依然需要加上 --allow-fs-read 才能执行成功
node --experimental-permission --allow-child-process --allow-fs-read=/Users/bytedance/Desktop/learn/ child17.js

### worker_threads 权限
worker_threads 可以让我们创建多线程，然后在不同的线程中并行执行代码，一般我们会开多个 Workers 来执行一些 CPU 密集型的操作。
如果我们启用了 --experimental-permission 标志，代码执行就会报错：
如果要使用 worker_threads ，比如要添加一个 --allow-worker 的标志，另外它还需要通过 --allow-fs-read 来告诉它哪些目录下的文件是允许被执行的，所以我们执行下面的代码：

目前 Node.js 的权限模型还是相当初级的阶段，还有很多能力需要完善，比如可以限制服务的网络请求白名单，这样就可以避免 SSRF 漏洞等等，而且现在还在实验阶段，大家尽量不要在生产环境使用。

 node --experimental-permission --allow-worker --allow-fs-read=/Users/bytedance/Desktop/learn/ threads17.js
https://nodejs.org/en/blog/announcements/v20-release-announce
https://nodejs.org/api/permissions.html#process-based-permissions
https://nodejs.org/en/docs/guides/security
https://betterprogramming.pub/6-major-features-of-node-js-20-741a206cb84b

