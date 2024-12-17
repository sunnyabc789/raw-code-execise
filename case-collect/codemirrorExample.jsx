class Test {
    didMount() {
        this.cmLink = document.createElement("link");
        this.cmLink.rel = 'styleSheet'
        this.cmLink.type = 'text/css'
        this.cmLink.href =
          "https://cdn/code/lib/codemirror/6.65.7/codemirror.min.css";
        document.head.appendChild(this.cmLink);
      
        this.cmScript = document.createElement("script");
        this.cmScript.src =
          "https://cdn/code/lib/codemirror/6.65.7/codemirror.min.js";
        document.body.appendChild(this.cmScript);
      
        function loadModule(arr) {
          return arr.map(async (i) => {
            let dom = null;
            if (i.endsWith('.css')) {
              let link = document.createElement("link");
              link.rel = 'styleSheet'
              link.type = 'text/css'
              link.href = i;
              document.head.appendChild(link);
      
              dom = link
            } else if (i.endsWith('.js')) {
              let script = document.createElement("script");
              script.src = i;
              document.head.appendChild(script);
      
              dom = script
            }
      
            return new Promise((res, rej) => {
              dom.onload = () => {
                res(dom)
              }
            })
          })
        }
      
        let modules = [
          "https://cdn/code/lib/codemirror/6.65.7/mode/sql/sql.js",
          "https://cdn/code/lib/codemirror/6.65.7/addon/selection/active-line.min.js",
          'https://cdn/code/lib/codemirror/6.65.7/addon/fold/foldgutter.min.css',
          'https://cdn/code/lib/codemirror/6.65.7/addon/fold/foldgutter.min.js',
          'https://cdn/code/lib/codemirror/6.65.7/addon/fold/brace-fold.min.js',
          'https://cdn/code/lib/codemirror/6.65.7/addon/fold/comment-fold.min.js',
          'https://cdn/code/lib/codemirror/6.65.7/keymap/sublime.min.js',
          'https://cdn/code/lib/codemirror/6.65.7/addon/search/searchcursor.min.js',
          'https://cdn/code/lib/codemirror/6.65.7/addon/hint/show-hint.min.css',
          'https://cdn/code/lib/codemirror/6.65.7/addon/hint/show-hint.min.js',
          'https://cdn/code/lib/codemirror/6.65.7/addon/hint/sql-hint.min.js',
          'https://cdn/code/lib/codemirror/6.65.7/theme/midnight.min.css'
        ]
      
      
        this.cmScript.onload = () => {
          Promise.all(loadModule(modules)).then((res) => {
            this.modules = res;
      
            this.setState({
              codeMirrorHasInit: true
            })
            this.$('node_ocm49wonvg1').reRender()
          })
      
      
        }
      
    }

    willUnmount() {
        window.t = null;
        document.body.removeChild(this.cmScript);
        document.head.removeChild(this.cmLink);
        this.modules.map(i => {
          if (i.tagName === 'LINK') {
            document.head.removeChild(i.src);
          } else if (i.tagName === 'SCRIPT') {
            document.body.removeChild(i.src);
          }
        })
        window.CodeMirror = undefined;
    }

    render() {
        return (
            <CodeEditor
                ctx={this}
                value={''}
                onChange={() => {}}
            />
        )
    }

}

function CodeEditor(props) {
    const { ctx, value, onChange } = props;
  
    useEffect(() => {
      const CodeMirror = window.CodeMirror
      let editor = CodeMirror(document.getElementById("codeEditor"), {
        value: value || '',
        lineNumbers: true,
        mode: 'text/x-mysql',
        matchBrackets: true,
        styleSelectedText: true,
        autoCloseBrackets: true, // 在键入时自动关闭括号和引号
        autoRefresh: true,
        styleActiveLine: true,
        line: true,
        lineWrapping: true,
        theme: 'midnight',
  
  
        keyMap: 'sublime',
        indentUnit: 2,
        tabSize: 2,
  
        hintOptions: { //自定义提示内容
          completeSingle: false,
          // hint: (cmInstance, hintOptions) => {
          //   let cursor = cmInstance.getCursor();
          //   let cursorLine = cmInstance.getLine(cursor.line);
          //   let end = cursor.ch;
          //   let start = end;
  
          //   let token = cmInstance.getTokenAt(cursor)
          //   return {
          //     list: [{
          //       text: "abcd",
          //       displayText: "abcd",
          //       displayInfo: "提示信息1",
          //       render: (element) => {
          //         console.log(element,'element===')
          //             let div = document.createElement("div");
          //             div.innerHTML = 'abc'
          //                   element.appendChild(div);
          //       }
          //     }, {
          //         text: "efg",
          //         displayText: "efg",
          //         displayInfo: "提示信息1",
          //         render: (element) => {
          //           console.log(element, 'element===')
          //           let div = document.createElement("div");
          //           div.innerHTML = 'efg'
          //           element.appendChild(div);
          //         }
          //       }],
          //     // [{
          //     //   text: "abcd",
          //     //   displayText: "abcd",
          //     //   displayInfo: "提示信息1",
          //     //   render: this.hintRender
          //     //       }, {
          //     //   text: "qwer",
          //     //   displayText: "qwer",
          //     //   displayInfo: "提示信息2",
          //     //   render: this.hintRender
          //     // }],
          //     from: {
          //       ch: token.start, line: cursor.line
          //     },
          //     to: {
          //       ch: token.end, line: cursor.line
          //     }
          //   }
          // },
        },
  
      });
  
      editor.setSize('auto', '640px')
  
      editor.on('change', (instance, change) => {
        // 自动补全的时候，也会触发change事件，所有坐下判断，以免死循环，正则是为了不让空格，换行之类的也提示
        // 通过change对象你可以自定义一些规则去判断是否提示
        console.log("instrance====>", instance)
        console.log("change====>", editor.getValue())
        onChange(editor.getValue())
        if (change.origin !== 'complete' && /\w|\./g.test(change.text[0])) {
          instance.showHint()
        }
      })
  
    }, [])
  
    return (
      <div
        id='codeEditor'
      />
    )
  }