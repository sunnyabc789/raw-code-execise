arms包内容解析

function parseReportPayload(payload) {
  if (payload && payload.gokey) {
    const params = payload.gokey.split('&');
    const paramsObject = params.reduce((result, item) => {
      const data = item.split('=');
      return {
        ...result,
        [data[0]]: decodeURIComponent(decodeURIComponent(data[1])),
      };
    }, {});
    // eslint-disable-next-line no-console
    console.log('arms上报参数对象：', paramsObject);
  }
}
arms1.2的包
数据上报上去以后 会按人 按小时groupby 成80分位等 (加权)

cnbp工程中 arms上看到的数据 会是上一次上报的数据 本次上报数据看不到
p1 p2 是 FCP


// 前端 埋点上报api
// 日志api
navigator.sendBeacon 是一个浏览器 API，用于在浏览器后台发送异步请求,不会等服务端响应。
它可以用于在页面卸载或关闭时发送数据，以及在不阻塞页面卸载的情况下发送数据。
使用 navigator.sendBeacon 方法发送的请求是异步的，不会阻塞页面的卸载或关闭过程。
这对于需要在用户离开页面之前发送数据的情况非常有用。
                        
原文链接：https://blog.csdn.net/smznbhh/article/details/133759118

优点
不受页面卸载过程的影响，确保数据可靠发送
普通的http请求如XMLHttpRequest 和Fetch在页面关闭或者刷新、前进、后退等操作时这些请求有可能在页面销毁之前没有完成，导致数据丢失。也可以控制页面销毁延后，这就导致页面销毁时间增加。
异步执行，不阻塞页面关闭或者跳转
navigator.sendBeacon的优先级是较低的，XMLHttpRequest 和Fetch这些同步请求，以及其他高优先级任务在它之前，navigator.sendBeacon并不会立即执行，可以说它会在空闲时间发送请求。
能够发送跨域请求
navigator.sendBeacon是不受跨域限制的
缺点
只能发送POST请求
只能传输少量数据（64 KB以内）
无法自定义请求头
只能传输ArrayBuffer、ArrayBufferView、Blob、DOMString、FormData或URLSearchParams类型数据
如果处于危险网络环境、开启了广告屏蔽插件 该请求将无效
————————————————
