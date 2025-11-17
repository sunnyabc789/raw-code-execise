删所有node_modules

find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

find . -name '*.jpgs' -type f -print -exec rm -rf {} \;
(1) "."    表示从当前目录开始递归查找

(2) “ -name '*.exe' "根据名称来查找，要查找所有以.exe结尾的文件夹或者文件

(3) " -type f "查找的类型为文件

(4) "-print" 输出查找的文件目录名

(5) 最主要的是是-exec了，-exec选项后边跟着一个所要执行的命令，表示将find出来的文件或目录执行该命令。

6.-prune是一个actions，它的作用就是不进入目录(即target是目录时，不进入该目录，因此常常与-path一起出现)，它本身返回true。如果同时使用-depth选项，那么-prune将被find命令忽略。


exec选项后面跟随着所要执行的命令或脚本，然后是一对儿{}，一个空格和一个\，最后是一个分号。

find . -name ".git" -type d -prune -exec rm -rf '{}' +  这个目录也大

 du -shc .[!.]* 看大小
  du -shc *



删目录下指定文件
TARGET_DIR="test"
find "$TARGET_DIR" -name "*.md" -type f -delete



