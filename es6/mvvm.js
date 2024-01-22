let obj = {};
let input = document.getElementById("input");
let span = document.getElementById("span");
Object.defineProperty(obj, "text", {
  configurable: true,
  enumerable: true,
  get() {
    console.log("获取数据了");
    return obj.text;
  },
  set(newVal) {
    console.log("数据更新了");
    input.value = newVal;
    span.innerHTML = newVal;
  },
});

Object.defineProperty(window, 'efg', {
  set(value) {
    console.log(value,'value===')
    this.value = value
  },
  get() {
    return this.value
  },
})

input.addEventListener("keyup", function (e) {
  obj.text = e.target.value;
});


const handler = {
  get(target, key) {
    Reflect.get(target, key)
  },
  set(target, key, value) {
    Reflect.set(target, key, value)
  }
}
new Proxy(obj, handler)