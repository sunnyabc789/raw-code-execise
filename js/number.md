js数字计算处理
简易实用三方库 BigNumber.js

6大实用场景
1. 超大数处理
const googol = new BigNumber ('1100');
console. log(googol. times ('250'). toString()) ; / "2e+150"

2. 精确小数位数控制
const pi = new BigNumber ('3. 141592653589793");
console. log(pi.toFixed (5));
// "3.14159"
console. log (pi. toPrecision (5));
// "3.1416"
console.log(pi.dp (3) .toString());
// "3.142"

3. 比较与判断
const a = new BigNumber (42);
const b = new BigNumber('42.0');
console.log(a.eq(b));
/ true
console. log(a.gt (40)) ;
// true
console. log(b.It (50));
// true
console.log (a.isInteger ()); // true

4. 单位换算
//加密货币单位转换
function weiToEth (wei) {
    return new BigNumber (wei)
        .dividedBy ('1e18')
        .toFixed (8);
}
console. log (weiToEth ('1234567890123456789 )); // "1.23456789"


5. 格式化输出
//注意和toFixed区别 此处带逗号了
const money = new BigNumber ('1234567 .89456');
console.1og(money . toFormat (2))；1/ "1,234,567.89”

6. 数学函数扩展
//自定义平方根函数
BigNumber.prototype.sqrt = function () {
    return this.exponentiatedBy (0.5);
};

const num = new BigNumber (16);
console.log(num.sqrt() .toString()); // "4"