let arr = 100000000
 arr = arr + ''

let reg = /[0-9][0-9][0-9]/g
console.log(arr.match(reg))
console.log(arr.replace(/[0-9][0-9][0-9]/g, '$&,'))