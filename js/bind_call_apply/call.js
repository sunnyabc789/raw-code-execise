Function.prototype.myCall = function(context) {
  let args = [...arguments].slice(1)
  context.fn = this
  context.fn(...args)
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
  console.log(obj1.call(obj)) //81
}
test()