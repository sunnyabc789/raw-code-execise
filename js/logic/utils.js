// js 引用类型需要注意的地方
// let a = { b: 1 } let c = a.b
// a.b 和 c 不会有任何联动

// let a = [1,2,3] let b = a
// 引用赋值 操作了b a会受到影响


// break 双重循环 break只退出当前的 不退出外层

// 交集
// 简易版
const arr1 = [1, 2, 3, 4, 5, 8, 9], arr2 = [5, 6, 7, 8, 9];

const intersection = arr1.filter(function (val) { return arr2.indexOf(val) > -1 })
console.log(intersection) //[5, 8, 9]
// leetcode 定义版
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)

  let result = []
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i])
      i++
      j++
    } else if (nums1[i] < nums2[j]) {
      i++
    } else if (nums2[j] < nums1[i]) {
      j++
    }
  }
  return result
};


// 并集

const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const result = arr1.concat(arr2.filter(v => !arr1.includes(v)))
console.log(result) //[1, 2, 3, 4, 5, 8, 9, 6, 7]

const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let arr3 = arr1.concat(arr2);
let result = [];
let obj = [];
result = arr3.reduce(function (prev, cur, index, arr) {
  obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
  return prev;
}, []);
console.log(result); //[{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]


// 差集 

const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
let diff = []

diff = arr1.filter(i => !arr2.includes(i))
diff = diff.concat(arr2.filter(i => !arr1.includes(i)))
console.log(diff)

// [1, 2, 3, 4, 6, 7]

// 对象数组
let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let result = arr1.filter(function (v) {
  return arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
})
console.log(result); // [ { name: 'name2', id: 2 }, { name: 'name3', id: 3 } ]


// 补集   没有全集的补集是相对的  全集 A交B为全集时 绝对补集为差集
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const difference = Array.from(new Set(arr1.concat(arr2).filter(v => !new Set(arr1).has(v) || !new Set(arr2).has(v))))
console.log(difference) //[ 1, 2, 3, 4, 6, 7 ]

let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let arr3 = arr1.concat(arr2);
let result = arr3.filter(function (v) {
  return arr1.every(n => JSON.stringify(n) !== JSON.stringify(v)) || arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
})
console.log(result); // [{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]


// 去重
console.log(Array.from(new Set([1, 2, 3, 3, 4, 4]))) //[1,2,3,4]
console.log([...new Set([1, 2, 3, 3, 4, 4])]) //[1,2,3,4]

const arr = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
const result = [];
arr.forEach(item => {
  !result.some(v => JSON.stringify(v) === JSON.stringify(item)) && result.push(item)
})
console.log(result) //[{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]


// 最大值
Math.max(...[1, 2, 3, 4]) //4
Math.max.apply(this, [1, 2, 3, 4]) //4
[1, 2, 3, 4].reduce((prev, cur, curIndex, arr) => {
  return Math.max(prev, cur);
}, 0) //4

const arr = [{ id: 1, name: 'jack' }, { id: 2, name: 'may' }, { id: 3, name: 'shawn' }, { id: 4, name: 'tony' }]
const arr1 = Math.max.apply(Math, arr.map(item => { return item.id }))
const arr2 = arr.sort((a, b) => { return b.id - a.id })[0].id
console.log(arr1) // 4
console.log(arr2) // 4

// 数组求和
[1, 2, 3, 4].reduce(function (prev, cur) {
  return prev + cur;
}, 0) //10 

// 合并
const arr1 = [1, 2, 3, 4].concat([5, 6]) //[1,2,3,4,5,6]
const arr2 = [...[1, 2, 3, 4], ...[4, 5]] //[1,2,3,4,5,6]
const arrA = [1, 2], arrB = [3, 4]
const arr3 = [].concat.apply(arrA, arrB)//arrA值为[1,2,3,4]

