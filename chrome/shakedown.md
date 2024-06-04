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