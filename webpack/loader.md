Loader 上下文方法

只有一个source入参但是上下文有很多东西

方法名	含义
this.request	被解析出来的 request 字符串。例子："/abc/loader1.js?xyz!/abc/node_modules/loader2/index.js!/abc/resource.js?rrr"
this.loaders	所有 loader 组成的数组。它在 pitch 阶段的时候是可以写入的。
this.loaderIndex	当前 loader 在 loader 数组中的索引。
this.async	异步回调
this.callback	回调
this.data	在 pitch 阶段和正常阶段之间共享的 data 对象。
this.cacheable	默认情况下，loader 的处理结果会被标记为可缓存。调用这个方法然后传入 false，可以关闭 loader 的缓存。cacheable(flag = true: boolean)
this.context	当前处理文件所在目录
this.resource	当前处理文件完成请求路径，例如 /src/main.js?name=1
this.resourcePath	当前处理文件的路径
this.resourceQuery	查询参数部分
this.target	webpack配置中的target
this.loadModule	但 Loader 在处理一个文件时，如果依赖其它文件的处理结果才能得出当前文件的结果时,就可以通过 this.loadModule(request: string, callback: function(err, source, sourceMap, module)) 去获得 request 对应文件的处理结果
this.resolve	解析指定文件路径
this.addDependency	给当前处理文件添加依赖文件，依赖发送变化时，会重新调用loader处理该文件
this.addContextDependency	把整个目录加入到当前正在处理文件的依赖当中
this.clearDependencies	清除当前正在处理文件的所有依赖中
this.emitFile	输出一个文件
loader-utils.stringifyRequest	把绝对路径转换成相对路径
loader-utils.interpolateName	用多个占位符或一个正则表达式转换一个文件名的模块。这个模板和正则表达式被设置为查询参数，在当前loader的上下文中被称为name或者regExp
