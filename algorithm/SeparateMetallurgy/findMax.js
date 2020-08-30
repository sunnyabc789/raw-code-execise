const arr = [4,5,10,201,3]


function compare(left, right) {
  return left[0] > right[0] ? left[0] : right[0]
}

function max(arr) {
  if (!arr.length) return 0
  if (arr.length === 1) return arr
  
  const pivot = Math.floor(arr.length / 2)
  let left = arr.slice(0, pivot)
  let right = arr.slice(pivot)

  return [compare(max(left), max(right))]
}

console.log(max(arr));