const arr4 = [{ age: 1 }].concat([{ age: 2 }])
const arr5 = [...[{ age: 1 }], ...[{ age: 2 }]]
console.log(arr4) //[ { age: 1 }, { age: 2 } ]
console.log(arr5) // [ { age: 1 }, { age: 2 } ]

// 数组是否包含值
console.log([1, 2, 3].includes(4)) //false
console.log([1, 2, 3].indexOf(4)) //-1 如果存在换回索引
console.log([1, 2, 3].find((item) => item === 3)) //3 如果数组中无值返回undefined
console.log([1, 2, 3].findIndex((item) => item === 3)) //2 如果数组中无值返回-1


const flag = [{ age: 1 }, { age: 2 }].some(v => JSON.stringify(v) === JSON.stringify({ age: 2 }))
console.log(flag)


// 版本号排序   这里做不了3个1.1.1的排序 可以学分数 分字符的方法
// 反例
function sortNumber(a, b) {
  return a - b
}
const b = [1, 2, 3, 7, 5, 6]
const a = ["1.5", "1.5", "1.40", "1.25", "1.1000", "1.1"];

console.log(a.sort(sortNumber)); // [ 1, 2, 3, 5, 6, 7 ]
console.log(b.sort(sortNumber)); //[ '1.1000', '1.1', '1.25', '1.40', '1.5', '1.5' ]
// 可见sort排序对整数可以，类似版本号这个格式就不适用了，因为sort函数在比较字符串的时候，是比较字符串的Unicode进行排序的。

//假定字符串的每节数都在5位以下
//去除数组空值||空格
if (!Array.prototype.trim) {
  Array.prototype.trim = function () {
    let arr = []; this.forEach(function (e) {
      if (e.match(/\S+/)) arr.push(e);
    })
    return arr;
  }
}

//提取数字部分
function toNum(a) {
  let d = a.toString();
  let c = d.split(/\d/).trim();
  let num_place = ["", "0", "00", "000", "0000"], r = num_place.reverse();
  for (let i = 0; i < c.length; i++) {
    let len = c[i].length;
    c[i] = r[len] + c[i];
  }
  let res = c.join('');
  return res;
}

//提取字符
function toChar(a) {
  let d = a.toString();
  let c = d.split(/\.|\d/).join('');
  return c;
}

function sortVersions(a, b) {

  let _a1 = toNum(a), _b1 = toNum(b);
  if (_a1 !== _b1) return _a1 - _b1;
  else {
    _a2 = toChar(a).charCodeAt(0).toString(16);
    _b2 = toChar(b).charCodeAt(0).toString(16);
    return _a2 - _b2;
  }
}

let arr1 = ["10", "5", "40", "25", "1000", "1"];
let arr2 = ["1.10", "1.5", "1.40", "1.25", "1.1000", "1.1"];
let arr3 = ["1.10c", "1.10b", "1.10C", "1.25", "1.1000", "1.10A"];
console.log(arr1.sort(sortVersions)) //[ '1', '5', '10', '25', '40', '1000' ]
console.log(arr2.sort(sortVersions)) //[ '1.1', '1.5', '1.10', '1.25', '1.40', '1.1000' ]
console.log(arr3.sort(sortVersions)) // [ '1.10A', '1.10C', '1.10b', '1.10c', '1.25', '1.1000' ]
// 可以看出这个函数均兼容整数，非整数，字母；
// 字母排序是根据Unicode排序的，所以1.10b在1.10C的后面




// 对象多余属性删除
const { name, age, ...obj } = { name: '张三', age: 13, dec: '描述1', info: '信息' }
console.log(name)  // 张三
console.log(age)  // 13
console.log(obj)  // {dec: '描述1', info: '信息' }




// 拦截对象
// 利用Object.defineProperty拦截对象
// 无法拦截数组的值
let obj = { name: '', age: '', sex: '' },
  defaultName = ["这是姓名默认值1", "这是年龄默认值1", "这是性别默认值1"];
