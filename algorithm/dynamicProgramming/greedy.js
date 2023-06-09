function greedy(values, weights, capacity) {
  var returnValue = 0
  var remainCapacity = capacity
  var sortArray = []
  values.map((cur, index) => {
    sortArray.push({
      'value': values[index],
      'weight': weights[index],
      'ratio': values[index] / weights[index]
    })
  })
  sortArray.sort(function (a, b) {
    return b.ratio > a.ratio
  })
  console.log(sortArray)
  sortArray.map((cur, index) => {
    var num = parseInt(remainCapacity / cur.weight)
    console.log(num)
    remainCapacity -= num * cur.weight
    returnValue += num * cur.value
  })
  return returnValue
}
var items = ['A', 'B', 'C', 'D']
var values = [50, 220, 60, 60]
var weights = [5, 20, 10, 12]
var capacity = 32 //背包容积
console.log(greedy(values, weights, capacity)); // 320

function abc(v, w, c, l) {
  const ks = []
  for (let i = 0; i <= l; i++) {
    const col = i
    const item = col - 1  // 物品的指针 col是格子的指针 不是同一个
    for (let j = 0; j <= c; j++) {
      const row = j
      if (i === 0 || j === 0) {
        // 最终取数时 是col row来取得数
        if (!ks[col]) ks[col] = []
        ks[col][row] = 0
      } else if (w[item] > c) {
        ks[col][row] = ks[item][j]
      } else {
        // 该物品能装得下 是否装 看价值
        // 状态转移方程
        // 装的状态 装完上一件物品后,如果背包还剩刚好能装入该物品的空间时的最大价值
        let a = ks[col - 1][c - w[item]] + v[item]
        // 不装的状态 和上一列的同一行状态相同 
        let b = ks[col - 1][row]
        ks[col][row] = a > b ? a : b
      }
    }
  }
  return ks[l][c]
}

console.log(abc(values, weights, capacity, values.length));