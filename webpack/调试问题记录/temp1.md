
问题
React.lazy(() => import(`../components/${path}`))

构建出 
8435.js 

里面出现了 import.meta.env vite语法  mjs语法

```
webpackConfig.module.rules.unshift({
  test: /\.(mjs|js|jsx|ts|tsx)$/,
  include: path.join(process.cwd(), 'node_modules'),
  use: path.join(process.cwd(), "temploader.js")
})
```

temploader.js
```
const loaderUtils = require("loader-utils")

module.exports = exports.default = function (source) {
    this.cacheable()

    // console.log(this.resource , 'here===')
    if (this.resource.includes('vanilla')) {
      console.log(typeof source,'source===')
      // console.log(source.includes('import.meta.env'),'abc===')
      console.log(this.resource, 'this.resource===')
      console.log(source.includes('import.meta.env'))
    }

    if (source.includes('import.meta.env')) {
      console.log(this.resource, 'efg==')
    }


    return source
    
  }
```

vanilla package.json
```
 "exports": {
    "./package.json": "./package.json",
    ".": {
      "types": "./index.d.ts",
      "import": {
        "types": "./esm/index.d.mts",
        "default": "./esm/index.mjs"
      },
      "module": "./esm/index.js",
      "default": "./index.js"
    },
    "./vanilla": {
      "types": "./vanilla.d.ts",
      "import": {
        "types": "./esm/vanilla.d.mts",
        "default": "./esm/vanilla.mjs"
      },
      "module": "./esm/vanilla.js",
      "default": "./vanilla.js"
    },
```


vanilla.mjs里 有 import.meta.env语法
5.102.1 产物 undefined.env 
5.103.0 产物 import.meta.env 报错

都是引的mjs文件

遇到的卡点
1.正则 漏了 mjs|jsx 等 注意
2.加了loader 输出文件的文件名变化 注意用代码检索 dist目录 而不是找老的文件名 
3.源码检索 可以考虑在 node_modules目录里全局搜 


