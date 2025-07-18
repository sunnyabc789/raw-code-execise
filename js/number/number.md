
## 1.四舍五入问题
toFixed() 方法在进行四舍五入时可能会产生一些不准确的结果，这是因为 toFixed() 方法在处理浮点数时，实际上使用的是舍入到最近的偶数（银行家舍入）策略，而不是标准的四舍五入。这种舍入策略是为了在大量运算时减小累积误差。

toFixed只能给数字类型用

let a = '123.345'
Number(a).toFixed(2) // '123.34'  期望 123.35

let num1 = 0.615;
console.log(num1.toFixed(2)); // 输出 "0.61" 而非 "0.62"


Math.round 四舍五入到整数 还是不准
Math.round(321201.595 * 100) // 32120159 期望 32120160


```
/**
 * 精确的四舍五入函数
 * @param {number} number - 需要四舍五入的数字
 * @param {number} decimals - 保留的小数位数
 * @returns {number} - 四舍五入后的结果
 */
export function preciseRound(number, decimals = 0) {
  if (typeof number !== 'number' || typeof decimals !== 'number') {
    throw new Error('参数类型错误');
  }
  
  if (decimals < 0) {
    throw new Error('小数位数不能为负数');
  }

  // 处理科学计数法
  const str = number.toString();
  if (str.includes('e')) {
    const [base, exponent] = str.split('e');
    const adjustedNum = Number(base) * Math.pow(10, Number(exponent));
    return preciseRound(adjustedNum, decimals);
  }

  // 将数字转换为字符串并处理小数部分
  let [intPart, decPart = ''] = number.toString().split('.');
  
  // 如果小数部分长度小于要求的精度，补0
  decPart = decPart.padEnd(decimals, '0');
  
  // 如果小数部分长度大于要求的精度，需要进行四舍五入
  if (decPart.length > decimals) {
    // 获取四舍五入位的后一位
    const nextDigit = parseInt(decPart[decimals], 10);
    
    // 构造完整的数字字符串（整数部分 + 需要保留的小数部分）
    let numStr = intPart + (decimals > 0 ? '.' + decPart.slice(0, decimals) : '');
    
    // 如果后一位大于等于5，需要进位
    if (nextDigit >= 5) {
      // 将字符串转换为数字并加上最小单位
      const minUnit = Math.pow(10, -decimals);
      numStr = (parseFloat(numStr) + minUnit).toFixed(decimals);
    }
    
    return numStr;
  }
  
  // 如果小数部分不需要截断，直接返回格式化后的字符串
  return number.toFixed(decimals);
}

```

## 大小限制问题
- js number有大小限制
- 如果后端用Number类型回来长id 可能还会导致向下取 js number 最大值  导致多个重复id


## 数字展示 四舍五入 保留0问题
展示页面 如果做四舍五入 考虑清楚业务意义
尽量在输入端限制好
例如
1.组件要做 大写转换  数量级标识
2.非数字进入 如果是 100(一百) 这种呢  那丢了 大写转换  数量级标识 不满足老板诉求 开发者没责任心肯定就不管了
3.空数据必须按标准传入 '' undefined null  组件帮展示'- -'