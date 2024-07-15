浏览器原生支持了React的优先级调度

1.原来： setState 触发Ric实现fiber的reRender 
2.合成事件等存在优先级 React通过Scheduler调度 
根本原理 渲染线程和js执行线程是同一个线程 相互阻塞 需要避免js慢任务 长任务 长时间占用线程  
例如虚拟DOM diff 
Ric+链表结构 实现了可中断的dom diff 
优先级进一步优化了哪些会阻塞视图的 放后面执行

在 Scheduler 中有5种优先级
后面浏览器通过 postTask 实现了该功能

| 优先级	| 描述	| 补丁兼容版本 |
| user-blocking |	最高优先级是用于阻止用户与页面交互的任务，例如渲染核心体验或响应用户输入。	| 在支持的情况下，它使用 MessageChannel 尽可能快地调度任务。如果不支持，则退回到 setTimeout |
| user-visible |	第二高优先级是用于用户可见但不一定阻止用户操作的任务，例如呈现页面的次要部分。这是默认优先级。	| 在支持的情况下，它也使用 MessageChannel 并退回到 setTimeout，但将排在任何具有用户阻止优先级的调用之后。 |
| background |	最低优先级是用于不是时间紧迫的任务，例如后台日志处理或初始化某些第三方库	| 通常使用 requestIdleCallback，并在不支持 requestIdleCallback 的情况下退回到 setTimeout (0)。|

postTask 调度程序的一个好处是它建立在 Abort Signals 之上，使我们能够取消已排队但尚未执行的任务。该 API 还定义了一个新的 TaskController，它允许通过信号使用优先级来控制任务和优先级。

```
const controller = new TaskController('background');
 window.addEventListener('beforeunload', () => controller.abort());

 scheduler.postTask(() => console.log('Hello, postTask'), {
    signal: controller.signal,
 });
 ```


```
  function loop() {
        let time = +new Date()
        while(+new Date() - time < 10 * 1000) {

        }
        console.log('123===')
    }
    // 会有个长任务占用线程
    // loop()
    // 自动拆解成多个小任务 不阻塞渲染任务执行  也不用像React用Ric那样自己维护两个链表
    scheduler.postTask(() =>    loop());
```