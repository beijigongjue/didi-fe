**感谢那些给我们引到的先驱者们**

##更改Ubuntu软件源

> ①首先备份软件源 `cp /etc/apt/sources.list /etc/apt/sources.list_bak`   
> ②然后去 [源地址](http://wiki.ubuntu.org.cn/%E6%BA%90%E5%88%97%E8%A1%A8) 找到对应的源   
> ③粘贴地址到`/etc/apt/sources.list`内

##安装中文输入法（被坑了）

以为一定要先安装中文语言包，中文语言包死活安装不上，不知道什么原因，最后找到 [参考地址](http://wiki.ubuntu.org.cn/IBus)
问题得到解决!

##安装wiznote（云笔记）

- 推荐使用通过添加软件源的方式去安装
	 
	> $ sudo add-apt-repository ppa:wiznote-team    
	> $ sudo apt-get update    
	> $ sudo apt-get install wiznote    

- 或者直接下载wiz官方的tar.gz文件解压即可 
 
> tar zxvf filename.tar.gz
[参考地址](http://www.cnblogs.com/eoiioe/archive/2008/09/20/1294681.html)

##安装node（记得要下载SourceCode而不是Binary文件）

如果不是想使用最新版的特性，还是别编译源码了，直接使用`sudo apt-get install nodejs`就行了
若要自己进行编译安装参照下文，记得将g++,curl,libssl-dev等都安装好否则编译会报错。
[参考地址](http://www.cnblogs.com/smallidea/archive/2012/07/19/2599734.html)
PS：nodejs在github上的 [地址](https://github.com/joyent/node)

####安装npm（Node的包管理器跟Ruby的gem其实是一个玩意）

    sudo apt-get install npm

##安装node多版本管理
- `sudo npm install n`
- 去[Github](https://github.com/visionmedia/n)上下载源码编译安装
然后在通过n来安装多个版本的node
n用法简单，详情查看 `n -h`

##安装sublime text

    add-apt-repository ppa:webupd8team/sublime-text-2
    apt-get update
    apt-get install sublime-text

[参考地址](http://www.cnblogs.com/zhangjun516/archive/2013/01/17/2863957.html)


##安装git

      sudo apt-get install git-core即可

##Ubuntu上配置Git与Github

①生成ssh-key [参考地址](http://blog.csdn.net/alex_my/article/details/8741625)    
②使用cat命令查看生成的ssh_key,pub内容并复制添加到Github上面的SSH Key里面    
③测试一下本地git跟github是否连接    
`ssh git@github.com`
会提示输入密码，也就是生成的ssh_key的密码
成功后会出现如下文字就对了
`Hi liujb! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.` [参考地址](http://blog.csdn.net/alex_my/article/details/8741615)

##安装截图软件

`sudo ape-get install scrot`[参考地址](http://blog.csdn.net/supercrsky/article/details/8472800)
使用方法：
> 按住print screen能截整个桌面
> Alt+Print Screen能截活动窗口，但还是不功能不行

##安装星际汉王词典

[参考地址](http://linux.ctocio.com.cn/59/12422559.shtml)     
1）安装软件：    
2）解压下载的文件包：sudo tar -xjvf stardict-oxford-gb-2.4.2.tar.bz2    
3）移动文件：sudo mv stardict-oxford-gb-2.4.2 /usr/share/stardict/dic/     

##文本编辑软件

> nano新手适合   
> vi    
> vim    
> gedit   
> kwrite   

##安装eclipse
[参考地址](http://hi.baidu.com/sanwer/item/e5328bcdf2beaa27a1b50a0f)

##常用apt命令：

    apt-cache search package 搜索包 
    apt-cache show package 获取包的相关信息，如说明、大小、版本等 
    sudo apt-get install package 安装包 
    sudo apt-get install package - - reinstall 重新安装包 
    sudo apt-get -f install 修复安装”-f = –fix-missing” 
    sudo apt-get remove package 删除包 
    sudo apt-get remove package - - purge 删除包，包括删除配置文件等 
    sudo apt-get update 更新源 
    sudo apt-get upgrade 更新已安装的包 
    sudo apt-get dist-upgrade 升级系统 
    sudo apt-get dselect-upgrade 使用 dselect 升级 
    apt-cache depends package 了解使用依赖 
    apt-cache rdepends package 是查看该包被哪些包依赖 
    sudo apt-get build-dep package 安装相关的编译环境 
    apt-get source package 下载该包的源代码 
    sudo apt-get clean && sudo apt-get autoclean 清理无用的包 
    sudo apt-get check 检查是否有损坏的依赖

##清理所有软件缓存（即缓存在/var/cache/apt/archives目录里的deb包 ） 
    sudo apt-get clean

##删除系统不再使用的孤立软件 
    sudo apt-get autorem‍ove

##常用软件推荐
[参考地址](http://ben-lab.com/tech/1765.html)

##安装QQ（总之装不上，用webQQ吧）
[参考地址](http://blog.ubuntusoft.com/ubuntu-qq.html)


##解压tar.gz文件
    tar xzf xx.tar.gz

##查看python版本
    python -V 
[参考](http://gichan.iteye.com/blog/1131224)



