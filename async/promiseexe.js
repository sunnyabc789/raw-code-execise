
const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'


let resolvePromise = (promise2, x, resolve, reject) => {
  if (x === promise2) {
    return reject(new TypeError('Chain....'))
  }
  let called
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then 
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        if (called) return;
        called = true;
        resolve(x);
      }
    } catch(e) {
      if (called) return;
      called = true; 
      reject(e)
    }
  } else {
    if (called) return 
    called = true 
    resolve(x)
  }
}
class Promise {
  constructor(executor) {
    this.status = PENDING 
    this.value 
    this.reason
    this.onResolvedCb = []
    this.onRejectedCb = []
    let resolve = (value) => {
      if (value instanceof Promise) {
        return value.then(resolve, reject)
      }
      if (this.status === PENDING) {
        this.status = RESOLVED 
        this.value = value
        this.onResolvedCb.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCb.forEach((fn) => fn());
      }
    }
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e)
    }
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value 
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
    const promise2 = new Promise((resolve, reject) => {
      if (this.status === RESOLVED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch(e) {
            reject(e)
          }
        }, 0)
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
        this.onResolvedCb.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        })
        this.onRejectedCb.push(() => {
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
      
    })
    return promise2
  }
}

module.exports = Promise

Promise.defer = Promise.deferred = function() {
  const dfd = {}
  dfd.promise = new Promise((res, rej) => {
    dfd.resolve = res 
    dfd.reject = rej 
  })
  return dfd 
}

Promise.resolve = function(data) {
  return new Promise((resolve, reject) => {
    resolve(data)
  })
}

Promise.reject = function (data) {
  return new Promise((resolve, reject) => {
    reject(data);
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


function isPromise(v) {
  if (((typeof x === 'object' && x !== null) || typeof x === 'function') && (x.then === 'function')) {
    return true
  }
  return false
}

Promise.all = function(promises) {
  return new Promise((res, rej) => {
    const result = [];
    let idx = 0;
    function processData(value, index) {
      if (promises.length === idx ++) {
        return res(result)
      }
      result[index] = value 
    }
    for (let i = 0; i < promises.length; i++) {
      if (isPromise(promises[i])) {
        promises[i].then((data) => processData(data, i), rej);
      } else {
        processData(promises[i], i)
      }
    }
  })
}

Promise.race = function (promises) {
  return new Promise((res, rej) => {
    for (let i = 0; i < promises.length; i++) {
      if (isPromise(promises[i])) {
        promises[i].then(res, rej);
      } else {
        res(promises[i])
      }
    }
  });
};


function wrap(p1) {
  let abort
  let p2 = new Promise((res, rej) => {
    abort = function() {
      rej('失败')
    }
  })

  let p = Promise.race([p1, p2])
  p.abort = abort 
  return p
}


function *read() {
  let content = yield fs.readFile()
  let value = yield fs.readFile(content, 'utf8')
  return value 
}

co(read())

function co(it) {
  return new Promise((res, rej) => {
    function next(arg) {
      const { value ,done } = it.next(arg)
      if (done) res(value)
      else {
        Promise.resolve(value).then(y => {
          next(y)
        }, r => {
          it.throw(r)
        })
      }
    }
    next()
  })
}

//  3依然会打出来  打断点可以看到 状态变成resolve了
new Promise((resolve,reject)=>{
reject(1)
}).catch(()=>{
console.log(2)
}).then(
    ()=>console.log(3),
    (v)=>console.log(v)
)
// 2 -> 3

  //  if (this.status === REJECTED) {
  //    setTimeout(() => {
  //      try {
  //        let x = onRejected(this.reason);
  //        resolvePromise(promise2, x, resolve, reject);
  //      } catch (e) {
  //        reject(e);
  //      }
  //    }, 0);
  //  }
  // 这里的 resolvePromise 把catch的resolve调用了

  new Promise((resolve, reject) => {
    reject(1);
  })
    .catch(() => {
      console.log(2);
      throw TypeError("test");
    })
    .then(
      () => console.log(3),
      (v) => console.log(4)
    );

    // 2 -> 4 如果是 console.log(v) 错误会被抛出



    // ES15新特性
    // const {promise, resolve, reject} = Promise.withResolvers();

    // promise.then((data) => {
    //   console.log(data,'d==')
    // })

    // resolve()