class Utils {
  constructor() {
    this.calls = []
  }

  on(key, fn) {
    this.calls.push({
      key,
      fn
    })
  }

  emit() {
    let key = Array.prototype.shift.apply(arguments, arguments)
    const args = [].slice(arguments, 0)
    if (!key) return
    this.calls.forEach(i => {
      if (i.key === key) {
        i.fn && i.fn.apply(i.fn, arguments)
      }
    })
  }
}

const utils = new Utils()
module.exports = utils 