const PENDING = "PENDING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";

// Object.defineProperty("x", "then", {
//   get() {
//     throw new Error();
//   },
// });

// called 控制 resolve 或 reject 只执行一次，多次调用没有任何作用。即：
// var Promise = require("appoint");
// var promise = new Promise(function resolver(resolve, reject) {
//   setTimeout(() => {
//     resolve("haha");
//   }, 1000);
//   reject("error");
// });
// promise.then(console.log);
// promise.catch(console.error);
// 然而这个用例并不是called阻止的 是resolve里的PENDING条件阻止的
// promises-aplus-tests .\promise7.js 测试 没called就失败
// yarn global add promises-aplus-tests

let resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) {
    // 死循环了 直接拒绝
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  }
  // 接下来判断 x类型 是promise 还是普通值  a+规范2.3.4
  // 如果 x 不是对象 也不是函数 string null undefined
  let called; // 别人是否调用过 为了防止不规范的promise实现
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    // 如何判断一个对象是否promise 有then的就认为是promise
    // 2.3.3
    // 给x做了个增强 在上面 取不到就报错
    try {
      let then = x.then; // 获取then方法
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            // resolve(y)
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        ); // x.then() 一样
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      reject(e);
    }
  } else {
    called = true;
    resolve(x);
  }
};
class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value; //成功的原因
    this.reason; //失败的原因
    this.onResolveCallbacks = []; // 储存成功的回调
    this.onRejectedCallbacks = [];
    let resolve = (value) => {
      // value有可能是个promise
      if (value instanceof Promise) {
        //这个判断缺点在于 只能判断时自己的promise 如果来个原生的 其他库的 就不符合a+规范了
        return value.then(resolve, reject);
        //等价写法 value.then(data => resolve(data), reject)
      }
      if (this.status === PENDING) {
        this.status = RESOLVED;
        this.value = value;
        this.onResolveCallbacks.forEach((fn) => fn());
      }
    };
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  catch(errCb) {
    this.then(null, errCb);
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (val) => val; //用于实现穿透
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };

    // 递归每次调用then 的时候 都需要返回一个新的promise2 入参为上一次onFulfilled返回值
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === RESOLVED) {
        setTimeout(() => {
          // 这个是p2的try catch
          try {
            let x = onFulfilled(this.value); //这里模拟了一个微任务 a+规范要求 不能在promise2的上下文执行这次的onFulfilled
            // res(x) // 返回值有可能也是个promise
            // promise2.resolve = resolve 这样写也行 传进去处理也行
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === PENDING) {
        this.onResolveCallbacks.push(() => {
          //这个做法 叫AOP 面向切片编程
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
}

module.exports = Promise;

// 测试依赖 promises-aplus-tests
// promises-aplus-tests promise4.js
Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((res, rej) => {
    dfd.resolve = res;
    dfd.reject = rej;
  });
  return dfd;
};

Promise.resolve = function (value) {
  return new Promise((resolve, rej) => {
    resolve(value);
  });
};

Promise.reject = function (reason) {
  return new Promise((res, rej) => {
    rej(reason);
  });
};

Promise.prototype.finally = function (cb) {
  return this.then(
    (data) => {
      // cb()
      // return cb() //有return 和没有 有区别  但是无法满足 会出现123
      return Promise.resolve(cb()).then(() => data); //确保cb中的promise执行完成
    },
    (err) => {
      // cb()
      // return cb() //有return 和没有 有区别
      return Promise.reject(cb()).then(() => {
        throw err;
      }); //确保cb中的promise执行完成
    }
  );
};

// let fs = require('fs').promises
// fs.readFile('./readme.md', 'utf8').then(data => data)

let p1 = new Promise((res, rej) => {
  res(1);
});

let p2 = new Promise((res, rej) => {
  res(2);
});

// Promise.all([p1, p2, 3, 4]).then(data => {
//   console.log(data);
// }).catch(err => console.log(err))

// all 全部成功才成功 有一个失败就全失败 race
const isPromise = (value) => {
  return typeof value.then === "function";
};
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let idx = 0;
    let processData = (value, index) => {
      arr[index] = value;
      if (++idx === promises.length) {
        resolve(arr); //这里不能return函数 但是可以resolve
      }
    };
    for (let i = 0; i < promises.length; i++) {
      let currentValue = promises[i];
      if (isPromise(currentValue)) {
        currentValue.then((y) => {
          processData(y, i);
        }, reject);
      } else {
        processData(currentValue, i);
      }
    }
  });
};

// Promise.race([1, 2, 3]).then((data) => console.log(data)); //1
Promise.race = function (promises) {
  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      let currentValue = promises[i];
      if (isPromise(currentValue)) {
        currentValue.then(res, rej);
      } else {
        res(currentValue);
      }
    }
  });
};

// promise有哪些缺点？
// fetch 无法中断，但是可以丢弃本次请求 依然是基于回调的方式，好处可以扁平化处理我们的逻辑，处理错误比较方便
// 超时中断
function wrap(p1) {
  let abort;
  let p2 = new Promise((resolve, reject) => {
    abort = function () {
      reject("失败");
    };
  });
  let p = Promise.race([p1, p2]);
  p.abort = abort;
  return p;
}
let p = wrap(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("here==="); // 是否调用abort 这里都会执行  也就是请求一定会发送 结果也会回来 拿不到而已
      resolve("abc");
    }, 3000);
  })
);
p.then(
  (data) => {
    console.log(data); //只要调用了abort abc就不会打印
  },
  () => {
    console.log("失败"); // 只要abort了 就只会打印失败
  }
);
p.abort();
