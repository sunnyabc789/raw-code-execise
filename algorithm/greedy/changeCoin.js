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