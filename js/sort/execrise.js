
function insertSort(arr) {
  for (let i = 1; i < arr.length; i ++) {
    let temp = arr[i]
    let j 
    for (j = i - 1; j < arr.length && arr[j] > temp; j --) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}
console.log(insertSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了 * 2
function binarysort(arr) {
  for (let i = 0; i < arr.length; i ++) {
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
    for (j = i - 1; j >= left && arr[j] > temp; j --) {
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
  while(true) {
    d = Math.floor(d / 2)
    for (let x = 0; x < d; x ++) {
      for (let i = x + d; i < arr.length; i = i + d) {
        let j
        let temp = arr[i]
        for ( j = i - d; j >= 0 && arr[j] > temp; j = j - d) {
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
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length - i - 1; j ++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }
  return arr
}
console.log(buddleSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了
function directSelectSort(arr) {
  for (let i = 0; i < arr.length; i ++) {
    let min = arr[i]
    let index = i
    for (let j = i + 1; j < arr.length; j ++) {
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

  for (let i = arr.length - 1; i > 0; i --) {
    len -- 
    [arr[0], arr[i]] = [arr[i], arr[0]]
    heapify(arr, 0)
  }
  return arr
}
console.log(heapSort([7, 3, 4, 5, 10, 7, 8, 2]))

function merge(left, right) {
  let result = []
  while(left.length > 0 && right.length > 0) {
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
  while(nth --) {
    ret = num % 10
    num = Math.floor((num - ret) / 10)
  }
  return ret
}

function radixSort(arr) {
  let max = Math.floor(Math.log10(Math.max.apply(Math, arr)))
  for (let d = 0; d < max + 1; d ++) {
    let digitBuckets = []
    for (let i = 0; i < arr.length; i ++) {
      let digit = getDigit(arr[i], d + 1)
      digitBuckets[digit] = digitBuckets[digit] || [] 
      digitBuckets[digit].push(arr[i])
    }

    let idx = 0
    for (let i = 0; i < digitBuckets.length; i ++) {
      if (digitBuckets[i] && digitBuckets[i].length > 0) {
        for (let j = 0; j < digitBuckets[i].length; j ++) {
          arr[idx++] = digitBuckets[i][j]
        }
      }
    }
  } 
  return arr
}
console.log(radixSort([7, 3, 4, 5, 10, 7, 8, 2]))