function stringifyUrl(search = {}) {
  return Object.entries(search).reduce((prev, cur) => 
    `${prev}${cur[0]}=${encodeURIComponent(cur[1])}&`, Object.keys(search).length ? '?': ''
  ).slice(0, -1)
}

let a = {a:1, b:2}
console.log(stringifyUrl(a));