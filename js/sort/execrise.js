
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

function shellsort(arr) {
  let d = arr.length
  while (true) {
    d = Math.floor(d / 2)
    for (let x = 0; x < d; x++) {
      for (let i = x + d; i < arr.length; i = i + d) {
        let temp = arr[i]
        let j
        for (j = i - d; j >= 0 && arr[j] > temp; j = j - d) {
          arr[j + d] = arr[j]
        }
        arr[j + d] = temp
      }
    }
    if (d === 1) {
      break
    }
  }
  return arr
}
console.log(shellsort([7, 3, 4, 5, 10, 7, 8, 2]))

function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivot = Math.floor(arr.length / 2)
  let less = []
  let more = []
  let val = arr[pivot]
  arr.splice(pivot, 1)
  arr.forEach( i => {
    i < val ? less.push(i) : more.push(i)
  })

  return quickSort(less).concat(val, quickSort(more))
}
console.log(quickSort([7, 3, 4, 5, 10, 7, 8, 2]))

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
console.log(buddleSort([7, 3, 4, 5, 10, 7, 8, 2]))

function directSelectSort(arr) {
  for (let i = 0; i < arr.length; i ++) {
    let min = arr[i]
    let index = i
    for (j = i + 1; j < arr.length; j ++) {
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
