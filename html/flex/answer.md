1.有两根轴线 水品轴线 交叉轴线（垂直）flex-direction

flex属性
flex-direction row row-reverse column column-reverse
flex-wrap wrap no-wrap
flex-flow 上面两个的简写
justify-content: center | flex-start | flex-end | space-between (两侧不留空) | space-around (两侧留空)
align-items flex-start | flex-end | center | baseline | stretch   在交叉轴上的排列方式
align-content flex-start | flex-end | center | baseline | stretch   多根轴线时的排列方式 如果只有一根轴线不起作用 (换行)

item 属性
order 递增
flex-grow  默认为0，即如果存在剩余空间，也不放大。
flex-shrink  默认为1，即如果空间不足，该项目将缩小。
flex-basis  <length> auto  项目占据主轴的空间  和宽度一样 则项目将占据固定空间   该属性一般设置为auto 较难以计算其行为
flex 上面3个简写 建议写这个而不是分开写  auto (1 1 auto) none(0 0 auto)  

当flex-basis和width属性同时存在时，width属性不生效，flex item的宽度为flex-basis设置的宽度
