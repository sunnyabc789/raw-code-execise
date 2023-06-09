function stringifyUrl(search = {}) {
  return Object.entries(search).reduce((prev, cur) => 
    `${prev}${cur[0]}=${encodeURIComponent(cur[1])}&`, Object.keys(search).length ? '?': ''
  ).slice(0, -1)
}

let a = {a:1, b:2}
console.log(stringifyUrl(a));


function parseUrlSearch(search) {
  return search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t, v) => {
    const [key, val] = v.split("=");
    t[key] = decodeURIComponent(val);
    return t;
  }, {});
}

const search = '?age=25&name=TYJ'
console.log(parseUrlSearch(search)); // { age: "25", name: "TYJ" }


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
