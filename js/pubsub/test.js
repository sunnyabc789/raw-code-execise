const utils = require('./execrise.js')

utils.on('test', (abc, efg) => {
  console.log(abc, efg)
})

utils.emit('test', 'abc', 'efg')