Object.keys(obj).forEach((key, index) => {
  Object.defineProperty(obj, key, { // 拦截整个object 对象，并通过get获取值，set设置值，vue 2.x的核心就是这个来监听
    get() {
      return defaultName[index];
    },
    set(value) {
      defaultName[index] = value;
    }
  });
});

console.log(obj.name); // [ '这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1' ]
console.log(obj.age); // [ '这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1' ]
console.log(obj.sex); // [ '这是姓名默认值1', '这是年龄默认值1', '这是性别默认值1' ]
obj.name = "这是改变值1";
console.log(obj.name); // 这是改变值1
console.log(obj.age);  // 这是改变值1
console.log(obj.sex); // 这是改变值1

let objOne = {}, defaultNameOne = "这是默认值2";
Object.defineProperty(obj, 'name', {
  get() {
    return defaultNameOne;
  },
  set(value) {
    defaultNameOne = value;
  }
});
console.log(objOne.name); // undefined
objOne.name = "这是改变值2";
console.log(objOne.name); // 这是改变值2


// 利用proxy拦截对象
let obj = { name: '', age: '', sex: '' }
let handler = {
  get(target, key, receiver) {
    console.log("get", key);
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(target,'===') // obj
    console.log(receiver, "receiver==="); // Proxy obj
    console.log("set", key, value); // set name 李四  // set age 24
    return Reflect.set(target, key, value, receiver);
  }
};
let proxy = new Proxy(obj, handler);
proxy.name = "李四";
proxy.age = 24;
// defineProterty和proxy的对比：
// 1.defineProterty是es5的标准, proxy是es6的标准;
// 2.proxy可以监听到数组索引赋值, 改变数组长度的变化;
// 3.proxy是监听对象, 不用深层遍历, defineProterty是监听属性;
// 4.利用defineProterty实现双向数据绑定(vue2.x采用的核心)

// 对象转化为字符串
// 通过字符串 + Object 的方式来转化对象为字符串(实际上是调用.toString() 方法)
// 遇到一个对象 有toString属性 就不行了  有valueOf属性 遇到*号就不行了

'' + { toString: () => 'S', valueOf: () => 'J' }  //J


// 函数自执行
const Func = function () { }(); // 常用

(function () { })(); // 常用
(function () { }()); // 常用
[function () { }()];

new function () { };
new function () { }();
void function () { }();
typeof function () { }();
delete function () { }();

+ function () { }();
- function () { }();
~ function () { }();
! function () { }();

// 字符串翻转
function reverseStr(str = "") {
  return str.split("").reduceRight((t, v) => t + v);
  return str.split("").reverse().join('')  // 这个性能更好 上面提供思路
}

const str = "reduce123";
console.log(reverseStr(str)); // "321recuder"


// url参数序列化
function stringifyUrl(search = {}) {
  return Object.entries(search).reduce(
    (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
    Object.keys(search).length ? "?" : ""
  ).replace(/&$/, "");
}

console.log(stringifyUrl({ age: 27, name: "YZW" })); // "?age=27&name=YZW"

// Object.entries   { age: 27, name: 'abc' } => [['age', 27], ['name', 'abc']]

// url参数反序列化
// 一般会通过location.search拿到路由传递的参数，并进行反序列化得到对象
function parseUrlSearch(search) {
  return search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t, v) => {
    const [key, val] = v.split("=");
    t[key] = decodeURIComponent(val);
    return t;
  }, {});
}

const search = '?age=25&name=TYJ'
console.log(parseUrlSearch(search)); // { age: "25", name: "TYJ" }



// 数字千分位
function thousandNum(num = 0) {
  const str = (+num).toString().split(".");
  const int = nums => nums.split("").reverse().reduceRight((t, v, i) => t + (i % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
  const dec = nums => nums.split("").reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
  return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0]);
}

