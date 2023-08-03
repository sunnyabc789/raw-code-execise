- webpack-chain
```
const RemoveAlicdnPlugin = require('../loader/removeAlicdnPlugin')


  onGetWebpackConfig(config => {
    // 资源前缀  微前端下 这东西是可以编译时 运行时(基座上) 修改的  被坑过 注意下
    config.output.publicPath(envParamsJSON.publicPath || '/');

    config
      // 定义插件名称
      .plugin('webpack.DefinePlugin')
      // 第一项为具体插件，第二项为插件参数
      .use(webpack.DefinePlugin, [
        {
          ...(envParamsJSON.processENV || {})
        },
      ]);

    config
      // 定义插件名称
      .plugin('test.removeAlicdn')
      // 第一项为具体插件，第二项为插件参数
      .use(RemoveAlicdnPlugin, [
        {
          ...(envParamsJSON.processENV || {})
        },
      ]);
```

- webpack.config
```
plugins: [
    new RemoveAlicdnPlugin(options)
]
```
