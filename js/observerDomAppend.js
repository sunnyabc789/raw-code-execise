const targetNode = document.documentElement;
 
// 创建一个观察者对象
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // 检查是否有<script>标签被添加
    [...mutation.addedNodes].forEach(node => {
      if (node.tagName === 'SCRIPT') {
        console.log('Script tag inserted:', node.src);
        if (node.src === 'https://cdn/xx.js') {
          node.src = ''
          document.body.removeChild(node)
          console.log('abc===')
        }
      }
    });
  });
});
 
// 观察者的配置（观察属性变化）
const config = { childList: true, subtree: true };
 
// 传入目标节点和观察选项并开始观察
observer.observe(targetNode, config);
