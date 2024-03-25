function exportFile(filename, textContent, type = 'text/csv;charset=utf-8;') {
    if (!_.startsWith(textContent, '\uFEFF')) {
      textContent = '\uFEFF' + textContent
    }
    let blob = new Blob([textContent], { type: type })
    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, filename)
    } else {
      let link = document.createElement('a')
      if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        let url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', filename)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }
  // mine type 
//   pdf: application/pdf


// utf8 -> blob

function utf8ToBinary(utf8String) {
    const encoder = new TextEncoder(); // 创建TextEncoder实例
    const utf8Encoded = encoder.encode(utf8String); // 将字符串转换为UTF-8编码的Uint8Array
    let binaryString = '';
   
    utf8Encoded.forEach(byte => {
      binaryString += byte.toString(2).padStart(8, '0'); // 将每个字节转换为8位二进制字符串，不足8位前面补零
    });
   
    return binaryString;
  }

//   base64 -> blob 

function dataURLtoBlob(dataurl) {
    // 如果没给编码信息 可以不需要这段
	var arr = dataurl.split(","),
		mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]),
		n = bstr.length,
		u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {
		type: mime,
	});
}

let data = 'data:image/png;base64,iVBORw0KG'

