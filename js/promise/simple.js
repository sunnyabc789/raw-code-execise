function Promise(excutor) {
  var self = this
  self.onResolvedCallback = []
  function resolve(value) {
    setTimeout(() => {
      self.data = value
      self.onResolvedCallback.forEach(callback => callback(value))
    })
  }
  excutor(resolve.bind(self))
}
Promise.prototype.then = function (onResolved) {
  var self = this
  return new Promise(resolve => {
    self.onResolvedCallback.push(function () {
      var result = onResolved(self.data)
      if (result instanceof Promise) {
        result.then(resolve)
      } else {
        resolve(result)
      }
    })
  })
}

module.exports = Promise




// template
// new Promise(resolve => {
//   setTimeout(() => {
//     resolve(1)
//   }, 500)
// })
//   .then(res => {
//     console.log(res)
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(2)
//       }, 500)
//     })
//   })
//   .then(console.log)