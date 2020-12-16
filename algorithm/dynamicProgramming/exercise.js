function filledTheBag(v, w, c, l) {
  const ks = []
  for (let i = 0; i <= l; i++) {
    const col = i
    const item = col - 1  // 物品的指针 col是格子的指针 不是同一个
    for (let j = 0; j <= c; j++) {
      const row = j
      if (i === 0 || j === 0) {
        // 最终取数时 是col row来取得数
        if (!ks[col]) ks[col] = []
        if (col === 0) {
          if (col === 0 && row === 0) {
            ks[col][row] = 0
          } else {
            ks[col][row] = NaN
          }
        } else {
          ks[col][row] = 0
        }
      } else if (w[item] > c) {
        ks[col][row] = NaN
      } else {
        // 该物品能装得下 是否装 看价值
        // 状态转移方程
        // 装的状态 装完上一件物品后,如果背包还剩刚好能装入该物品的空间时的最大价值
        let a = ks[col - 1][j - w[item]] + v[item]
        // 不装的状态 和上一列的同一行状态相同 
        let b = ks[col - 1][row]
        if (isNaN(a)) {
          ks[col][row] = a 
        } else {
          ks[col][row] = a > ~~b ? a : b
        }
      }
    }
  }
  return ks
}

var v = [3, 4, 5, 1000, 8];
var w = [2, 3, 5, 10, 20];  // 无需排序
var c = 20;
var l = v.length;
console.log(filledTheBag(v, w, c, l));

// 第一行全是0  第一列 除了第一行全是NaN