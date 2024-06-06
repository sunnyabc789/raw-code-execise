    target?.scrollIntoView({
      behavior: 'smooth',
      block: "start",
      // inline: "nearest",
    });

    有坑

    1. 外部如果有overview: hidden; 元素 内部执行该方法时 外部的scrollTop 也会变化 导致样式异常 且不易定位
    2. 遇到时 自行实现该方法

    const children = Array.from(rootRef.current.children)

    let targetIdx
    const target = children.find((el, idx) => {
      targetIdx = idx
      return el.querySelector('.cn-ui-card-sub-area-card-title-header').innerText === key
    })

    const container = document.querySelector('.scroll-card');

    let scrollTop = 0
    for (let i = 0; i < targetIdx; i ++) {
      scrollTop += target.parentElement.childNodes[i].clientHeight + 12
    }
    container.scrollTop = scrollTop

    滚动的元素 加样式
  scroll-behavior: smoot;

