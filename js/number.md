js数字计算处理
建议实用三方库 BigNumber.js

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


格式化
Intl.NumberFormat

    result = new Intl.NumberFormat('zh-CN', {
      // minimumFractionDigits: 4,
      maximumFractionDigits: 20
    }).format(num);
    // 会自动补零  输出逗号分隔字符串数字

    const number = 3500;

    console.log(new Intl.NumberFormat().format(number));
    // 如果在美式英语区域 → '3,500'


    const number = 123456.789;

// 德语使用逗号（,）作为小数点，使用句号（.）作为千位分隔符
console.log(new Intl.NumberFormat("de-DE").format(number));
// → 123.456,789

// 大多数阿拉伯语国家使用阿拉伯语数字
console.log(new Intl.NumberFormat("ar-EG").format(number));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat("en-IN").format(number));
// → 1,23,456.789

// 通过编号系统中的 nu 扩展键请求，例如：中文十进制数字
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// → 一二三,四五六.七八九

//当请求的语言不被支持，例如巴里，包含一个回滚语言印尼，这时候就会使用印尼语
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// → 123.456,789


Intl 对象是 ECMAScript 国际化 API 的一个命名空间，它提供了精确的字符串对比、数字格式化，和日期时间格式化。Collator，NumberFormat 和 DateTimeFormat 对象的构造函数是 Intl 对象的属性。本页文档内容包括了这些属性，以及国际化使用的构造器和其他语言的方法等常见的功能。

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
