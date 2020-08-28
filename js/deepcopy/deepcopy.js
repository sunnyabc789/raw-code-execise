
// JSON.stringify深度克隆对象;
// 1.无法对函数 、RegExp等特殊对象的克隆;
// 2.会抛弃对象的constructor, 所有的构造函数会指向Object;
// 3.对象有循环引用, 会报错

// 对象深度克隆实际上就是要兼容Array，RegExp，Date，Function类型；
// 克隆函数可以用正则取出函数体和参数，再定义一个函数将取出来的值赋值进去

//1.简单实现浅拷贝
// 函数 正则 对象 等无法拷贝
JSON.parse(JSON.stringify())

//2.支持对象和数组
// obj.obj = obj  会死循环 需要做一层缓存
let obj = {
name: 'zhufeng',
  age: 10,
  home: { name: '北京' },
  hobbies: ['抽烟', '喝酒', '烫头']
};
function clone(source) {
  if (typeof source === 'object') {
    let target = Array.isArray(source) ? [] : {};
    for (const key in source) {
      target[key] = clone(source[key]);
    }
    return target;
  }
  return source;

};
let cloned = clone(obj);
console.log(Array.isArray(cloned.hobbies));

// 3.带缓存的 防止循环引用
let obj = {
  name: 'zhufeng',
  age: 10,
  home: { name: '北京' },
  hobbies: ['抽烟', '喝酒', '烫头']
};
obj.obj = obj;
function clone(source, map = new Map()) {
  if (typeof source === 'object') {
    if (map.get(source)) {
      return map.get(source);
    }
    let target = Array.isArray(source) ? [] : {};
    //实测 target是引用类型 map.get 拿得时候是拿实时值  存了个引用
    map.set(source, target);
    for (const key in source) {
      target[key] = clone(source[key], map);
    }
    return target;
  }
  return source;

};

let cloned = clone(obj);
console.log(cloned.obj);


// 稍微完整版 15个类型 其实还有Math等
let obj = {
  married: true,
  age: 10,
  name: 'zhufeng',
  girlfriend: null,
  boyfriend: undefined,
  flag: Symbol('man'),
  home: { name: '北京' },
  set: new Set(),
  map: new Map(),
  getName: function () { },
  hobbies: ['抽烟', '喝酒', '烫头'],
  error: new Error('error'),
  pattern: /^regexp$/ig,
  math: Math,
  json: JSON,
  document: document,
  window: window
};
obj.set.add(1);
obj.map.set('name', 'value');
obj.obj = obj;

let OBJECT_TYPES = [{}, [], new Map(), new Set(), new Error(), new Date(), /^$/].map(item => getType(item));
const MAP_TYPE = getType(new Map());
const SET_TYPE = getType(new Set());
const CONSTRUCT_TYPE = [new Error(), new Date()].map(item => getType(item));
const SYMBOL_TYPE = getType(Symbol('1'));
const REGEXP_TYPE = getType(/^$/);
function clone(source, map = new Map()) {
  let type = getType(source);
  if (!OBJECT_TYPES.includes(type)) {//基本数据类型
    return source;
  }
  if (map.get(source)) {
    return map.get(source);
  }
  if (CONSTRUCT_TYPE.includes(type)) {
    return new source.constructor(source);
  }
  let target = new source.constructor();
  map.set(source, target);

  if (SYMBOL_TYPE === type) {
    return Object(Symbol.prototype.valueOf.call(source));
  }
  if (REGEXP_TYPE === type) {
    const flags = /\w*$/;
    const target = new source.constructor(source.source, flags.exec(source));
    target.lastIndex = source.lastIndex;
    return target;
  }
  if (SET_TYPE === type) {
    source.forEach(value => {
      target.add(clone(value, map));
    });
    return target;
  }
  if (MAP_TYPE === type) {
    source.forEach((value, key) => {
      target.set(key, clone(value, map));
    });
    return target;
  }
  let keys = Object.keys(source);
  let length = keys.length;
  let index = 0;
  while (index < length) {
    target[keys[index]] = clone(source[keys[index]], map);
    index++;
  }
  return target;
};

function getType(source) {
  return Object.prototype.toString.call(source);
}
let cloned = clone(obj);
console.log(cloned);
console.log(obj.home === cloned.home);
console.log(obj.set === cloned.set);
console.log(obj.map === cloned.map);
/*
[object Boolean]
[object Number]
[object String]
[object Null]
[object Undefined]
[object Symbol]
[object Object]
[object Function]
[object Array]
[object Error]
[object RegExp]
[object Math]
[object JSON]
[object HTMLDocument]
[object Window]"
*/