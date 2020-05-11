class Utils {
  constructor() {
    this.calls = []
  }

  on(key, fn) {
    this.calls.push({
      name: key,
      callback: fn
    })
  }

  off(key) {
    this.calls = this.calls.filter(i => i.name === key)
  }

  emit(key, ...args) {
    //注意 类数组没有slices方法,需要借用
    // 浏览器和node 对 argments的处理方式有区别 [].slice(argments,1) 在node下无效
    this.calls.forEach( item => {
      if (item.name === key) {
        item.callback.apply(this, args)
      }
    })
  }
}


//注意区别
// exports.utils = new Utils()
module.exports = new Utils()