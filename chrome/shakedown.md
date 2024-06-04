1.查看请求从哪个js文件发出
network -> 选择对应请求 -> initiator -> 滚动到最下方 -> request initiator chain

2.查看限制从哪里发出  例如拷贝限制 数量限制
Sources控制台 -> 最下方需要配合出现console控制台 没有的话 点右下方方框箭头左边的coverage -> 下方控制台切换search tab -> 搜索限制提示语句文案 -> 跳转source控制台限制语句执行代码处 -> 断点 -> 断点处在console控制台修改属性 例如 限制 o > 10  控制台执行 o = 10 


3.覆写文件
sources控制台 -> page等那个tab 找到 override tab -> 打开功能 -> 回到page 右键文件 save for override


4.根据行号列号定位代码
ctrl + G (mac, windows不清楚)
vscode
command + p   filename:rowno:colno

日志中的行号和 直接cdn返回的文件中的行号
可能存在差异
因为日志的环境 可能是个项目环境 对cdn的文件有封装
例如
```
// 底座封装
(function anonymous(sandbox) {
    with (sandbox) {
        ;const undefined = window["undefined"];
        let Array = window["Array"];
        let Object = window["Object"];
        let String = window["String"];
        let Boolean = window["Boolean"];
        let Math = window["Math"];
        let Number = window["Number"];
        let Symbol = window["Symbol"];
        let parseFloat = window["parseFloat"];
        let Float32Array = window["Float32Array"];
        let isNaN = window["isNaN"];
        const Infinity = window["Infinity"];
        let Reflect = window["Reflect"];
        let Float64Array = window["Float64Array"];
        let Function = window["Function"];
        let Map = window["Map"];
        const NaN = window["NaN"];
        let Promise = window["Promise"];
        let Proxy = window["Proxy"];
        let Set = window["Set"];
        let parseInt = window["parseInt"];
        let requestAnimationFrame = window["requestAnimationFrame"];
        // 从这里开始才是文件
        !function(e) {
```