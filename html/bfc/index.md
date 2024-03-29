1. BFC是什么？
block fomatting context = block-level box + formatting context

一言以蔽之：BFC是页面上一块独立且内外隔离的渲染区域。

Box即盒子模型
block-level box 即块级元素
display属性为block, list-item, table等的元素，会生成block-level box，并且参与 block fomatting context；

inline-level box 即行内元素
display属性为inline, inline-block, inline-table等的元素，会生成inline-level box，并且参与 inline formatting context；

Formatting context
　　Formatting context代表页面中的一块渲染区域内的渲染规则上下文。它决定了该渲染区域内的子元素将如何定位，以及和其他元素的关系、相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context(简称IFC)。

　 CSS2.1中只有BFC和IFC, CSS3中还增加了G（grid）FC和F(flex)FC。
　　

BFC 定义
　　BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与，它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。
　　　

2. BFC的生成
上文提到BFC是一块渲染区域，那这块渲染区域到底在哪，它又有多大，这些都由生成BFC的元素决定。CSS2.1中规定满足下列CSS声明之一的元素便会生成BFC。

根元素
float的值不为none
overflow的值不为visible
display的值为inline-block、table-cell、table-caption
display：table也认为可以生成BFC，其实这里的主要原因在于Table会默认生成一个匿名的table-cell，正是这个匿名的table-cell生成了BFC

position的值为absolute或fixed
3. BFC的约束规则
内部的Box会在垂直方向上一个接一个的放置
垂直方向上的距离由margin决定。

属于同一个BFC的两个相邻Box的margin会发生重叠（塌陷），与方向无关。

每个元素的左外边距与包含块的左边界相接触（从左向右），即使存在浮动元素也是如此。

说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界

BFC的区域不会与float的元素区域重叠
计算BFC的高度时，浮动子元素也参与计算
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然
看到以上的几条约束，想想我们学习css时的几条规则

块级元素会扩展到与父元素同宽，所以块级元素会垂直排列
垂直方向上的两个相邻box的margin会重叠，而水平方向不会(此规则并不完全正确)
浮动元素会尽量接近往左上方（或右上方）
为父元素设置overflow：hidden或浮动父元素，则会包含浮动元素
4. BFC在布局中的应用
4.1 防止margin重叠（塌陷）：
两个相邻Box垂直方向margin重叠
<style>
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p>
    <p>Hehe</p>
</body>

两个p之间的距离为100px，因为发生了margin重叠（塌陷），以最大的为准，也就是说即使第一个p的margin为80，两个p之间的距离还是100。

根据BFC布局规则第二条：

Box垂直方向的距离由margin决定。属于同一个BFC(上例中是body元素的BFC)的两个相邻Box的margin会发生重叠
我们可以在p外面包裹一层容器，并触发该容器生成一个新BFC，那么两个p便不属于同一个BFC，就不会发生margin重叠了。

<style>
    .wrap {
        overflow: hidden;// 新的BFC
    }
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align:center;
        margin: 100px;
    }
</style>
<body>
    <p>Haha</p>
    <div class="wrap">
        <p>Hehe</p>
    </div>
</body>

相邻Box水平方向margin重叠
<!doctype HTML>
<html>
<head>
<style>
    #green {
        margin:10px 10px 10px 10px
    }
    #blue {
        margin:10px 10px 10px 10px
    }
    #red {
        margin:10px 10px 10px 10px
    }
    body {
        writing-mode:tb-rl;
    }
</style>
</head>
<body>
    <div id="green" style="background:lightgreen;height:100px;width:100px;"></div>
    <div id="blue" style="background:lightblue;height:100px;width:100px;"></div>
    <div id="red" style="background:pink;height:100px;width:100px;"></div>
</body>
</html>
可以看到水平方向的margin发生了重叠。

我们可以给div加个display:inline-block，触每个div容器生成一个BFC。那么三个div便不属于同一个BFC（这个由body元素形成的BFC），就不会发生margin重叠了。

