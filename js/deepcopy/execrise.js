//目标 实现一个 字符 数字 对象 数组的深拷贝 循环
let obj = {
  name: 'zhufeng',
  age: 10,
  home: { name: '北京' },
  hobbies: ['抽烟', '喝酒', '烫头']
};
obj.obj = obj;

//错了
function clone(source, _map = new Map()) {
  if (typeof source === 'object') {
    if (_map.get(source)) return _map.get(source)
    let target = Array.isArray(source) ? [] : {}
    _map.set(source, target)
    for (let k in source) {
      target[k] = clone(source[k], _map)
    }
    return target
  }

  return source
}

console.log(clone(obj));