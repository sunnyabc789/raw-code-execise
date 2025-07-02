```
document.addEventListener('paste', function(event) {
  // 处理粘贴操作
  var clipboardData = event.clipboardData || window.clipboardData; // 跨浏览器兼容性
  var pastedText = clipboardData
    const items = pastedText.items
    for (let i = 0; i < items.length; i ++){
        if (res.type === 'string') {
            items[i].getAsString((res) => {
                console.log(res)
            }) 
        } else if (res.type === 'image') {
            
        }
        
    }
});
```