1.window属性
declare global {
  interface Window {
    trace?: any;
  }
} 


const _win = window as any 

const a = (window as any)?.a