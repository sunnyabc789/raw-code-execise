const express = require('express');
const multer = require('multer'); // Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件
const console = require('tracer').colorConsole(); // 增强console
const fs = require('fs'); // 文件模块
const path = require('path'); // 路径模块
const {mkdir, cp, rm, exec, echo, cd} = require('shelljs')

const app = express(); // 服务实例
const port = 8088; // 端口

// 设置静态资源目录
app.use('/upload', express.static('public'));

// 上传文件保存目录
const uploadFileSavePath = './public/uploads';
// 判断文件夹是否存在
if (!fs.existsSync(uploadFileSavePath)) {
    // 不存在则创建
    fs.mkdirSync(uploadFileSavePath);
};

// 设置上传文件参数
const upload = multer({
    storage: multer.diskStorage({
        // 设置上传文件目录
        destination: function (req, file, cb) {
            cb(null, uploadFileSavePath)
        },
        // 设置保存时的文件名
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
});
// 设置上传文件中间件
const uploadAny = upload.any();
// 上传接口
app.post('/upload/uploadfile', (req, res, next) => {
    uploadAny(req, res, (err) => {
        console.debug('req.body', req.body);
        console.debug('req.files', req.files);
        // 错误处理
        if (err) {
            console.error('上传报错', err);
            res.send('上传报错', err);
            return;
        }
        // 上传完成
        console.info('上传完成');
        res.send('上传完成<br><a href="/uploads">点这里查看服务器上传文件列表</a>');

        if ((req?.files?.filename || '') === 'temp.tar.gz') {
            const resolve = path.resolve
            cd(resolve(__dirname, '.'))
            const uploadFileSavePath = './public/uploads';
            exec(`cp ${uploadFileSavePath}/temp.tar.gz ../`)
            rm('-rf', `${uploadFileSavePath}/temp.tar.gz`)
            exec('sh ../deploy.sh')
        }
    })
});

/**
 * 遍历文件目录
 * @param {*} dirPath
 */
const walk = (dirPath) => {
    const fileList = []; // 最后要返回的文件路径列表
    const dirList = fs.readdirSync(path.resolve(dirPath)); // 文件路径列表（可能包含文件夹）
    console.log('dirList', dirList);
    dirList.forEach((item, index) => {
        // 判断如果是文件夹
        if (fs.statSync(dirPath + '/' + item).isDirectory()) {
            walk(dirPath + '/' + item);
        } else {
            fileList.push(dirPath + '/' + item);
        }
    });
    return fileList;
};
// 上传文件列表接口
app.get('/uploads', (req, res) => {
    const fileList = walk(uploadFileSavePath);
    res.send(fileList);
});

// 启动服务
const server = app.listen(port, () => {
    const host = server
        .address()
        .address;
    const port = server
        .address()
        .port;
    console.info('Example app listening at http://%s:%s', host, port);
});


