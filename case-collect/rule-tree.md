
9.规则树
规则树分为全规则树和简易规则树
如果不进行阉割 简易规则树不一定能完全映射为全规则树

举例

简易规则树
(aa bb 缺省and or关系 是一种阉割版的规则树)
```
aa in 123
bb in 234
cc =  123

and

aa in 234 
bb in 123

or 

aa in 234
bb in 123

```
转化为全规则树
```
                  -> and aa in 123
                          bb in 234
                          cc =  123
                  |
        -->and -> |
       |          |
or ->  |          -> and   aa in 234 
       |                   bb in 123
       |
       |
       |
        -> and ->| aa in 234 
                   bb in 123

```

实现该需求时 全规则树也存在交互难的问题 
简易规则树存在一定优势

问题是数据结构转换问题  全规则树的在此情况下的数据结构不好生成简易规则树的UI

如果 组件关系 能保持统一 则两者的数据结构可以统一
此时

```
aa in 123
bb in 234
cc =  123

and

aa in 234 
bb in 123

and 

aa in 234
bb in 123

```

```
      -> and  group1
      |
      |
and ->|  ->and group2
      |
      |
      ->  and  group3
```

