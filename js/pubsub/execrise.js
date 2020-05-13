class Utils {
  constructor() {
    this.calls = []
  }

  on(key, fn) {
    if (!key || !fn) return
    this.calls.push({
      key, 
      fn
    })
  }

  emit() {
    const key = Array.prototype.shift.apply(arguments,arguments)
    this.calls.forEach(i => {
      if (i.key === key) {
        i.fn.apply(this, arguments)
      }
    })
  }
}

const utils = new Utils()
module.exports = utils