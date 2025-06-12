
class RemovexxcdnPlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        // hooks后面的是tabpable事件 看webpack文档
        // tap里的是事件名 随意
        compiler.hooks.shouldEmit.tap('Removexxcdn', (compilation) => {
            console.log(compilation.assets['css/app.css'].children[0]._value.includes('xxcdn'),'1===')


            // dev server
            const publicUrl = this.options['process.env.OSSURL'] + '/alog-ware/cnbp-erp/201.0.1/public'
            compilation.assets['css/app.css'].children[0]._value = compilation.assets['css/app.css'].children[0]._value.replace(/(at.xxcdn.com\/t\/)/g, publicUrl)

            // build
            compilation.assets['css/app.css']._value = compilation.assets['css/app.css'].children[0]._value.replace(/(at.xxcdn.com\/t\/)/g, publicUrl)


        })   

        // 这个写法感觉更好
         compiler.hooks.emit.tap("RemoveDataTest", (compilation) => {
           Object.keys(compilation.assets).forEach((filename) => {
             // step4: 得到资源内容
             let content = compilation.assets[filename].source();
             // step5: 清除 html 文件中的 data-test 属性
             if (/\.html$/.test(filename)) {
               content = content.replace(reg, "");
             }
             // step6: 更新 compilation.assets[filename] 对象
             compilation.assets[filename] = {
               source() {
                 return content;
               },
               size() {
                 return content.length;
               },
             };
           });
         });
    }
}


module.exports = RemovexxcdnPlugin