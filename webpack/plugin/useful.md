 # 有用的webpack 插件记录

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

```
CopyWebpackPlugin
new CopyWebpackPlugin([
    {
        from: path.join(__dirname, '/src/libs'),
        to: path.join(__dirname, process.env.BUILD_DEST ? './' + process.env.BUILD_DEST + '/libs' : './build/libs'),
    },
]),
```

