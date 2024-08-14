// https://docs.sheetjs.com/docs/demos/bigdata/worker/#streaming-write
function SheetJSDragDropWorker() {
    const [__html, setHTML] = React.useState("");
    /* suppress default behavior for drag and drop */
    function suppress(e) { e.stopPropagation(); e.preventDefault(); }
  
    /* this worker is shared between drag-drop and file input element */
    // URL.createObjectURL  回来个 blob:chrome://new-tab-page-third-party/566a8fbd-22b9-4d70-8496-c4110ca837bb 
    // blob:https://hostname/3931512b-22f7-49a1-9add-d728805da443
    const worker = new Worker(URL.createObjectURL(new Blob([`\
  /* load standalone script from CDN */
  importScripts("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js");
  
  /* this callback will run once the main context sends a message */
  self.addEventListener('message', (e) => {
    try {
      /* Read file data */
      const ab = new FileReaderSync().readAsArrayBuffer(e.data.file);
  
      /* Parse file */
      const wb = XLSX.read(ab, {dense: true});
      const ws = wb.Sheets[wb.SheetNames[0]];
  
      /* Generate HTML */
      const html = XLSX.utils.sheet_to_html(ws);
  
      /* Reply with result */
      postMessage({ html });
    } catch(e) {
      /* Pass the error message back */
      postMessage({html: String(e.message || e).bold() });
    }
  }, false);
    `])));
      /* when the worker sends back the HTML, add it to the DOM */
      worker.onmessage = function(e) { setHTML(e.data.html); };
    return ( <>
      <div onDragOver={suppress} onDragEnter={suppress} onDrop={(e) => {
        suppress(e);
        /* post a message with the first File to the worker */
        worker.postMessage({ file: e.dataTransfer.files[0] });
      }}>Drag a file to this DIV to process! (or use the file input)</div>
      <input type="file" onChange={(e) => {
        suppress(e);
        /* post a message with the first File to the worker */
        worker.postMessage({ file: e.target.files[0] });
      }}/>
      <div dangerouslySetInnerHTML={{ __html }}/>
    </> );
  }