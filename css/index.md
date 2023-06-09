1.css-loader ~作用
node_modules别名 架构层在 css-loader里定义的
@import '~@alife/theme-coneplatform/variables.scss';

2.scss sass  
以fusion使用为例
2.1.key 头变量
```
import '~@alifd/next/lib/core/style/_global.scss'
  .#{$css-prefix}menu {
    border-radius: 0;
    border: none;

    .#{$css-prefix}menu-symbol-icon-selected {
      &::before {
        display: none;
      }
    }
  }
```
var.scss
```
$class-prefix: ".next" !default;
$css-prefix: "#{str-slice($class-prefix, 2)}-" !default;
```

$css-prefix 可以被覆盖

这里是样式层定义

组件层
```
    <ConfigProvider prefix="my-">
                    <div>
                        <Input />
                        <Button>Submit</Button>
                    </div>
                </ConfigProvider>
```
这里是组件层定义  
使得组件不去和上面的样式匹配