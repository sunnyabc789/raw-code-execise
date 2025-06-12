- webpack-chain
```
const webpack = require('webpack');
const RemovexxcdnPlugin = require('../loader/removexxcdnPlugin')

  // cross-env ENV_PARAMS=local node abc.js
  const { USE_HTTP, ENV_PARAMS } = process.env;

  let envParamsJSON = {}
  if (ENV_PARAMS) {
    envParamsJSON = require(path.join(__dirname, './env-params', ENV_PARAMS + '.js')) || {}
  }

  onGetWebpackConfig(config => {
    // 资源前缀  微前端下 这东西是可以编译时 运行时(基座上) 修改的  被坑过 注意下
    config.output.publicPath(envParamsJSON.publicPath || '/');

    config
      // 定义插件名称
      .plugin('webpack.DefinePlugin')
      // 第一项为具体插件，第二项为插件参数
      .use(webpack.DefinePlugin, [
        {
          // 加环境变量
          ...(envParamsJSON.processENV || {})
        },
      ]);

    config
      // 定义插件名称
      .plugin('test.removexxcdn')
      // 第一项为具体插件，第二项为插件参数
      .use(RemovexxcdnPlugin, [
        {
          ...(envParamsJSON.processENV || {})
        },
      ]);
```

- webpack.config
```
plugins: [
    new RemovexxcdnPlugin(options)
]
```
