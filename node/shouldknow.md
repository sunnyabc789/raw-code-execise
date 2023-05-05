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
