
const fs = require('fs')
fs.readFile('README.md', (error, data) => {
    const txt = data.toString()
    console.log(txt);

    fs.writeFile('hello.txt', txt, err => {
        if (error) {
            console.log("文件写入失败！")
        }else {
            console.log('文件写入成功！')
        }
    })
})
