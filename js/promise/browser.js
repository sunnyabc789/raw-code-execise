


//实测 自己实现的promise 无论如何也模拟不出微任务的结果 
// 微任务时 0 1 2 3 4
// 自己实现的promise 哪一个都是 0 1 4 2 3   4跑到了前边
console.log('here0===');

setTimeout(() => {
  console.log('here4===');
});

new Promise((res) => {
  console.log('here1===');
  res('here3===')
}).then((data) => {
  console.log('here2===');
  console.log(data);
})


// async await  洋葱
// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('setTimeout')
// })
// async1()
// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function () {
//   console.log('promise2')
// })
// console.log('script end')

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 10);
// new Promise(function (resolve) {
//   console.log(3);
//   resolve();
//   console.log(4);
// }).then(function () {
//   console.log(5);
// });
// console.log(6);
// requestIdleCallback(() => console.log(7));
// requestAnimationFrame(() => console.log(8));