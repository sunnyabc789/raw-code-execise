## 父容器没设置高度 子容器继承父容器高度
父容器没设置高度 来源就是子容器
可能两个子容器 横向排列  高度来源另一个子容器

因此问题本质是横向排列导致的

给需要继承高度的子容器 设置position absolute 脱离文档流
父容器也需要设置 position

但这样会给drag留问题  导致没高度的无法触发onDrop?  +符号不出现?
详见drag目录