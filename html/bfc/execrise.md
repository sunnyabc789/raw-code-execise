是什么

规定了块级元素的渲染方式与和界面上其他元素间关系的规范

怎么触发
1.float none以外
2.overflow: auto
3.display flow-root inline-block等声明块级的
4.postion relative static以外

影响
1.margin不会互相叠加 inline元素才会 普通的div都不会
2.在垂直方向上一个接一个排列
3.水平方向上也是左到右排列 
4.计算高度时会计算盒子内部的浮动元素高度
5.内部元素不会影响外部元素 反之依然

应用
(1) 外边距重叠

(2) 自适应两栏或三栏布局  所谓的占满剩余空间  左侧 右侧不设置宽度 浮动 中间或右侧 overflow: auto;

(3) 防止字体环绕  比如有个左浮动的盒子 包含文字的盒子不一定要右浮动 overflow: auto即可

(4) 清除浮动