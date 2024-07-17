## 1.划词高亮

  var arr=     {

                    "github":["http://www.github.com","#ff0000"],

            }
   document.body.innerHTML = document.body.innerHTML.replace(/(github)/g,function(){

                var a=arguments[0];
                
                return a.fontcolor(arr[a]?.[1])?.link(arr[a]?.[0]);

            }

        );

或者

var allCount=0;
 
function highlightWord(node,word,realUrl) {
 
      // Iterate into this nodes childNodes
	if (node.hasChildNodes&&allCount<4) {
		var hi_cn;
		for (hi_cn=0;hi_cn<node.childNodes.length;hi_cn++) {
			highlightWord(node.childNodes[hi_cn],word,realUrl);
		}
	}
    // And do this node itself
 
    if (node.nodeType == 3) { // text node
		tempNodeVal = node.nodeValue.toLowerCase();
		tempWordVal = word.toLowerCase();
		if (tempNodeVal.indexOf(tempWordVal) != -1&&allCount<4) {
			pn = node.parentNode;
			if (pn.className != "searchword") {
				// word has not already been highlighted!
				nv = node.nodeValue;
				ni = tempNodeVal.indexOf(tempWordVal);
				// Create a load of replacement nodes
				before = document.createTextNode(nv.substr(0,ni));
				docWordVal = nv.substr(ni,word.length);
				after = document.createTextNode(nv.substr(ni+word.length));
				hiwordtext = document.createTextNode(docWordVal);
				hiword = document.createElement("a");
				hiword.className = "searchword";
				hiword.setAttribute("href",realUrl);
				hiword.appendChild(hiwordtext);
				pn.insertBefore(before,node);
				pn.insertBefore(hiword,node);
				pn.insertBefore(after,node);
				pn.removeChild(node);
				allCount++;
			}
		}
      }
 
}
 
function googleSearchHighlight() {
      if (!document.createElement) return;
      ref = document.referrer;
      if (ref.indexOf('?') == -1) return;
      qs = ref.substr(ref.indexOf('?')+1);
      qsa = qs.split('&');
      for (i=0;i<qsa.length;i++) {
			qsip = qsa[i].split('=');
			if (qsip.length == 1) continue;
			if (qsip[0] == 'q' || qsip[0] == 'p') { // q= for Google, p= for Yahoo
				words = unescape(decodeURIComponent(qsip[1].replace(/\+/g,' '))).split(/\s+/);
				for (w=0;w<words.length;w++) {
 
					 highlightWord(document.getElementsByTagName("body")[0],words[w]);
				}
			}
      }
 
}
 
function testAddlink() {
		var wordList = new Array("用户","命令"); 
		var linkList=new Array("http://www.116tea.cn","http://www.iteye.com","http://www.163.com");
		for (w=0;w<wordList.length;w++) {
			allCount=0;
			highlightWord(document.getElementsByTagName("body")[0],wordList[w],linkList[w]);
		}
} 
window.onload = testAddlink;


// 结合框选
function selectionChanged() {
    var selection = window.getSelection()[0];
    if (selection.type === "Range") {
        console.log("文本被选中:", selection.toString());
        // 在这里处理选中的文本
    }
}
 
// 监听鼠标释放事件
window.addEventListener('mouseup', selectionChanged);

或者


function selectionChanged() {
  var selection = window.getSelection();
  if (selection.type === "Range") {
    const parentNode = selection.anchorNode.parentNode

    window.rr = parentNode
    var rect = parentNode.getBoundingClientRect();
    window.ss = rect
    var x = rect.left;
    var y = rect.top;

    const div = document.createElement('div')
    div.style.position = 'fixed'
    div.innerText = '测试用'
    div.style.left = x + 'px'
    div.style.top = (y - 20) + 'px'
    document.body.appendChild(div)
    window.dd = div

      // 在这里处理选中的文本
  }
}

// 监听鼠标释放事件
window.addEventListener('mouseup', selectionChanged);

## 2.引导提示
import ReactJoyride from 'react-joyride';
```
 <ReactJoyride
    {...otherProps}
    run={run}
    continuous={continuous}
    scrollToFirstStep={scrollToFirstStep}
    disableScrolling
    steps={guideSteps || steps}
    styles={{
    options: {
        zIndex: 10000,
    },
    ...styles,
    }}
/>

<MaskGuide
    callback={handleJoyrideCallback}
    continuous
    run
    scrollToFirstStep
    showProgress
    showSkipButton
    steps={steps}
    styles={{
        options: {
        zIndex: 1000,
        },
    }}
/>

steps = [
      {
        locale,
        // title:'我的工作台',
        disableBeacon: true,
        placement: 'right-end',
        target: '.xx-header',
        content: (
          <div>
            {$i18n.get({
              id: 'HereYo',
              dm: '在这里您',
            })}
          </div>
        ),
      },
      {
        locale,
        // title:'我的工作台',
        disableBeacon: true,
        target: '#first',
        content: (
          <div>
            {$i18n.get({
              id: 'HereY',
              dm: '在这里您',
            })}
          </div>
        ),
      },
    ]
    <>
        <div id='first'>
            <Common />
          </div>
          <DataModule />
        </div>
         <MaskGuide
        callback={handleJoyrideCallback}
        continuous
        run
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={steps}
        styles={{
          options: {
            zIndex: 1000,
          },
        }}
      />
    </>




```