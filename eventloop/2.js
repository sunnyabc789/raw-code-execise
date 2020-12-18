let fs = require("fs");
const path = require('path')
setTimeout(() => {
  console.log(1);
  let rs = fs.createReadStream(path.resolve(__dirname, "./1.js"));
  rs.on("close", () => console.log("close"));
  rs.on("data", () => {
    rs.destroy();
    console.log('data');
    setImmediate(() => console.log("m1"));
    setTimeout(() => console.log("t1"));
    console.log("2");
  });
  setImmediate(() => {
    console.log("m2");
    process.nextTick(() => console.log("n1"));
  });
  console.log(3);
  setTimeout(() => {
    console.log("t2");
    process.nextTick(() => console.log("n2"));
  });
  setTimeout(() => {
    console.log("t3");
  });
});
/**
 * 主栈清空 
 * timers  1 添加事件 添加immediate 3 添加timeout
 * i\o close事件触发 添加immediate 添加timeout 2
 * immediate  m2 添加微任务n1 m1
 * 微任务 n1
 * close 
 * t2 t3 t1 n2
 * 1 3 2 m2 m1 n1 close t2 t3 t1 n2 错了 因为读文件那里是个io操作 是个流 异步 阻塞 等待 顺序不一定了 也就是 on('data') 队列 不一定有任务
 * 1 3 m2 n1 t2 n2 t3 2 m1 t1 close
 * 加个data 发现都执行两轮了 data才放任务进去了
 * 1 3 m2 n1 t2 n2 t3 data 2 m1 t1 close
 */

 /**
  * node 12
  * 1 3 m2 n1 t2 n2 t3 data 2 m1 t1 close
  * 一样的
  * 
  */