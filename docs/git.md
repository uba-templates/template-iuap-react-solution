# git 常用命令

查看git状态

```
git status
```

快照的内容写入缓存区

```
git add 文件路径或者 git add . 提交全部文件
```

 将缓存区内容添加到仓库中

```
git commit -m '备注'
```

取消已缓存区的内容

```
git reset HEAD
```

查看版本号

```
git onreset --hard
```

删除文件

```
git rm readme.md
```

配置别名方便使用

```
$ git config --global alias.st status
$ git config --global alias.ci commit
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

## 分支管理

创建分支

```
git branch mybranch
```

切换分支

```
git checkout mybranch
```

创建分支并且切换

```
git checkout -b mybranch
```

删除分支

```
git branch -d mybranch
```

把分支push到远端仓库

```
git push origin mybranch
```

更新本地仓库至最新改动

```
git pull origin master
```

也可以使用fetch 和rebase 来进行分支更新

```
git fetch origin 或者git rebase origin/master
```

撤销和修改 版本回退

```
git checkout --filename
```

git log 拿到版本号

```
git reset --hard 版本号回退到制定版本
```

