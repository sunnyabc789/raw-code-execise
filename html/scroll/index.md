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



### 视差滚动
background-attachment

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>视差滚动: Background Attachment</title>
  <style>
    section {
      height: 100vh;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      line-height: 100vh;
      text-align: center;
      font-size: 20vh;
    }
    .g-img1, .g-img2, .g-img3 {
      background-attachment: fixed;
      background-size: cover;
      background-position: center center;
    }
    .g-img1 {
      background-image: url("https://imgs.699pic.com/images/401/627/074.jpg!list1x.v2");
    }
    .g-img2 {
      background-image: url("https://bpic.588ku.com/illus_water_img/23/04/18/56f762096f13f3e6268824d066bf0d6f.jpg");
    }
    .g-img3 {
      background-image: url("https://bizhi1.com/wp-content/uploads/2023/09/Female-Student-Anime-Girl-02-4K-wallpaper-small.jpg");
    }
  </style>
</head>
<body>
  <section class="g-img1">IMG1</section>
  <section class="g-img2">IMG2</section>
  <section class="g-img3">IMG3</section>
</body>
</html>
```

transform-style: preserve-3d;：让子元素保留三维空间视觉效果。
perspective：指定视图深度，控制元素距离视点的视觉缩放。
这种方式通过分层设计（背景、前景等）模拟出深度感效果，配合 JavaScript 可实现更精细的控制。


```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>视差滚动: 3D 深度</title>
  <style>
    .parallax-container {
      position: relative;
      height: 1000px;
      perspective: 1000px; /* 定义视距 */
      overflow: hidden;
    }
    .layer {
      position: absolute;
      width: 100%;
      height: 300px;
    }
    .background {
      background: url("https://img.freepik.com/free-vector/beautiful-watercolor-background_23-2148486848.jpg?semt=ais_hybrid&w=740") no-repeat;
      transform: translateZ(-300px) scale(2); /* 远离视点 */
    }
    .midground {
      background: url("https://img.freepik.com/premium-photo/light-indigo-black-abstract-creative-background-design_851755-368408.jpg?semt=ais_hybrid&w=740") no-repeat;
      transform: translateZ(-150px) scale(1.5);
    }
    .content {
      position: relative;
      z-index: 10; /* 确保内容可见 */
      padding: 2rem;
    }
  </style>
</head>
<body>
  <div class="parallax-container">
    <div class="layer background"></div>
    <div class="layer midground"></div>
    <div class="content">
      <h1>PARALLAX</h1>
    </div>
  </div>
  <script>
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      document.querySelector(".background").style.transform = `translateY(${scrollTop * 0.5}px) translateZ(-300px) scale(2)`;
      document.querySelector(".midground").style.transform = `translateY(${scrollTop * 0.3}px) translateZ(-150px) scale(1.5)`;
    });
  </script>
</body>
</html>

```


animation-timeline: scroll()
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>视差滚动: 动画时间线</title>
  <style>
    .scroll-container {
      height: 1500px; /* 页面高度 */
      position: relative;
    }
    .background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: url("background.jpg") center/cover no-repeat;
      animation: parallaxScroll 1s linear paused;
      animation-timeline: scroll(); /* 使用滚动绑定动画 */
    }
    @keyframes parallaxScroll {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-200px); /* 背景向上滚动 */
      }
    }
    .content {
      position: relative;
      padding: 2rem;
    }
  </style>
</head>
<body>
  <div class="scroll-container">
    <div class="background"></div>
    <div class="content">
      <h1>滚动触发动画</h1>
      <p>这个效果完全由 CSS 驱动，利用 scroll() 作为时间线。</p>
    </div>
  </div>
</body>
</html>

```