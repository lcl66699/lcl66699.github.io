# git

1. git
   Git 是目前世界上最先进的分布式版本控制系统
   特点：

   1. 分布式版本控制
   2. 非常方便的可以对比不同版本的区别
   3. 多人协作时，可以快速检测是否有代码冲突
   4. 和集中式版本控制 svn 对比，更稳定，更安全

2. 安装

   1. windows 下载安装包,安装(全部下一步)
   2. 因为 Git 是分布式版本控制系统，所以，每个机器都必须自报家门
      - `git config --global user.name "Your Name"`
      - `git config --global user.email "email@example.com"`
   3. 查看 git 配置信息
      - `git config --list`(想修改执行上面操作)
     
::: warning 注意：
1. 如果对配置进行修改，重复上面命令
2. 配置只需要执行一次
:::
## git 命令

   1. `git init` : 初始化 , 生成 git 仓库
   2. `git add` : 把文件添加到仓库(在暂存区)
      - 可以跟的值：file.xx 某一个文件
      -  . / -A 代表所有文件
   3. `git commit -m '提示提交的说明'` : 把文件提交到仓库(提交到版本库)
   4. `git status` : 查看暂存区的工作状态 
   5. `git reset HEAD <file>` : 可以把暂存区的修改撤销掉（unstage），重新放回工作区
   6. `git checkout -- file` : 可以丢弃工作区的修改,(可以把仓库中的文件下载到本地)
   7. `git reset --hard HEAD^` : 版本回退
      - 一个"^"代表一层版本
   8. `git log `: 查看提交记录
      - 运行后鼠标会悬挂，输入字母'q'退出
   9. `git reflog` : 查看所有历史记录
   10. `git rm` : 删除命令

## git分支

   1. 不在源代码上直接修改，可以开启具体相同代码的分支，在分支上进行开发，开发完成后再合并到主分支即可
   2.` git checkout -b name` : 开启一个分支，并切换到这个分支下
      `git branch name `: 开启一个分支
      `git checkout name` : 切换分支
   3. `git branch` : 查看分支 (分支前有\*符号就是当前所在分支)
   4. `git branch -a` : 查看所有分支，包括远程
   5. `git merge` : 分支合并,合并指定分支到当前分支
   6. 分支合并时的冲突
      解决方案：1. 保存其中某一份 1. 全保存
      `git log --graph` 可以看到分支合并图

1. 标签

   1. `git tag vx.x.x` : 创建
   2. `git tag` : 查看标签
   3. `git show <tagname>` : 查看标签详情

## 远程仓库
    
   1. 克隆功能
      `git clone git@gitee.com:gavinzhulei/vue-form-making.git`
   2. 本地已经有clone下来的仓库了，需要关联远程仓库（比如公司的仓库）
      `git remote add origin https://gitee.com/numbrun/vuepress-blog.git`
      - origin 是默认，关联多个仓库的时候可以替换别的名字，比如 company
   3. `git remote -v` 查看远程仓库地址
   4. 推送功能
      本地向远程仓库推送代码： `git push oigin develop`
   5. 拉取功能
      从远程仓库把代码下载到本地 : `git pull company develop`
   6. 标签
      1. `git push origin <tagname>` : 向远程仓库推送 tag
      2. `git push origin --tags` : 一次性推送全部尚未推送到远程的本地标签
      3. `git tag -d name` : 删除本地 tag
      4. `git push origin :refs/tags/name To github.com:michaelliao/learngit.git` :删除远程仓库中的 tag

## git stash

1. `git stash save` 能够将所有未提交的修改（工作区和暂存区）保存至堆栈中，用于后续恢复当前工作目录。
2. `git stash pop` 将当前stash中的内容弹出，并应用到当前分支对应的工作目录上。
3. `git stash list` 所有保存的记录列表
4. `git stash clear` 删除所有保存


## 我的git提交步骤

```git
git clone 自己的仓库地址.git
git remote add company 公司的仓库地址.git

//写完代码
git stash save
git pull company develop
git stash pop

// 有冲突解决冲突，解决完成后
git add . 
git commit -m '提交的信息'
git push origin develop   

//提交到自己的仓库后，在gitlab上操作->与公司仓库进行合并



```