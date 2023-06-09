const constantPath = './'
const glob = require("glob"); // 是个外部依赖
function getPagePaths(cwd) {
    return glob.sync('**/*.+(tsx|jsx)', {
        cwd
    });
}
const files = getPagePaths(constantPath,'constantPath===')
console.log(files,'files===')