嵌套元素的margin重叠
<!DOCTYPE html>
<html>  
<head> 
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--The viewport meta tag is used to improve the presentation and behavior of the samples 
    on iOS devices-->
  <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no"/>
  <title></title>
  <style> 
    html, body { height: 100%; width: 100%; margin: 0; padding: 0; }
    #map{
      padding:0;
    }
    .first{
      margin:20px;
      background:lightgreen;
      width:100px;
      height:100px;
    }
    ul{
      /*display:inline-block;*/
      margin:10px;
      background:lightblue;
    }
    li{
      margin:25px;
    }
  </style> 
</head> 
<body class="claro"> 
  <div class="first"></div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</body> 
</html>
此时div与ul之间的垂直距离，取div、ul、li三者之间的最大外边距。

要阻止嵌套元素的margin重叠，只需让ul生成BFC即可（将上例中的注释去掉），这样div、ul、li之间便不会发生重叠现象。

而li位于同一BFC内所以仍然存在重叠现象。

给li设置line-block重新生成一个BFC就不存在重叠现象了。

需要注意的是：

如果为ul设置了border或padding，那元素的margin便会被包含在父元素的盒式模型内，不会与外部div重叠。

《CSS权威指南》中提到块级正常流元素的高度设置为auto，而且只有块级子元素，其默认高度将是从最高块级子元素的外边框边界到最低块级子元素外边框边界之间的距离。如果块级元素有上内边距或下内边距，或者有上边框或下边框，其高度是从最高块级子元素的上外边距边界到最低块级子元素的下外边距边界之间的距离。

4.2 清除内部浮动
<style>
    .par {
        border: 5px solid #fcc;
        width: 300px;
    }
    .child {
        border: 5px solid #f66;
        width:100px;
        height: 100px;
        float: left;
    }
</style>
<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>

根据BFC布局规则第六条：

计算BFC的高度时，浮动元素也参与计算
为达到清除内部浮动，我们可以触发.par生成BFC，那么.par在计算高度时，.par内部的浮动元素.child也会参与计算。

.par {
    overflow: hidden;
}

4.3 自适应多栏布局的
4.3.1 自适应两栏布局
<style>
    body {
        width: 300px;
        position: relative;
    }
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }
    .main {
        height: 200px;
        background: #fcc;
    }
</style>
<body>
    <div class="aside"></div>
    <div class="main"></div>
</body>

根据BFC布局规则第3条：

每个元素的margin的左边，与包含块border的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此。
因此，虽然存在浮动的元素.aslide，但.main的左边依然会与包含块的左边相接触。

根据BFC布局规则第四条：

BFC的区域不会与float box重叠。
我们可以通过通过触发.main生成BFC， 来实现自适应两栏布局。

.main {
    overflow: hidden;
}
当触发.main生成BFC后，这个新的BFC不会与浮动的.aside重叠，因此会根据包含块的宽度，和.aside的宽度，自动变窄。

4.3.2 自适应两栏布局
<!DOCTYPE html>
<html>  
<head> 
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--The viewport meta tag is used to improve the presentation and behavior of the samples 
    on iOS devices-->
  <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no"/>
  <title></title>
  <style> 
    html, body { height: 100%; width: 100%; margin: 0; padding: 0; }
    .left{
      background:pink;
      float: left;
      width:180px;
    }
    .center{
      background:lightyellow;
      overflow:hidden;
    }
    .right{
      background: lightblue;
      width:180px;
      float:right;
    }
  </style> 
</head> 
<body class="claro"> 
  <div class="container">
    <div class="left">
      <pre>
          .left{
            background:pink;
            float: left;
            width:180px;
          }
      </pre>
    </div>
    <div class="right">
       <pre>
          .right{
            background:lightblue;
            width:180px;
            float:right;
          }
      </pre>
    </div>
    <div class="center">
        <pre>
          .center{
            background:lightyellow;
            overflow:hidden;
            height:116px;
          }
      </pre>
    </div>
  </div>
</html>
这种布局的特点在于左右两栏宽度固定，中间栏可以根据浏览器宽度自适应。

4. 总结
其实以上的几个例子都体现了BFC布局规则第五条：

BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
因为BFC内部的元素和外部的元素绝对不会互相影响，因此，

当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。
同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。
避免margin重叠也是这样的一个道理。

