function _new() {
  // 创建一个新对象
  let newObj = {};
  // 获取构造函数
  let Constructor = Array.prototype.shift.call(arguments);
  // 连接新对象原型，新对象可以访问原型中的属性
  newObj.__proto__ = Constructor.prototype;
  // 执行构造函数，即绑定 this，并且为这个新对象添加属性
  Constructor.apply(newObj, arguments);
  // 返回该对象
  return newObj;
}

// 新生成一个对象
// 将构造函数的作用域赋值给新对象（即绑定新对象的 this）
// 执行构造函数中的代码（即为这个新对象添加属性）
// 返回新对象