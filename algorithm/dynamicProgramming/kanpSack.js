// 代码实现上看 动态规划就是不用递归 用了循环 多出了空间来减少时间复杂度 2^n
// 这题如果用递归 就是把值在递归间传递 求一个值  n^2

function kanpSack(capacity, weights, values, n) {
  var a,b,KS = []
   
//首先，初始化用于寻找解决方案的矩阵KS[n+1][capacity+1]
  for (var i = 0; i <= n; i++) {
    KS[i] = [];
  }
  for (var i = 0; i <= n; i++) {
    for (var w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
      //让第一行和第一列为0，因为第一行和第一列表示容量为0或没有物品可装
        KS[i][w] = 0; 
      } else if (weights[i - 1] > w) {
        KS[i][w] = KS[i - 1][w]; //当前物品重量大于当前容量     //此处发生了复用 如果当前物品重量超过容积 那么就不塞入 总值和上一个物品时 同等背包容积时 总值相同  复用 减少的是计算次数  没减少循环和判断次数  
      } else {
       //当前物品重量小于当前容量，有两个选择，装或者不装，取价值最大的
        a = KS[i - 1][w - weights[i - 1]] + values[i - 1]; //装入这个物品后的总价值   //w-weights[i-1]发生了另外一次复用  因为这个地方的存在 需要初始化一个0值用于复用 没有这个0值 会塞不进该物品
        // 总值和上一个物品时 同等背包容积时 总值相同 或加上
        b = KS[i - 1][w]; //不装
  
        KS[i][w] = a > b ? a : b;
      }
    }
     
  }
  return KS[n][capacity];
}

var values = [3, 4, 5, 1000, 8];
var weights = [2, 3, 5, 20, 10];  // 无需排序
// 思考: 容量小价值低 数量*容量=背包容量 容量正好等于背包容量价值高的情况
// 结论 没问题  当指针到该物品时 会枚举出前面的物品都不装的情况 然后就把他装进去了
// 注意: 循环中的数字 不能用编程枚举数 要使用实际枚举数
var capacity = 20;
var n = values.length;
console.log(kanpSack(capacity, weights, values, n)); //26

// 纵列:包容量 横行:物品编号 值:总价值  内层的数组 是一列的所有值 实际代码也是在一列一列的写


function abc(v, w, c, l) {
  const ks = []
  for (let i = 0; i <= l; i ++) {
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
        let a = ks[col - 1][c - w[item]] + v[item]
        // 不装的状态 和上一列的某一行状态相同 和上一列 剩同样多空间时的状态相同
        let b = ks[col - 1][c - w[item]]
        ks[col][row] = a > b ? a : b 
      }
    }
  }
  return ks[l][c]
}

var v = [3, 4, 5, 1000, 8];
var w = [2, 3, 5, 20, 10];  // 无需排序
var c = 20;
var l = values.length;
console.log(abc(v, w, c, l));