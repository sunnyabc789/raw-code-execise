const fs = require('fs');
const path = require('path');

function getAllDirs(mypath = '.') {
    const items = fs.readdirSync(mypath);

    let result = [];

    // 遍历当前目录中所有的文件和文件夹

    items.map((item) => {
      let temp = path.join(mypath, item);

      // 若当前的为文件夹

      if (fs.statSync(temp).isDirectory()) {
        // result.push(item); // 存储当前文件夹的名字
        // 进入下一级文件夹访问
        // result = result.concat(getAllDirs(temp));
      } else {
        if (item.endsWith('.jsx')) {
          result.push({
            name: item.replace('.jsx', ''),
            path: './' + item,
          });
        }
      }
    });

    return result;
  }

  let files = getAllDirs(constantPath);