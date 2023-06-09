

## 一.实操类
### 1.同系统跳转
同系统跳转  不允许 window.location.href = xxx 
必须使用 react-router的跳转 

#### react-router 5
类组件
this.props.history.push('/xxx')

函数组件
props.history.push('/xxx')
其他情况待补充

#### react-router 6
const nav = useNavigate()
nav('/xxx', ars)  // ars是啥待确定

#### react-router 5
类组件
this.props.history.push('/xxx')
函数组件
import {  useHistory } from 'react-router-dom' 
const history = useHistory()
低代码
this.$utils.router.pageRouter.customHistory.push
带参数
```
history.push({
  pathname: '/xxx',
  query: {     // query or start
    key: value
  }
}) 
// 

// 接收参数
this.props.history.query
```
```
history.push({
  pathname: '/xxx',
  search: `?key=${value}`
})
// 接收参数
location.hash.split('?')[1]  // 或其他方法

```

#### 注意事项
用该方法跳转 location.search获取不到东西 或拿到旧的状态
例如

浏览器地址栏访问
https://pre-op.cainiao-inc.com/?SSO_TICKET=4bce49e8a4394af6858c13005fcebd0020bcf700#/sml/consignmentManage

路由 #/sml/consignmentManage
参数?SSO_TICKET=4bce49e8a4394af6858c13005fcebd0020bcf700

location.search 可以获取到 ?SSO_TICKET=4bce49e8a4394af6858c13005fcebd0020bcf700

点击编辑按钮

前端路由跳转到
https://pre-op.cainiao-inc.com/?SSO_TICKET=4bce49e8a4394af6858c13005fcebd0020bcf700#/sml/createTyo?tyoCode=TYO00946730120135883

携带参数 ?tyoCode=TYO00946730120135883

此时location.search获取不到
只能通过react-router-dom api获取

同时 react-router-dom api获取不到?SSO_TICKET=4bce49e8a4394af6858c13005fcebd0020bcf700
location.search只能获取到 ?SSO_TICKET=4bce49e8a4394af6858c13005fcebd0020bcf700



