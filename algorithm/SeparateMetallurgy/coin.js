const a = [1,1,1,1,1,1,1,1]
const b = [1,1,2,1,1,1,1,1]

function findFake(a, b) {
  if (a.length <= 1 && b.length <= 1) return a[0] > b[0] ? a[0] : b[0]
  let result = sum(a) > sum(b) ? a : b
  return findFake(result.slice(0, Math.floor(result.length / 2)), result.slice(Math.floor(result.length / 2)))
}

console.log(findFake(a, b))

function sum(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0)
}