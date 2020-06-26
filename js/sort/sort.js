//插排 直接插入
// 时间复杂度 O(n^2) 最好时O(m) 最坏0(n^2) 所以稳定
//空间复杂度 0（1）



// 基本思想：在序号i之前的元素(0到i - 1)已经排好序，本趟需要找到i对应的元素x(此时即arr[i]) 的正确位置k, 在寻找位置k的过程中与序号i - 1到0的元素依次进行比较。如果x小于比较元素，则比较元素向后移动一位；否则，结束移位，将x插入当前位置k
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // 将待插入元素提取出来
    let temp = arr[i]
    let j
    //此处循环的意义在于 前边不一定都排好序了
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        // 插入元素小于比较元素，比较元素则向后移动一位
        arr[j + 1] = arr[j]
      } else {
        // 否则，结束移位
        break
      }
      // for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      //   arr[j + 1] = arr[j]
      // }
    }
    //将插入元素插入正确位置
    arr[j + 1] = temp
  }
  return arr
}
console.log(insertSort([7, 3, 4, 5, 10, 7, 8, 2]))

//插排 二分法
// 二分法本质是二分查找 指针指到哪个 就二分找比他大的
// 时间不稳定 好的时候快了 慢的时候还是O n2

// 二分查找 时间复杂度 前提是已排序
// log2 n

// 只需要关心思想 时间复杂度 具体代码 对不对的证明不关系

// 本质就是二分查找 前边一定是排好序的 然后对前边二分

// 与插入排序思想差不多，但是二分排序是在插入第i个元素时，对前面的0~i - 1元素进行折半，先跟它们中间的元素进行比较。如果小，那么对前半进行折半；如果打，那么对后半进行折半。依次进行，直到left > right。然后再把第i个元素前一位与目标位置之间的所有元素向后移动一位，再将目标元素放入正确位置上。
function binarySort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let left = 0
    let right = i - 1
    let mid

    // while 对前方不断二分 找比当前值大的值 获取指针
    while (left <= right) {
      //向下取整
      mid = Math.floor((left + right) / 2)
      //
      if (arr[mid] > temp) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    // 从比当前值大的指针开始 一直到当前值的前一个 不停的换位置 且把当前值 放到比他大的那个位置上
    for (let j = i - 1; j >= left; j--) {
      arr[j + 1] = arr[j]
    }
    if (left !== i) {
      arr[left] = temp
    }
  }
  return arr
}
console.log(binarySort([7, 3, 4, 5, 10, 7, 8, 2]))

//希尔(shell 插排)排序
// O nlog2 n 最好 nlogn  最坏 nlog2 n  空间 O1

// 希尔排序是基于插入排序的以下两点性质而提出改进方法的：
// 插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率。
// 但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位。

// 1. 分组 长度的一半 n  n + n/2 形成 n/2组
// 2. 每组 组内插排
// 3. 再分组 第一次的一半 向下取整
// 4. 每组 组内插排
// 5. 循环 直到只有一组  不稳定

function shellSort(arr) {
  let d = arr.length
  while (true) {
    d = Math.floor(d / 2)
    //组遍历
    for (let x = 0; x < d; x++) {
      for (let i = x + d; i < arr.length; i = i + d) {
        let temp = arr[i]
        let j
        //组内插排
        for (j = i - d; j >= 0 && arr[j] > temp; j = j - d) {
          arr[j + d] = arr[j]
        }
        arr[j + d] = temp
      }
    }
    if (d == 1) {
      break
    }
  }
  return arr

  // len = arr.length;
  // for (var fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
  //   for (var i = fraction; i < len; i++) {
  //     for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
  //       var temp = arr[j];
  //       arr[j] = arr[fraction + j];
  //       arr[fraction + j] = temp;
  //     }
  //   }
  // }
}
console.log(shellSort([7, 3, 4, 5, 10, 7, 8, 2]))

// 直接选择排序
// 基本思想：每次选择待排序的元素中最小的值，放置在序列的首位
function directSelectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    let index = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        // 找到最小值，并标注最小值索引，方便后续与元素arr[i]交换位置
        min = arr[j]
        index = j
      }
    }
    arr[index] = arr[i]
    arr[i] = min
  }
  return arr
}
console.log(directSelectSort([7, 3, 4, 5, 10, 7, 8, 2]))

