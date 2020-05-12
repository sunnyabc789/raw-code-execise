
function insertSort(arr) {
  for (let i = 1; i < arr.length; i ++) {
    let temp = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > temp; j --) {
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
    let left = 0;
    let right = i - 1;
    let mid 
    let temp = arr[i]
    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (arr[mid] > temp) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    let j 
    for ( j = i - 1; j >= left && arr[j] > temp; j --) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}
console.log(binarysort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了
function shellsort(arr) {
}
console.log(shellsort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了
function quickSort(arr) {
}
console.log(quickSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了
function buddleSort(arr) {
}
console.log(buddleSort([7, 3, 4, 5, 10, 7, 8, 2]))

//错了
function directSelectSort(arr) {
}
console.log(directSelectSort([7, 3, 4, 5, 10, 7, 8, 2]))


//错了
function heapSort(arr) {
}
console.log(heapSort([7, 3, 4, 5, 10, 7, 8, 2]))

function merge(left, right) {
}

function mergeSort(arr) {
}

console.log(mergeSort([7, 3, 4, 5, 10, 7, 8, 2]))


//错了
function radixSort(arr) {
}
console.log(radixSort([7, 3, 4, 5, 10, 7, 8, 2]))