thousandNum(1234); // "1,234"
thousandNum(1234.00); // "1,234"
thousandNum(0.1234); // "0.123,4"
console.log(thousandNum(1234.5678)); // "1,234.567,8"

console.log('1234567890'.replace(/\B(?=(\d{3})+(?!\d))/g, ","))
console.log((1234567890).toLocaleString())


// 字符串转数字
// 方法一
// 用 * 1来转化为数字, 实际上是调用.valueOf方法
'32' * 1            // 32
'ds' * 1            // NaN
null * 1            // 0
undefined * 1    // NaN
1 * { valueOf: () => '3' }        // 3

  + '123'            // 123
  + 'ds'               // NaN
  + ''                    // 0
  + null              // 0
  + undefined    // NaN
  + { valueOf: () => '3' }    // 3

// 判断小数是否相等
// 肯定有人会说这还不简单，直接用'==='比较；
// 实际上0.1 + 0.2 !== 0.3，因为计算机不能精确表示0.1， 0.2这样的浮点数，所以相加就不是0.3了
// 思路 做减法 取绝对值 与一个极小值比较 比极小值小 都认为相等
Number.EPSILON = (function () {   //解决兼容性问题
  // ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。
  return Number.EPSILON ? Number.EPSILON : Math.pow(2, -52);
})();
//上面是一个自调用函数，当JS文件刚加载到内存中，就会去判断并返回一个结果
function numbersequal(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
//接下来再判断   
const a = 0.1 + 0.2, b = 0.3;
console.log(numbersequal(a, b)); //这里就为true了

// 双位运算符比Math.floor(), Math.ceil()速度快
~~7.5                // 7
Math.ceil(7.5)       // 8
Math.floor(7.5)      // 7


~~-7.5          // -7
Math.floor(-7.5)     // -8
Math.ceil(-7.5)      // -7
// 所以负数时，双位运算符和Math.ceil结果一致，正数时和Math.floor结果一致

// 取整和奇偶性判断
3.3 | 0         // 3
  - 3.9 | 0        // -3

parseInt(3.3)  // 3
parseInt(-3.3) // -3

// 四舍五入取整
Math.round(3.3) // 3
Math.round(-3.3) // -3

// 向上取整
Math.ceil(3.3) // 4
Math.ceil(-3.3) // -3

// 向下取整
Math.floor(3.3) // 3
Math.floor(-3.3) // -4

// 判断奇偶数
const num = 5;
let res = num % 2 == 0 ? "偶数": "奇数"

// 判断数据类型
function dataTypeJudge(val, type) {
  const dataType = Object.prototype.toString.call(val).replace(/\[object (\w+)\]/, "$1").toLowerCase();
  return type ? dataType === type : dataType;
}
console.log(dataTypeJudge("young")); // "string"
console.log(dataTypeJudge(20190214)); // "number"
console.log(dataTypeJudge(true)); // "boolean"
console.log(dataTypeJudge([], "array")); // true
console.log(dataTypeJudge({}, "array")); // false

// 可判断类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap

// 树遍历  前中后序 DLR LDR LRD  preOrder mid next
// 根结点D、左子树L、右子树R
// D = Degree
// L = Left
// R = Right
function DLR(root, cb) {
  cb(root.val)
  DLR(root.left, cb)
  DLR(root.right, cb)
}

function LDR(root, cb) {
  DLR(root.left, cb)
  cb(root.val)
  DLR(root.right, cb)
}

function LRD(root, cb) {
  DLR(root.left, cb)
  DLR(root.right, cb)
  cb(root.val)
}


// 方差
function varianceArr(arr) {
  let s,
    ave,
    sum = 0,
    sums = 0,
    len = arr.length;
  for (let i = 0; i < len; i++) {
    sum += Number(arr[i]);
  }
  ave = sum / len;
  for (let i = 0; i < len; i++) {
    sums += (Number(arr[i]) - ave) * (Number(arr[i]) - ave)
  }
  s = (sums / len).toFixed(4);
  return s;
};


