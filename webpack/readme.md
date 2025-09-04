
## 关键词 publicPath  host不对  currentScript问题
如果 webpackConfig.output 没指定publicPath  则在控制台 commpand+p 搜 publicPath.js 出来时这个

var scriptUrl;
if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
var document = __webpack_require__.g.document;
if (!scriptUrl && document) {
    // 一般能读取到currentScript不会出问题
	if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
		scriptUrl = document.currentScript.src;
	if (!scriptUrl) {
        // 关键代码  一般出问题都是走到这里了
		var scripts = document.getElementsByTagName("script");
		if(scripts.length) {
			var i = scripts.length - 1;
			while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
		}
	}
}
// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
__webpack_require__.p = scriptUrl;

配了则是
    "output": {
        "publicPath": "/dist",
        "filename": "[name].js",
        "path": "/Users/chenyongqing/efg/code/cn-export-ui/dist",
        "clean": false
    },
    __webpack_require__.p = "/dist";

此时 import() 引入的模块 会是
https://站点域名/dist资源名
正确  "publicPath": "/dist/", 

cdn域名和站点域名不同
 "publicPath":  'https://localhost:9910/dist/'

尽量不要试图去debuge这东西  上述解决方案最终是试出来的 没debug到最终代码
但是通过debug发现的 没配publicPath 追溯到了 publicPath.js文件 

线上报错
ChunkLoadError: Loading chunk xx failed.
Search控制台搜 ChunkLoadError
可以定位到代码  但是点debug会被sourcemap到webpack的一个无用文件 导致无法sourcemap
此时 可以考虑override content文件 手动加console.log

实践： 
经过override后  
定位到webpack加载逻辑
```
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;

/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();

```
发现没有出现onerror的资源 timeout的资源
依然很难定位到具体问题 

最终通过另外的方式 发现是微前端的问题
只通过模块中引入带有异步import的组件包  异步加载会出问题
在底座上也要加上组件包

具体问题代码行暂时还是没定位到
猜测还是jsonp异步问题 在微前端框架中的存在时延导致的missing

另看到一篇其他原因的chunkloaderror missing类型
```
const lazyRetry = function(componentImport, name) {
    return new Promise((resolve, reject) => {
        // 检查是否已经刷新过了
        const hasRefreshed = JSON.parse(
            window.sessionStorage.getItem(`${name}-retry-lazy-refreshed`) || 'false'
        );
        // 动态导入组件
        componentImport().then((component) => {
            window.sessionStorage.setItem(`${name}-retry-lazy-refreshed`, 'false'); 
            resolve(component);
        }).catch((error) => {
            if (!hasRefreshed) { // 没有刷新过，需要刷新页面刷新
                window.sessionStorage.setItem(`${name}-retry-lazy-refreshed`, 'true'); 
                return window.location.reload(); // 
            }
            reject(error); 
        });
    });
}
// 将原本的  const App = React.lazy(() => import('./App')); 替换成如下即可
const App = React.lazy(() => lazyRetry(() => import(/* webpackChunkName: "main-app" */ './App'), "main-app"));
```


## deoptimised 
提示带这个 就是包体积过大 webpack专有名词  百度一搜都是webpack


## Watchpack Error (watcher): 
// webpack 监听文件数量过多导致无法热更新 解决方法
webpackConfig.watch = true;
webpackConfig.watchOptions = {
  ignored: /node_modules/,
  aggregateTimeout: 300,
  poll: 1000
}
