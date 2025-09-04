6.import引包 hack处理法整理
__webpack_modules__ 在文档里叫 module variables

## 问题描述
```
// 这个包 externals了 xx-ui; 所在包使用环境没有 window['xx-ui']
const La = React.lazy(() => import('@xxfe/xx-domain-i18n'));

const Com = () => {
    <React.Suspense
      fallback={<div>loading...</div>}
    >
        <La>
    </React.Suspense>
}

```

## 打包后产物 内容

- main包
```
  const s = React.lazy((() => Promise.all([e.e(810), e.e(479)]).then(e.bind(e, 1479))));
  // 静态分析 无法确定 xx-ui是哪个bundle  dev态 bundle名不是hash product态 bundle名变成了hash 无法找到
  // 找到以后 可以这样动态添加上去
     __webpack_modules__['@xxfe/xx-ui'] = (module, _exports, _require) => {
        module.exports = window.Next;
      }
```

- 810.js包 import('@xxfe/xx-domain-i18n') 包
这里面就不是从window上取 xx-ui 了  是从 webpack bundle里取 



// https://webpack.js.org/api/module-variables/#__webpack_public_path__-webpack-specific

```
 
// 生产 8107 就是externals掉的CNUI 为什么是8107 决定机制还没找到 应该和webpack文档module hash部分有关
__webpack_modules__[8107] = (module, _exports, _require) => {
    module.exports = window.Next;
}

// 这个没意义 这是另外一个技巧 在此记录备忘
__webpack_chunk_load__ = async (id) => {
      let error;

      console.log(id,'id===')
      // __webpack_public_path__ = 'https://localhost:9910/'
      // __webpack_public_path__ = 'https://dev.o.xxcdn.com/gexp/aidc-static-latest/oa-comps/bpms/'

      // __webpack_public_path__ = 'https://o.xxcdn.com/gexp/aidc-static-latest/oa-comps/bpms/'

      // __webpack_modules__['@xxfe/xx-ui'] = (module, _exports, _require) => {
      //   module.exports = window.Next;
      // }
      // __webpack_modules__['@cainiaofe/xx-ui'] = (module, _exports, _require) => {
      //   module.exports = window.Next;
      // }

      return await originalLoad(id);
      // for (const path of publicPaths) {
      //   __webpack_public_path__ = 'https://dev.o.xxcdn.com/gexp/aidc-static-latest/bundle/'
      //   try {
      //     return await originalLoad(id);
      //   } catch (e) {
      //     error = e;
      //   }
      // }
      throw error;
    };
```

  // 怎么找到是8107的  经验记录
  const originalLoad = __webpack_chunk_load__;
    const originalRe = __webpack_require__;
    console.log(originalRe,'originalRe===')
    // 8107
    console.log(__webpack_modules__,'__webpack_modules__===')

在这找到了方法定义  
__webpack_require__
编译后长这样
```
 function s(a) {
        var i = c[a];
        if (void 0 !== i)
            return i.exports;
        var e = c[a] = {
            exports: {}
        };

        if (a === 8107) { // 实际一开始不是在找的8107  这里是个module函数 看不出是个什么  但锁定8107后 是靠这个劫持 发现这里是xxUI
            console.log(c)
            console.log(a,'a===')
            e = new Proxt(e, {
                get() {

                },
                set() {

                }
            })
        }
        return o[a](e, e.exports, s),
        e.exports
    }
```

编译前长这样
```
 // 01 定义对象用来存放被加载过的模块
var installedModules = {}; 
// The require function   
// 02 下面方法用来替换 require 和 import加载操作， webpack 实现的 require() 函数     
// 下面的这个方法就是 webpack 当中自定义的，它的核心作用就是返回模块的 exports 
function __webpack_require__(moduleId) { 
    // Check if module is in cache        
    // 02-1判断当前缓存中是否已经存在当前加载模块内容，如果模块已经加载过，直接返回缓存

  if (installedModules[moduleId]) {


    return installedModules[moduleId].exports;

  } 
  // Create a new module (and put it into the cache)       
  // 02-2 如果缓存中不存在当前加载模块，则创建一个新模块，执行模块内容，并加载模块，并放入缓存

  var module = installedModules[moduleId] = {
    moduleId: moduleId,
    loaded: false,
    exports: {}

  }; 
  // Execute the module function        
  // 02-3 调用当前moduleId对应的模块函数，并完成内容的加载        
  // call() 为了将this指向module.exports

```

怎么知道 要 

然后trace  overrides代码
proxy劫持 最终找到了8107

开始找不到 xxui 会报错 g.formilyReact is undefined
定位进去 发在在810包里 
发现在调用 g = t(1569) g.formilyReact
可以确定 g就是 xxUI

t -> webpack_require 810包里
1569 在810包里
```
   1569: e => {
        "use strict";
        e.exports = a
    },
```
a -> 
    965: (a, e, i) => {
      var n;
      self, n = (a, e, i) => (() => {})(), a.exports = n(i(8107), i(5442), i(6003))
    n = (a, e, i) 里的a  即  i(8107)
    // 一开始没看出来在这可以发现8107  在 webpack_require里打出来的
   // 

n(i(8107), i(5442), i(6003)) ->

n = (module, exports, __webpack_require__) {
  
}


可能可以通过CommonsChunkPlugin解决
但本质还是个plugin 可以自己写
```
  const p = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'common.js',
  }),

  {
    entry: {},
    plugins: [
      p
    ]
  }
```
具体用法不会是这样

这个用法是把 common.js文件打包  引用路径都指向过来