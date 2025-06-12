
const fs = require('fs');
const path = require('path');

// 文件位置 平行于node_modules的.tmp文件夹里的temp.js 
// 调用位置 项目根目录
function getAllDirs(mypath = '.') {
    const items = fs.readdirSync(mypath);

    let result = [];

    // 遍历当前目录中所有的文件和文件夹

    items.map((item) => {
      let temp = path.join(mypath, item);

      // 若当前的为文件夹

      if (fs.statSync(temp).isDirectory()) {
        try {
          result.push(item); // 存储当前文件夹的名字
        // 进入下一级文件夹访问
        // console.log(item,'item===')
        if (item === 'node_modules') return 
        result = result.concat(getAllDirs(temp));
        } catch (e) {}
      } else {
        if (item.includes('package.json')) {
          // result.push({
          //   name: item,
          //   path: './' + item,
          // });
          const data = fs.readFileSync(path.join(mypath,item), 'utf8')
          if (!data) return 
          if (data.includes('@xx/4ever')) {  // 目标依赖
            console.log(path.join(mypath,item),'here===')
          }
          if (data.includes('cn-intelli-assistant')) {
            console.log(path.join(mypath,item),'here1===')
          }
        }
      }
    });

    return result;
  }

  // const constantPath = path.join('./','node_modules')

  let files = getAllDirs('./node_modules');
  // console.log(files)
