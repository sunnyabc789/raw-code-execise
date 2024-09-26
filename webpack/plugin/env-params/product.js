const OSSURL = '/www/cnbp'

const staticPath = OSSURL + '/public'

const fontURL = OSSURL + '/public/front'

const processENV = {
    'process.env.CNIAXIOSURL': JSON.stringify('/abc'),
    'process.env.TARGET_ENV': JSON.stringify('private'),
    'process.env.OSSURL': JSON.stringify(OSSURL),
    'process.env.staticPath': JSON.stringify(staticPath),
    'process.env.fontURL':JSON.stringify(fontURL),
    'process.env.DATAURL': JSON.stringify('/data/'),
}

const params = {
    // 给业务层代码用的环境变量
    processENV,
    // 给loader用的环境变量
    OPENLOADER: true,
    // 静态文件目录
    staticPath,
    OSSURL,
    fontURL,
    logoURL: '/img/logo.png',
    publicPath: '/'
}


module.exports = params