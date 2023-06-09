// 石头游戏 V
// 几块石子 排成一行 ，每块石子都有一个关联值，关联值为整数，由数组 stoneValue 给出。

// 游戏中的每一轮：Alice 会将这行石子分成两个 非空行（即，左侧行和右侧行）；Bob 负责计算每一行的值，即此行中所有石子的值的总和。Bob 会丢弃值最大的行，Alice 的得分为剩下那行的值（每轮累加）。如果两行的值相等，Bob 让 Alice 决定丢弃哪一行。下一轮从剩下的那一行开始。

// 只 剩下一块石子 时，游戏结束。Alice 的分数最初为 0 。

// 返回 Alice 能够获得的最大分数 。



// 示例 1：

// 自己的话
// 此处注意 分开只分左右  不取最优解  但我第一次实现了最优解的最大值
// 但是思路错了 不是说分两组 差值小就是最优的 
// 例如[98,77,24,49,6,12,2,44,51,96]

// [2, 44, 51, 96] => 96
// [44, 51, 96] => 139  
// 就不是取差值最小的那两组
// ------------------

// 输入：stoneValue = [6, 2, 3, 4, 5, 5]
// 输出：18
// 解释：在第一轮中，Alice 将行划分为[6，2，3]，[4，5，5]。左行的值是 11 ，右行的值是 14 。Bob 丢弃了右行，Alice 的分数现在是 11 。
// 在第二轮中，Alice 将行分成[6]，[2，3]。这一次 Bob 扔掉了左行，Alice 的分数变成了 16（11 + 5）。
// 最后一轮 Alice 只能将行分成[2]，[3]。Bob 扔掉右行，Alice 的分数现在是 18（16 + 2）。游戏结束，因为这行只剩下一块石头了。
// 示例 2：

// 输入：stoneValue = [7, 7, 7, 7, 7, 7, 7]
// 输出：28
// 示例 3：

// 输入：stoneValue = [4]
// 输出：0


// 提示：

// 1 <= stoneValue.length <= 500
// 1 <= stoneValue[i] <= 10 ^ 6

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/stone-game-v
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 最优解的最大值
// /**
//  * @param {number[]} stoneValue
//  * @return {number}
//  */
// var stoneGameV = function (stoneValue) {
//   let res = 0
//   let record = []
//   fn(stoneValue)
//   return res

//   function fn(stoneValue) {
//     if (!stoneValue || !stoneValue.length) return
//     if (stoneValue.length === 1) {
//       console.log(res, stoneValue[0], 'here0===')
//       res += stoneValue[0]
//       return
//     }
//     if (stoneValue.length === 2) {
//       console.log(res, stoneValue, 'here1===')
//       res += Math.min.apply(null, stoneValue)
//       return
//     }


//     let target = stoneValue
//     let min = sum(stoneValue)
//     const length = Math.floor(stoneValue.length / 2)
//     for (let i = 0; i < length; i++) {

//       const bak = stoneValue.map(i => i)
//       let arr = []
//       arr.push(bak[i])
//       bak.splice(i, 1)
//       record.push([arr, bak])
//       for (let j = i + 1; j <= stoneValue.length; j++) {
//         const diff = sum(bak) - sum(arr)
//         if (Math.abs(diff) < min) {
//           min = Math.abs(diff) < min ? Math.abs(diff) : min
//           target = diff > 0 ? arr.map(i => i) : bak.map(i => i)
//           if (diff === 0) {
//             if (arr.length !== bak.length) {
//               target = arr.length > bak.length ? arr : bak
//             } else {
//               const varianceDiff = varianceArr(arr) - varianceArr(bak)
//               if (varianceDiff >= 0) {
//                 target = bak
//               } else {
//                 target = arr
//               }
//             }
//           }
//         }
//         if (j === stoneValue.length) break;
//         arr.push(stoneValue[j])
//         bak.splice(bak.indexOf(stoneValue[j]), 1)
//       }
//     }
//     console.log(min, target, 'target===')
//     console.log(res, sum(target), 'here2===')
//     res += sum(target)
//     fn(target)
//   }

//   function sum(arr) {
//     return arr.reduce((prev, cur) => prev + cur, 0)
//   }

//   function varianceArr(arr) {
//     let s,
//       ave,
//       sum = 0,
//       sums = 0,
//       len = arr.length;
//     for (let i = 0; i < len; i++) {
//       sum += Number(arr[i]);
//     }
//     ave = sum / len;
//     for (let i = 0; i < len; i++) {
//       sums += (Number(arr[i]) - ave) * (Number(arr[i]) - ave)
//     }
//     s = (sums / len).toFixed(4);
//     return s;
//   };
// };

// 粗略改进 满足题意
/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {

  // 用arr做键名 大的时候500个 时间复杂度大10倍  0.19S 和 0.02S的区别   数组里 数字大 复杂 时间复杂度也会变化  长数字 长数组 会带来6倍复杂度
  // 比{} 赋值 时间复杂度大2倍  
  // 尽可能想办法用扁平对象去做缓存
  // const map = new Map()
  const m = {}

  return recur(stoneValue)
  
  function recur(arr) {
    const length = arr.length
    // const symbol = Symbol.for(arr)
    // const head = arr[0]
    // const tail = arr[length - 1]
    // const mid = arr[Math.floor(length / 2)]
    // const sign = head + '-' + tail + '-' + mid + '-' + length
    // 把大数组toString了 都比 map symbol性能好    JSON.stringify更快
    const sign = arr.toString()
    if (m[sign]) {
      return m[sign]
    }
    // if (map.has(symbol)) {
    //   return map.get(symbol)
    // }
    if (length === 1) {
      return 0
    }
    if (length === 2) {
      let res = Math.min.apply(null, arr)
      return res
    }
    let left = arr.slice(0, 1)
    let right = arr.slice(1, length)

    let max = 0

    const total = sum(arr)
    const sumMemo = []
    for (let i = 1; i < length; i ++) {
      const sumL = sumMemo[i] = i === 1 ? left[0] : sumMemo[i - 1] + left[left.length - 1]
      const sumR = total - sumL
      let temp = sumL < sumR ? left : right

      if (sumL === sumR) {
        let resLeft = recur(left)
        let resRight = recur(right)

        max = Math.max(max, Math.max(resLeft, resRight) + sumL)
        break
      }

      let tempV = recur(temp)
      
      tempV = Math.min(sumL, sumR) + ~~tempV
      max = max > tempV ? max : tempV

      left.push(right.shift())
    }
    m[sign] = max
    // map.set(symbol, max)
    return max
  }

  function sum(arr) {
    return arr.reduce((prev, cur) => prev + cur, 0)
  }
};
// console.log(stoneGameV([1, 2, 3]));
// console.log(stoneGameV([6, 2, 3, 4, 5, 5]));
// console.log(stoneGameV([98, 77, 24, 49, 6, 12, 2, 44, 51, 96]));
console.time();
console.log(stoneGameV([39994, 3, 4, 10000, 10000, 10000, 10000, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1000000]));
console.timeEnd();

// [98, 77, 24, 49, 6, 12, 2, 44, 51, 96]
// 330