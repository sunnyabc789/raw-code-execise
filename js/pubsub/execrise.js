class Utils {
  constructor() {
    this.listeners = []
  }

  subscribe(key, fn) {
    this.listeners.push({key, fn})
  }

  publish(key) {
    let args = Array.prototype.slice.call(arguments, 1)
    this.listeners.forEach((item) => {
      if (key === item.key) item.fn.apply(null, args)
    })
  }

}
const utils = new Utils()
utils.subscribe("test", (abc, efg) => {
  console.log(abc, efg);
});

utils.publish("test", "abc", "efg");