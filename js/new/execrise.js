// 新生成一个对象
// 将构造函数的作用域赋值给新对象（即绑定新对象的 this）
// 执行构造函数中的代码（即为这个新对象添加属性）
// 返回新对象

//错了
function _new(O) {
  let obj = {}
  obj.__proto__ = O.prototype
  O.apply(obj, [].slice.call(arguments, 1))
  return obj
}