```
const runDevServer = async (options) => {
  // 电脑无法生成证书的 记得注释掉
  // const keyAndCert = await autoGenerateCertificate();
  const keyAndCert = await autoGenerateCertificate();
  runServer({
    ...options,
      // 电脑无法生成证书的 记得注释掉
    // https: { ...options.https, /* ...keyAndCert */ },
     https: { ...options.https,  ...keyAndCert  },
  });
};


new WebpackDevServer(webpack(merge(webpackConfig, { externals })), {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    allowedHosts: [
      ".cainiao-inc.com"
    ],
    hot: true,
    https,
    before: (app) => {
      /**
       * 用于 CNUI Alfred Workflow，方便本地开发环境快速打开对应的 demo
       */
      // app.get('/category-map.json', async (req, res) => {
      //   try {
      //     const data = await getCategoryMap();
      //     res.json(data);
      //   } catch (err) {
      //     console.error(err);
      //     res.json({ errMsg: '本地分类文件打开失败', success: false });
      //   }
      // });
    },
  }).listen(port, '0.0.0.0', (err) => {
    if (err) {
      console.error('WebpackDevServer boot failed');
      console.error(err);
    }
  });
};


const { certificateFor } = require('trusted-cert');

async function autoGenerateCertificate() {
  const hosts = ['0.0.0.0', 'localhost']; // 本地 https 服务要使用的 domain/ip
  return await certificateFor(hosts);
}
```

```
最底层核心
node-forge
import { pki } from 'node-forge';
pki.certificateFromPem(readFileSync(certPath(dir, name), 'utf-8'));
```