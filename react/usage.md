function content({_context}) { 
  const css = `.test {
        color: red;
      }`
  return (
    <>
      <style>
      {css}
      </style>
      <div className="test">我是自定义内容</div>
    </>
  )
}


shouldComponentUpdate 可以用第三个参数实现  antd看到的代码
useMemo(() => {
  return 'abc'
}, [state.xx], (prev, next) => {
  return _.isEqual()
})