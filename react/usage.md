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