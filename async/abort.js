const Promise = require("./a+");


function wrap(p1) {
  let abort
  const p2 = new Promise((resolve, reject) => {
    abort = function () {
      reject("失败");
    };  
  })
  let p = Promise.race([p1, p2])
  p.abort = abort 
  return p
}