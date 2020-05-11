//目标 实现一个 字符 数字 对象 数组的深拷贝 循环
let obj = {
  name: 'zhufeng',
  age: 10,
  home: { name: '北京' },
  hobbies: ['抽烟', '喝酒', '烫头']
};
obj.obj = obj;

function clone(source, _map = new Map()) {
  if (typeof source === 'object') {
    if (_map.get(source)) return _map.get(source)
    let temp = Array.isArray(source) ? [] : {}
    _map.set(source, temp)
    for (let k in source) {
      temp[k] = clone(source[k], _map)
    }
    return temp
  } 
  return source 
}

console.log(clone(obj));