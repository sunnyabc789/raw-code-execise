const utils = require('./pubsub.js')

utils.on('test', (abc, efg) => {
  console.log(abc, efg)
})

utils.emit('test', 'abc', 'efg')