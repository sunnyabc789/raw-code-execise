// 新生成一个对象
// 将构造函数的作用域赋值给新对象（即绑定新对象的 this）
// 执行构造函数中的代码（即为这个新对象添加属性）
// 返回新对象

//错了 * 2
function _new(O, ...args) {
  const obj = {}
  obj.__proto__ = O.prototype
  O.apply(obj, args)
  return obj
}

function _new() {
  const obj = {}
  const Constructor = Array.prototype.shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  Constructor.apply(obj, arguments)
  return obj 
}

//测试用例
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.say = function(word) {
  console.log(word)
}

let person = _new(Person,'abc', 30)
console.log(person.name)
console.log(person.age)
person.say('hello')