function MinCoinChange(coins) {
  var coins = coins.sort(function (a, b) {
    return b - a;
  });

  this.makeChange = function (amount) {
    var change = [],
      total = 0;
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i];
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    }
    return change;
  }
}
// 大的尽可能的往里塞 就是动态规划可以取多次
var coin = new MinCoinChange([1, 2, 5, 10]);
console.log(coin.makeChange(36));


const c = [1, 2, 5, 10]
function mc(c, total) {
  c = c.sort((a, b) => b - a)
  let t = 0
  const result = []
  for (let i = 0; i < c.length; i ++) {
    while (t + c[i] <= total) {
      result.push(c[i])
      t += c[i]
    }
  }
  return result
}

console.log(mc([1, 2, 5, 10], 36));