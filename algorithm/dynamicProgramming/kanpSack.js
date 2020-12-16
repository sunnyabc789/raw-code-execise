// 代码实现上看 动态规划就是不用递归 用了循环 多出了空间来减少时间复杂度 2^n
// 这题如果用递归 就是把值在递归间传递 求一个值  n^2

// 如果是第一种问法，要求恰好装满背包，那么在初始化时除了f[0]为0其它f[1..V]均设为 -∞，这样就可以保证最终得到的f[N]是一种恰好装满背包的最优解。
// 如果并没有要求必须把背包装满，而是只希望价格尽量大，初始化时应该将f[0..V]全部设为0。
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
        // 装的状态 装完上一件物品后,如果背包还剩刚好能装入该物品的空间时的最大价值
        let a = ks[col - 1][j - w[item]] + v[item]
        // 不装的状态 和上一列的同一行状态相同 
        let b = ks[col - 1][row]
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


// 背包问题没得贪心 网上有些个贪心解法 是错的

// 完全背包
// 每种无限 总重不超 价值最高
// 每种物品 最多可以取 容量C / w[i](该物品重) 次  然后变成0-1去枚举 时间复杂度不变
// for (物品) {
//   if (0-1物品) {
//     0-1
//   } else (完全物品) {
//     循环完全次数 
//   } else (多重物品) {
//     循环多重次数
//   }
// }


// 多重背包
// 商品限定重复次数

// 只需要把重复的物品都看作一个不同的物品，然后转化成01背包即可

// 恰好装满
// 还是动态规划 此时多了个负无穷的值
// 那么 状态转化 就转到了 kp[该物品序号][背包剩余容量 = 背包总容量 - 该物品容量] + v[该物品序号]

// 综上，我们发现，恰好装满与不是恰好装满只是在初始化过程上有差别而已。只需要在初始化时候把所有的无效状态初始化为负无穷就可以了。但是，f[0]需要初始化为0，因为背包容量为0时，装的物体体积为0是有效状态！
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
  return ks[l][c]
}

var v = [3, 4, 5, 1000, 8];
var w = [2, 3, 5, 10, 20];  // 无需排序
var c = 20;
var l = v.length;
console.log(filledTheBag(v, w, c, l));

// 混合背包问题  即0-1 完全 多重  有的只能拿一次 有的可以多次 有的无限次
