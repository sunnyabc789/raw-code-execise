// todo 目标 实现链式调用即可 
// 进阶 错误处理 all race 状态
// 为什么内部需要setTimeout

//错了

// 用例
let time = new Date()
new Promise((res) => {
  setTimeout(() => {
    console.log('here===')
    setTimeout(() => {
      res(new Date - time)
    }, 2000)
  }, 3000)
}).then((res) => {
  console.log(res)
})
