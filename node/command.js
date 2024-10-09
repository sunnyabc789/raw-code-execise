const { default: search } = require("@inquirer/search");
const path = require('path')
const fs = require('fs')
const spawnCommand = require('spawn-command');

const concurrently = require("concurrently");
const cwd = process.cwd();

const items = fs.readdirSync(path.join('./src/pages'));

search(
  {
      message: '请选择要调试的页面:',
      source: async (value) => {
        if (!value) return items
        return items.filter(i => i.includes(value))
      },
  },
).then(answers => {

  let child = spawnCommand(`TAILWIND_MODE=watch NODE_OPTIONS=--max_old_space_size=8129 xx-scripts start --port 7200 --mpaEntry ${answers.toLowerCase()}`);

  // 子进程的打印信息可能会丢一些 原因不明 
  child.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  child.on('exit', function (exitCode) {
    console.log('exit', exitCode);
  });


// 这样不丢打印信息 但是用了第三方依赖 底层其实也是 spawn-command
//   concurrently([{
//             command: `TAILWIND_MODE=watch NODE_OPTIONS=--max_old_space_size=8129 xx-scripts start --port 7200 --mpaEntry ${answers.toLowerCase()}`,
//             name: 'xx',
//             prefixColor: 'blue',
//         },
//         {
//             command: 'DEV=1 UA_MODE=mobile ./node_modules/.bin/storybook dev -p 9921 --quiet',
//             name: 'storybook-mobile',
//             prefixColor: 'yellow',
//         },
//     ],
//     // @ts-ignore
//     {
//         stdio: 'inherit',
//         cwd
//     });

})


