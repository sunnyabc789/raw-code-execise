onDragStart

e.dataTransfer.setDragImage(dom, 0, 0);
这里可以放dom 然后拖拽的图像就变成指定dom


e.dataTransfer.setData
e.dataTransfer.getData
onDragLeave onDragEnter
可能存在子元素上也会触发onDragLeave 问题
getData取不到问题  

解决方案 onDragEnter 自行标记变量  onDragLeave判断变量是否激活状态来控制