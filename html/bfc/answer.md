是什么

https://blog.csdn.net/sinat_36422236/article/details/88763187

一块独立的渲染区域 
其实就是块盒子的排列方式 只是块盒子和根据不同属性 float position等 有不同的行为
                        inline 盒子不会有这种行为
触发BFC的说法不正确 一个div的布局 也是BFC 但不能说出来 说出来就说规范的定义模糊

BFC的布局规则
(1) 垂直方向上的距离由margin决定，属于同一个BFC的两个相邻的标签的margin会发生重叠  取了较大的一个值 实际上两个块级容器也会发生margin重叠 而不是累加 
(2) 任何一个标签在你没有设置margin，padding，position,等改变其位置的属性是，他默认放在最左边，后面的一个接一个  BFC的区域不会与浮动的标签区域重叠
(4) 计算BFC高度的时候，浮动子元素也参与计算
(5) BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响外面的标签，反之亦然



3、BFC能解决什么问题？（与上面的规则对应）

(1) 外边距重叠

(2) 自适应两栏或三栏布局  所谓的占满剩余空间  左侧 右侧不设置宽度 浮动 中间或右侧 overflow: auto;

(3) 防止字体环绕  比如有个左浮动的盒子 包含文字的盒子不一定要右浮动 overflow: auto即可

(4) 清除浮动

1. overflow:auto
2.float 不是none
3.display flow-root
4. position absolute或fixed
5.display的值为inline-block、table-cell、table-caption、inline-flex

然而并不完全这么认为 display: block的盒子 难道不是了吗 margin一样重叠了 满足第一条

普通div标签产生的盒子 认为未触发BFC 虽然部分满足BFC的特性和生成条件