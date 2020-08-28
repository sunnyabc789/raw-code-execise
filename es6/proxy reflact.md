在reflact之前
想要操作对象 只能借用原型对象的方法
Ojbect.defineProperty
或者操作符
name in obj

有了reflact 可以更方便的操作对象
浏览器中 有兼容性要求无法使用 但可以单独实现 做兼容处理

有13个方法 和 Object原型上的对应

和proxy的handler对应 
