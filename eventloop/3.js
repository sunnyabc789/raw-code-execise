setTimeout(function () {
  process.nextTick(function () {
    console.log("next tick");
  });

  setTimeout(function () {
    console.log("settimeout");
  });

  (async function () {
    console.log("async promise");
  })();

  setImmediate(function () {
    console.log("setimmediate");
  });
});
// 所有版本
// async promise
// next tick
// setimmediate
// settimeout

let a = new ArrayBuffer(8)
let b = Buffer.from([1,2,3])
console.log(a.byteLength);
console.log('===');
console.log(b.length);