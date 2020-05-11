// todo 目标 实现链式调用即可 
// 进阶 错误处理 all race 状态

function Promise(excutor) {
  const self = this
  self.onResolvedCallback = []
  function resolve(value) {
    setTimeout(() => {
      self.data = value
      self.onResolvedCallback.forEach(callback => {
        callback(value)
      }) 
    });
  }
  excutor(resolve)
}

Promise.prototype.then = function(onResolved) {
  onResolved(self.data)
}

new Promise((res) => {
  res()
})
