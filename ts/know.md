1.window属性
declare global {
  interface Window {
    trace?: any;
  }
} 


const _win = window as any 

const a = (window as any)?.a

2.
// es目录 就是typescript来的 tsc --outDir es --declarationDir es  纯文件映射 去掉类型
// tsc -v 4.9.5 能正常转换路径别名  tsc 5 有问题 转换失败 原因不明
