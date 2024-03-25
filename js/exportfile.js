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