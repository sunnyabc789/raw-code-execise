fork的仓库 拉原来仓库的master 或提交
git remote add upstream 原始仓库的URL


1、设置错误的远程库怎么办？

$ git remote -v
$ git remote set-url origin {{url}}
2、Github Fork 的项目如何更新源项目更新？

$ git remote add upstream {{url}}
# 1
$ git fetch upstream
$ git merge upstream/master
# 或者 2
$ git pull upstream main
3、提交信息写错了怎么办？

$ git commit --amend --only
$ git commit --amend --only -m 'xxx'
4、提交时用了错误的用户名或邮箱？（单次）

$ git commit --amend --no-edit --author "yunqian <yunqian@xxx-inc.com>"
或者

$ git config --global author.name yunqian
$ git config --global author.email yunqian@xxx-inc.com
$ git commit --amend --reset-author --no-edit
5、最后一次提交不想要了？

如果已推送。

$ git reset HEAD^ --hard
$ git push --force-with-lease [remote] [branch]
如果还没推送。

$ git reset --soft HEAD@{1}
6、提交内容需要修改怎么办？比如提交了敏感信息。

修改或删除，

# 编辑后 add
$ git add sensitive_file
# 或删除
$ git rm sensitive_file
# 或只从 git 里删，但保留在本地，记得在 .gitignore 里加上他
$ git rm --cached sensitive_file
然后，

$ git commit --amend --no-edit
$ git push --force-with-lease origin [branch]
7、在上一次提交的基础上增加改动？

$ git commit --amend
8、放弃本地未提交的修改？

# 删除所有 staged 改动
$ git reset --hard HEAD
# 删除所有未 staged 改动
$ git clean -fd
# 加 -x 参数可删除所有 ignored 的文件
$ git clean -fdx
9、不小心删除了分支怎么办？

# 找到被删 branch 的 hash 值
$ git reflog
$ git checkout -b xxx
$ git reset --hard {{hash}}
10、删除分支？

# 删除远程分支
$ git push origin --delete foo
# 删除本地分支
$ git branch -d foo
# 删除没有被合并的分支要用 -D
$ git branch -D foo
# 批量删除分支
$ git branch | grep 'fix/' | xargs git branch -d
11、在错误的分支上做了修改但未提交？

$ git stash
$ git checkout correct_branch
$ git stash pop

git stash list
12、在错误的分支上做了修改同时已提交？（比如错误地提交到了主干）

# 新建分支
$ git branch xxx
# 删除 master 分支的最后一次 commit
$ git reset HEAD~ --hard
# 删除的 commit 会切换到 xxx 分支上
$ git checkout xxx
13、如何撤销一个之前的提交？

# 找到要撤销的 commit hash
$ git log 或 git reflog
# 回滚
$ git revert {{hash}}
14、如何撤销某一个文件的修改

checkout 才是撤销文件的最佳选择？

# 找到要文件修改的前一个 commit hash
$ git log 或 git reflog
# 回滚文件
$ git checkout {{hash}} path/to/file
15、git 被我搞乱了，想要重新来过？

你可以这样，

$ cd ..
$ rm -rf fucking-repo-dir
$ git clone https://github.com/fucking-repo-dir.git
$ cd fucking-repo-dir
也可以这样，

$ git fetch origin
$ git checkout master
$ git reset --hard origin/master
$ git clean -d --force


## git补全方法
本文亲测可用。
老版本macos方法：
1、打开网页，https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash
全选，复制内容。
2、在~/.bash_profile文件(如果没有需要创建)中加入以下内容即可生效

if  \[ -f ~/.git-completion.bash \]; then
    . ~/.git-completion.bash   
fi
3、在~/.git-completion.bash(如果没有需要创建)中加入第一步复制的内容
4、分别执行 source ~/.bash_profile, source ~/.git-completion.bash
5、执行chmod a+x ~/.git-completion.bash
6、重启命令行工具~~~~

新版本macos方法：
因为新版本mac已经使用zsh

新建~/.zsh_fpath/目录

mkdir ~/.zsh_fpath
下载

curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.zsh -OL
拷贝git-completion.zsh
将git源码下的.git-completion.zsh移动到~/.zsh_fpath目录下

mv git-completion.zsh ~/.zsh_fpath/
打开~/.zshrc 文件,输入以下内容

# git 自动补全
zstyle ':completion:*:*:git:*' script ~/.zsh_fpath/.git-completion.zsh
fpath=(~/.zsh_fpath $fpath)
autoload -Uz compinit && compinit
保存退出，重新打开新的terminal即可使用git时使用tab键体验命令补全功能