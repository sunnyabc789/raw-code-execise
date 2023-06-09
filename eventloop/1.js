setTimeout(() => {
  console.log("t1");
  setTimeout(() => {
    console.log("t3");
  }, 0);
  setImmediate(() => console.log("i1"));
}, 0);
setTimeout(() => {
  console.log("t2");
}, 0);
// node10
// t1 i1 t2 t3
// 主栈执行完 放入两个回调
// 第一个回调开始执行 放入t3 i1
// immerdiate队列开始执行 i1
// 第二轮t2 t3

// node12
// t1 t2 i1 t3
// 这是因为 < 11 得版本中
// 若第一个定时器任务出队并执行完，发现队首的任务仍然是一个定时器，那么就将微任务暂时保存，直接去执行新的定时器任务，当新的定时器任务执行完后，再一一执行中途产生的微任务。