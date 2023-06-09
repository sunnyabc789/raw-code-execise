// 方案 1
function recursionFlat(ary = []) {
  const res = [];
  ary.forEach((item) => {
    if (Array.isArray(item)) {
      res.push(...recursionFlat(item));
    } else {
      res.push(item);
    }
  });
  return res;
}
// 方案 2
function reduceFlat(ary = []) {
  return ary.reduce(
    (res, item) => res.concat(Array.isArray(item) ? reduceFlat(item) : item),
    []
  );
}

// 测试
const source = [1, 2, [3, 4, [5, 6]], "7"];
console.log(recursionFlat(source));
console.log(reduceFlat(source));

let arr = [1,[2,3],[4,5]]
arr.flat(Infinity);
arr.toString().split(",").map(Number);
JSON.stringify(arr).replace(/\[|\]/g, "").split(",").map(Number);
Array.prototype.myFlat = function () {
  let result = [];
  let _this = this;
  let maxDepth = 1;
  function _flat(arr, depth = 1) {
    if (depth > maxDepth) maxDepth = depth;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (Array.isArray(item)) {
        _flat(item, depth + 1);
      } else {
        result.push(item);
      }
    }
  }
  _flat(this);
  return result;
};