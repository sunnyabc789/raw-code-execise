var decodeString = function (s) {
  // 和 ( A or ( B and C )) 的栈结构有所不同
  let numberStack = []
  let charStack = []
  let tempNum = ''
  s.split('').forEach((cur) => {
    if (cur === '[') {
      charStack.push(cur)
      numberStack.push(tempNum)
      tempNum = ''
      return
    }
    if (cur === ']') {
      let head = charStack.lastIndexOf('[')
      let temp = charStack.slice(head)
      temp.shift()
      temp = temp.join('').repeat(numberStack.pop())
      charStack = charStack.slice(0, head)
      charStack.push(temp)
      return
    }
    if (isNaN(cur)) {
      charStack.push(cur)
    } else {
      tempNum += cur
    }

  })
  return charStack.join('')
};