// 选择排序 堆排序
// 堆排序利用了大根堆（或小根堆）堆顶记录的关键字最大（或最小）这一特征，使得在当前无序区中选取最大（或最小）关键字的记录变得简单
// 用大根堆排序的基本思想
// ① 先将初始文件R[1..n]建成一个大根堆，此堆为初始的无序区
// ② 再将关键字最大的记录R[1]（即堆顶）和无序区的最后一个记录R[n]交换，由此得到新的无序区R[1..n - 1]和有序区R[n]，且满足R[1..n - 1].keys≤R[n].key
// ③由于交换后新的根R[1]可能违反堆性质，故应将当前无序区R[1..n - 1]调整为堆。然后再次将R[1..n - 1]中关键字最大的记录R[1]和该区间的最后一个记录R[n - 1]交换，由此得到新的无序区R[1..n - 2]和有序区R[n - 1..n]，且仍满足关系R[1..n - 2].keys≤R[n - 1..n].keys，同样要将R[1..n - 2]调整为堆。……
// 直到无序区只有一个元素为止。

let len

function buildMaxHeap(arr) {
  //建立大根堆
  len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i)
  }
}

function heapify(arr, i) {
  //堆调整
  let left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i

  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== i) {
    // 解构赋值，交换变量
    ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, largest)
  }
}

function heapSort(arr) {
  buildMaxHeap(arr)

  for (let i = arr.length - 1; i > 0; i--) {
    ;[arr[0], arr[i]] = [arr[i], arr[0]]
    len--
    heapify(arr, 0)
  }
  return arr
}

console.log(heapSort([7, 3, 4, 5, 10, 7, 8, 2]))

//交换排序 冒泡
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 因为每次比较时都已经有i个元素沉下去了，所以j<arr.length-1-i
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 这里采用了解构赋值。如果一般做法，借助临时变量，则辅助空间是O(1)
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
console.log(bubbleSort([7, 3, 4, 5, 10, 7, 8, 2]))

// 交换排序 快速排序
// 基本思想：任意取一个数 如第一个 两个指针 
// 一个前 一个后
// 两个都和取值比 比取值大则往后方 比取值小 则往前放
// 直到两个指针相碰 放入取值 完成第一轮
// 右指针比小 左指针比大
let quicksort = function (arr) {
  if (arr.length <= 1) return arr;

  let pivot = Math.floor((arr.length - 1) / 2);
  let val = arr[pivot], less = [], more = [];

  arr.splice(pivot, 1);
  arr.forEach(function (e, i, a) {
    e < val ? less.push(e) : more.push(e);
  });

  return (quicksort(less)).concat([val], quicksort(more))
}
console.log(quicksort([7, 3, 4, 5, 10, 7, 8, 2]))

