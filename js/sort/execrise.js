// 1.关于稳定性：

// 不稳定：快选堆希（快速排序、选择排序、堆排序、希尔排序）
// 稳    定：插冒归计基（简单插入排序、冒泡排序、归并排序、计数排序、基数排序）

// 2.关于移动次数和关键字顺序无关的排序
// 顺口溜：一堆（堆排序）海龟（归并排序）选（选择排序）基（基数排序）友

// nlogn  前面的n可以省略
// 排序方法        平均情况        最好情况        最坏情况        辅助空间        稳定性

// 冒泡排序         O(n ^ 2)           O(n)              O(n ^ 2)            O(1)                稳定

// 选择排序         O(n ^ 2)          O(n ^ 2)            O(n ^ 2)            O(1)              不稳定

// 插入排序         O(n ^ 2)           O(n)              O(n ^ 2)            O(1)                稳定

// 希尔排序O(n * log(n))~O(n ^ 2) O(n ^ 1.3)       O(n ^ 2)            O(1)              不稳定

// 堆排序          O(n * log(n))     O(n * log(n))    O(n * log(n))       O(1)              不稳定

// 归并排序       O(n * log(n))     O(n * log(n))    O(n * log(n))       O(n)                稳定

// 快速排序       O(n * log(n))     O(n * log(n))      O(n ^ 2)            O(nlogn)              不稳定
// 基数	n * k	n * k	n * k	n + k	稳定 k 基数大小  空间也是 kn

// 基数排序 vs 计数排序 vs 桶排序

// 这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：

// 基数排序：根据键值的每位数字来分配桶 计数排序：每个桶只存储单一键值 桶排序：每个桶存储一定范围的数值

function insertSort(arr) {
  for (let i = 1; i < arr.length; i ++) {
    let j 
    const temp = arr[i]
    for (j = i - 1; i >= 0 && arr[j] > temp; j --) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}
// 不稳定 快选堆希  
// 一堆乌龟选基友 
// 稳定 与初始状态有关 平均 On2 O1
console.log(insertSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2
function binarysort(arr) {
  for (let i = 1; i < arr.length; i ++) {
    let left = 0
    let right = i - 1
    let mid 
    const temp = arr[i]
    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (arr[mid] > temp) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    let j 
    for (j = i - 1; j >= left && arr[j] > temp; j --) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}
// 时间复杂度不好算 好时 nlogn  坏时趋近n2  平均 n2 空间复杂度 o1  与初始状态相关
console.log(binarysort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2  
//注意交换时是 j + d = j
//注意 j 不要重复声明
function shellsort(arr) {
  let d = arr.length 
  while (d > 1) {
    d = Math.floor(d / 2)
    for (let x = 0; x < d; x++) {
      for (let i = x + d; i < arr.length; i += d) {
        const temp = arr[i]
        let j
        for (j = i - d; j >= 0 && arr[j] > temp; j -= d) {
          arr[j + d] = arr[j]
        }
        arr[j + d] = temp
      }
    }
  }
  return arr
}
// 不稳定 与初始状态有关 nlogn n2  o1
console.log(shellsort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了
// 注意val 和 more的前后关系 val用来做基准 一定是夹在中间的
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let less = []
  let more = []
  const pivot = Math.floor(arr.length / 2)
  const mid = arr[pivot]
  arr.splice(pivot, 1)
  let less = []
  let more = []
  arr.forEach(i => {
    i < mid ? less.push(i) : more.push(i)
  })
  return quickSort(less).concat(mid, quickSort(more))
}
// 不稳定 与初始状态有关
// nlogn n2 on
console.log(quickSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2
function buddleSort(arr) {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length - i - 1; j ++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}
// 稳定 与初始状态有关 
// n2 o1
console.log(buddleSort([7, 3, 4, 5, 10, 7, 8, 2]),'===')

//错了
function directSelectSort(arr) {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length; j ++) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}
// 与初始状态无关 一堆乌龟选基友 不稳定 快选堆希  n2
console.log(directSelectSort([7, 3, 4, 5, 10, 7, 8, 2]))

let len
function buildMaxHeap(arr) {
  len = arr.length 
  for (let i = Math.floor(arr.length / 2); i >= 0; i --) {
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

  for (let i = arr.length - 1; i > 0; i --) {
    len --
    [arr[0], arr[i]] = [arr[i], arr[0]]
    heapify(arr, 0)
  }
  return arr
}
// 不稳定 与初始状态无关
// nlogn o1
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
  const pivot = Math.floor(arr.length / 2)
  const left = arr.slice(0, pivot)
  const right = arr.slice(pivot)
  return merge(mergeSort(left), mergeSort(right))
}
// 稳定 相对快排的优势 与初始状态无关
// nlogn  on  费空间 但快排也费空间
console.log(mergeSort([7, 3, 4, 5, 10, 7, 8, 2]))

function getDigit(num, nth) {
  let ret = 0
  while (nth --) {
    ret = num % 10
    num = Math.floor((num - ret) / 10)
  }
  return ret
}

function radixSort(arr) {
  let max = Math.floor(Math.log10(Math.max.apply(null, arr)))
  for (let d = 1; d <= max + 1; d ++) {
    const digitBuckets = []
    for (let i = 0; i < arr.length; i ++) {
      const digit = getDigit(arr[i], d)
      if (!digitBuckets[digit]) digitBuckets[digit] = []
      digitBuckets[digit].push(arr[i])
    }

    let idx = 0
    for (let i = 0; i < digitBuckets.length; i ++) {
      if (digitBuckets[i] && digitBuckets[i].length) {
        for (let j = 0; j < digitBuckets[i].length; j ++) {
          arr[idx ++] = digitBuckets[i][j]
        }
      }
    }
  }
  return arr
}
// 稳定 与初始状态无关
// n*k n+k
console.log(radixSort([7, 3, 4, 5, 10, 7, 8, 2, 103, 102, 52]))


let root = { "val": 7, "left": { "val": 3, "left": null, "right": null }, "right": { "val": 15, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": null, "right": null } } }


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.root = root;
  this.stack = [];
  while (root) {
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  let p = this.stack.pop();
  let q = p.right;
  while (q) {
    this.stack.push(q);
    q = q.left;
  }
  return p.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
let iterator = new BSTIterator(root)
console.log(iterator.hasNext())