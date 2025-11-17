
# monorepo 但内部互相依赖
pnpm 解决方案

package.json
```
 "pnpm": {
    "peerDependencyRules": {
      "ignoreMissing": [
        "react"
      ]
    },
    "overrides": {
      "react": "^16",
      "react-dom": "^16",
      "@types/react": "^16",
      "@types/react-dom": "^16",
      // 就这里解决了
      "@xxfe/xx-ui-common": "workspace:*",
      "@xxfe/xx-ui": "workspace:*",
    },
    "ignoredBuiltDependencies": [
      "@swc/core",
      "core-js",
      "core-js-pure",
      "fsevents"
    ]
  },
```

xx-ui 依赖 xx-ui-common

构建 xx-ui-common es dist
xx-ui的node_modules里自动能关联上

但要提前发布一下才行 npm上找不到包还是会报错


changesets pnpm指定工具
https://www.pnpm.cn/workspaces
能提前修改版本号