// 归并排序
// 基本思想: 将待排序序列分为若干个子序列，每个子序列是有序的，然后将有序子序列合并为整体有序序列。
function merge(left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left).concat(right)
}
function mergeSort(arr) {
  if (arr.length == 1) {
    return arr
  }
  let middle = Math.floor(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
console.log(mergeSort([7, 3, 4, 5, 10, 7, 8, 2]))

// 基数排序
// 基本思想：将所有待比较元素（正整数）统一为同样的数位长度，数位较短的数前面补零。然后，从个位开始，进行排序；然后十位，进行排序；以此进行！这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。
// 基数排序两种方法：
// MSD 从高位开始进行排序
// LSD 从低位开始进行排序
// LSD Radix Sort
// helper function to get the last nth digit of a number
var getDigit = function (num, nth) {
  // get last nth digit of a number
  var ret = 0;
  while (nth--) {
    ret = num % 10
    num = Math.floor((num - ret) / 10)
  }
  return ret
}

// radixSort
function radixSort(arr) {
  var max = Math.floor(Math.log10(Math.max.apply(Math, arr))),
    // get the length of digits of the max value in this array
    digitBuckets = [],
    idx = 0;

  for (var i = 0; i < max + 1; i++) {

    // rebuild the digit buckets according to this digit
    digitBuckets = []
    for (var j = 0; j < arr.length; j++) {
      var digit = getDigit(arr[j], i + 1);

      digitBuckets[digit] = digitBuckets[digit] || [];
      digitBuckets[digit].push(arr[j]);
    }

    // rebuild the arr according to this digit
    idx = 0
    for (var t = 0; t < digitBuckets.length; t++) {
      if (digitBuckets[t] && digitBuckets[t].length > 0) {
        for (j = 0; j < digitBuckets[t].length; j++) {
          arr[idx++] = digitBuckets[t][j];
        }
      }
    }
  }
  return arr
}
console.log(radixSort([7, 3, 4, 5, 10, 7, 8, 2]))

















function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j
    //此处的大于小于 影响正序 倒序
    for (j = i - 1; j < arr.length && arr[j] > temp; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}
console.log(insertSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2
function binarysort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]
    let left = 0
    let right = i - 1
    let mid
    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (arr[mid] > temp) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    let j
    for (j = i - 1; j >= left && arr[j] > temp; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}
console.log(binarysort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2  
//注意交换时是 j + d = j
//注意 j 不要重复声明
function shellsort(arr) {
  let d = arr.length
  while (true) {
    d = Math.floor(d / 2)
    for (let x = 0; x < d; x++) {
      for (let i = x + d; i < arr.length; i = i + d) {
        let j
        let temp = arr[i]
        for (j = i - d; j >= 0 && arr[j] > temp; j = j - d) {
          arr[j + d] = arr[j]
        }
        arr[j + d] = temp
      }
    }
    if (d == 1) break
  }
  return arr
}
console.log(shellsort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了
// 注意val 和 more的前后关系 val用来做基准 一定是夹在中间的
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivot = Math.floor(arr.length / 2)
  let val = arr[pivot]
  arr.splice(pivot, 1)
  let less = []
  let more = []
  arr.forEach(i => {
    i < val ? less.push(i) : more.push(i)
  })

  return quickSort(less).concat(val, quickSort(more))
}
console.log(quickSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2
function buddleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}
console.log(buddleSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了
function directSelectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    let index = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        index = j
      }
    }
    arr[index] = arr[i]
    arr[i] = min
  }
  return arr
}
console.log(directSelectSort([7, 3, 4, 5, 10, 7, 8, 2]))


//错了 *2
// 建立大根堆注意是从中间开始建
// 弹出时 注意是从尾部开始 arr.legnth 堆尾巴
let len
function buildMaxHeap(arr) {
  //建立大根堆
  len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i)
  }
}

function heapify(arr, i) {
  let left = 2 * i + 1
  let right = 2 * i + 2
  let largest = i

  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }

  if (i !== largest) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    heapify(arr, largest)
  }
}

function heapSort(arr) {
  buildMaxHeap(arr)

  //就只哟这里是大于0 其他地方都记住是大于等于0
  for (let i = arr.length - 1; i > 0; i--) {
    len--
    [arr[0], arr[i]] = [arr[i], arr[0]]
    heapify(arr, 0)
  }
  return arr
}
console.log(heapSort([7, 3, 4, 5, 10, 7, 8, 2]))

function merge(left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right)
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let pivot = Math.floor(arr.length / 2)
  let left = arr.slice(0, pivot)
  let right = arr.slice(pivot)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([7, 3, 4, 5, 10, 7, 8, 2]))

function getDigit(num, nth) {
  let ret = 0
  while (nth--) {
    ret = num % 10
    num = Math.floor((num - ret) / 10)
  }
  return ret
}

function radixSort(arr) {
  let max = Math.floor(Math.log10(Math.max.apply(Math, arr)))
  for (let d = 1; d <= max + 1; d++) {
    let digitBuckets = []
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], d)
      digitBuckets[digit] = digitBuckets[digit] || []
      digitBuckets[digit].push(arr[i])
    }

    let idx = 0
    for (let i = 0; i < digitBuckets.length; i++) {
      if (digitBuckets[i] && digitBuckets[i].length > 0) {
        for (let j = 0; j < digitBuckets[i].length; j++) {
          arr[idx++] = digitBuckets[i][j]
        }
      }
    }
  }
  return arr
}
console.log(radixSort([7, 3, 4, 5, 10, 7, 8, 2]))