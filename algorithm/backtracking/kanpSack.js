
// 如果说回溯法是剪枝了的枚举 下面的解并没有剪枝  其路径生成的做法可以参考下 但解不应理解为回溯法

// 生成问题的基本状态：
// 扩展结点：一个正在产生儿子的结点称为扩展结点
// 活结点：一个自身已生成但其儿子还没有全部生成的节点称做活结点
// 死结点：一个所有儿子已经产生的结点称做死结点

// 一开始 A是扩展节点 生成 B C

// 选择了 B 则A成了活节点  B成了扩展节点

// 到了D 不行 空间不够 D成了死节点  回到最近的活节点

// 深度优先遍历

// 即是回溯法



// 对于 0 - 1 问题 每个物品 都有拿  不拿两种选项 深度为物品标号 分支为拿与不拿

var c = 20; // 背包最大容量
var n = 5; // 代表有5个物品
var v = [3, 4, 5, 1000, 8];
var w = [2, 3, 5, 20, 10];  // 无需排序
var path = []; // 来记录树中的移动路径，为1的时候表示选择该数据，为0表示不选择
var maxvalue = 0; // 背包的最大权重值
// 先构造树 树不是输入参数
let count = 1
function search(i) { // 表示递归深度
  if (i >= n) {
    checkMax(); //检查最大值
  }
  else {
    // 其中值得注意的是search函数，就是通过不断的叠加，递归至最深层后得出了一个解，然后判断是否为可行解，如果是最优解即替换。

    // 自己的话: 这里节省了空间 只用了一个path i < n 时 path[i] = 0 全为0 来checkMax一下 然后执行栈返回上层 path[4] = 1 再search(4 + 1) 又带着个path[4] = 1 checkMax了   再回到上层   p[3] = 1  p[4] = 0 来一次 p[3] = 1 p[4] = 1 来一次   
    path[i] = 0;
    search(i + 1);
    path[i] = 1;
    search(i + 1);
  }
}
// 用循环 而不能用递归 递归就是另一个解法了
function checkMax() {
  // 当前背包状态
  var weight = 0,
    value = 0;
  for (var i = 0; i < n; i++) {
    if (path[i] == 1) {
      weight += w[i];
      value += v[i];
    }
  }
  if (weight <= c) { // 判断是否达到上限
    if (value >= maxvalue) {
      maxvalue = value;
      console.log('最大价值为' + maxvalue);
      console.log('所选物品（1为选中，0代表不选）：');
      console.log(path);
    }
  }
}
search(0);


