生成依赖关系图
npm ls --depth=0  # 只显示顶层依赖
npm ls --depth=99 # 显示所有依赖，无限制深度

npm ls package-name

npm ls stylus 
vite typescript的好几个有用  安全问题被npm删了


npm ls --prod  # 只显示生产环境依赖
npm ls --dev   # 只显示开发环境依赖

npm list命令的简写
npm list [-g] [--depth=number]
list alias ls la ll

三方依赖
npm install -g npm-graph
npm-graph path/to/your/package.json


ELSPROBLEMS

npm error code ELSPROBLEMS通常表示依赖关系或版本冲突问题，常见于使用Vite等工具时因依赖未正确安装或版本不匹配导致。以下是具体解决方法：

依赖缺失问题
版本冲突问题
路径问题
