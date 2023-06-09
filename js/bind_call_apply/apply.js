Function.prototype.myApply = function (obj, arr) {
  let args = [];
  for (let i = 0; i < arr.length; i++) {
    args.push(arr[i]);
  }
  // 其实直接 ...arr 传参也可以 但是效果就和aplly有微小差别了
  return this.myCall(obj, ...args);
};
// eval
Function.prototype.myApply = function (obj, arr) {
  let args = [];
  for (let i = 0; i < arr.length; i++) {
    args.push("arr[" + i + "]"); // 这里也是push 字符串
  }
  return eval("this.myCall(obj," + args + ")"); //这样相当于传入了所有参数 或者...
};
