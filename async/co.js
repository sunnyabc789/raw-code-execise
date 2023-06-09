// 基本用法 异步变成了同步
const fs = require("fs").promises;
function* read() {
  try {
    let content = yield fs.readFile("./readme.md", "utf8");
    let value = yield fs.readFile(content, "utf8");
    return value;
  } catch (e) {
    console.log(e);
  }
}

co(read()).then((data) => {
  console.log(data);
}); // 直接帮读值 传递 调用then next


function co(it) {
  return new Promise((res, rej) => {
    function next(arg) {
      //基于next函数回调而不基于循环 循环没有终止条件
      let { value, done } = it.next(arg);
      if (done) res(value);
      else {
        Promise.resolve(value).then(
          (y) => {
            //用promise.resolve包住 防止value自己是个异步
            next(y);
          },
          (err) => {
            it.throw(err); //这样写才能被外部try catch到
            // rej(err)
          }
        );
      }
    }
    next();
  });
}

