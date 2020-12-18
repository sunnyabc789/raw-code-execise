
// 比张仁阳那个好
Function.prototype.myBind = function(context) {
  let arg1 = Array.prototype.slice(arguments, 1)
  context.fn = this
  return function () {
    let arg2 = Array.prototype.slice(arguments, 0)
    let result = context.fn(...arg1, ...arg2) //枚举调用实现了this的转移
    delete context.fn
    return result
  }
}

function test() {
  this.x = 9    
  var obj = {
    x: 81,
    getX: function() { return this.x; }
  }

  obj.getX()  //81

  var obj1 = obj.getX
  console.log(obj1())  //9
  console.log(obj1.bind(obj)()) //81
}
test()

function Point(x, y) {
  this.x = x
  this.y = y  
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y
}

let emptyObj = {}
let YPoint = Point.bind(null, 1)
let axiosPonit = new YPoint(2)
console.log(axiosPonit.toString()); // 1,2
console.log(axiosPonit instanceof Point); // true
console.log(axiosPonit instanceof YPoint); // true