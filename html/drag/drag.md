onDragStart

e.dataTransfer.setDragImage(dom, 0, 0);
这里可以放dom 然后拖拽的图像就变成指定dom


e.dataTransfer.setData
e.dataTransfer.getData
onDragLeave onDragEnter
可能存在子元素上也会触发onDragLeave 问题
getData取不到问题  

解决方案 onDragEnter 自行标记变量  onDragLeave判断变量是否激活状态来控制



问题表现
window.addEventListener('dragStart', () => {})
导致其他元素加 draggable  无法拖动
但是 加上onDragStart 内部       e.dataTransfer.setData("Text", 'abc');
就又可以 但不合理

问题最终定位方式 chrome控制台 eventlistener里 一个个把拖拽相关的全部删掉 最终定位到是react-dnd中函数影响
详见question1.html

