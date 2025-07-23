- 把v2版本的组件全禁用了

解决方法1:
打开chrome://flags/
搜
 Allow legacy extension manifest versions
打开

方法2.

chrome://policy/
打开
显示未设定值的政策
搜
ExtensionManifestV2Availability
点进去
https://chromeenterprise.google/policies/?policy=ExtensionManifestV2Availability
Windows 注册表位置：
Software\Policies\Google\Chrome\ExtensionManifestV2Availability

mac/linux没有注册表
在 /etc/chrome/ 具体哪个不清楚了 建个文件  polices

对应值改成2
修改注册表后 chrome://policy/ 即发生变化 问题解决