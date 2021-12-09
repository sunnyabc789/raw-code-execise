
class RemoveAlicdnPlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        // hooks后面的是tabpable事件 看webpack文档
        // tap里的是事件名 随意
        compiler.hooks.shouldEmit.tap('RemoveAlicdn', (compilation) => {
            console.log(compilation.assets['css/app.css'].children[0]._value.includes('alicdn'),'1===')
        })   
    }
}


module.exports = RemoveAlicdnPlugin