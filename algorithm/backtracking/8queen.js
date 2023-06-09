class Queen {
  constructor(num) {
    this.num = num;
    this.result = [];
    this.arr = this.initList();
    this.buildList(this.arr, 0);
  }

  initList() {
    let num = this.num;
    let result = []
    for (let i = 0; i < num; i++) {
      result[i] = [];
      for (let j = 0; j < num; j++) {
        result[i][j] = 0;
      }
    }
    console.log(result);
    return result
  }

  buildList(list, row) {
    const len = list.length
    // 递归中止条件,找到一个解缓存起来
    if (row === len) {
      this.result.push(JSON.parse(JSON.stringify(list)));
      return;
    }
    for (let col = 0; col < len; col++) {
      if (this.isSafe(list, row, col)) {
        list[row][col] = 1;
        this.buildList(list, row + 1);
        // 走到这里，说明该次递归已经结束，不管找没找到，都需要重置

        // 自己的话 回溯法就体现在这里 把状态重置了 就是回溯状态了
        list[row][col] = 0;
      }
    }
  }

  isSafe(list, row, col) {
    // 没必要检测同行 已经规避 
    const len = list.length;
    // 同一列
    for (let i = 0; i < len; i++) {
      if (list[i][col] === 1) return false;
    }
    // 斜右上方  这个不能少   当第二次的递归完成 第三行第二列重置 去到第三行三列 落子 未来 四行二列 就要检测右上了
    for (let i = row - 1, j = col + 1; i >= 0 && j < len; i-- , j++) {
      if (list[i][j] === 1) return false;
    }
    // 斜左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i-- , j--) {
      if (list[i][j] === 1) return false;
    }
    return true;
  }
}
const queen = new Queen(8);
console.log(queen.result, queen.result.length);