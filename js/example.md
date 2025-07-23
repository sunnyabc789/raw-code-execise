# base64转图片
```
/ 假设这是你的Base64字符串，通常你会从某个地方（如服务器响应）获取这个字符串
const base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...'; // 省略部分Base64内容以示例
 
// 将Base64字符串转换为Blob对象
function dataURLtoBlob(dataurl) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    // try catch atob老浏览器可能没有 atob也可以用于 isValidbase64
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
 
// 创建Blob对象并生成URL
function displayImageFromBase64(base64Str) {
    const blob = dataURLtoBlob(base64Str);
    const url = URL.createObjectURL(blob);
    const imgElement = document.getElementById('imageDisplay');
    imgElement.src = url;
}
 
// 调用函数显示图片
displayImageFromBase64(base64String);
```


# 二进制转base64
```
// blob 
// Blob {size: 38317, type: 'image/png'}

function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            let res = reader.result.split(',')[1];
            res = `data:${blob.type};base64,${res}`
            resolve(res)
        }; // 移除data:开头的部分
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
```