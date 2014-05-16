##linux\svn\git\mysql等常用命令使用记录

[svn命令详解](http://blog.csdn.net/wklken/article/details/6594956)    
[vi命令详解](http://www.cnblogs.com/88999660/articles/1581524.html)     
[git命令详解](http://blog.csdn.net/ithomer/article/details/7529022)     
[源码安装nginx](http://www.nginx.cn/install)    



###一、svn命令

####基础

----

1. `svn list svn://10.10.10.60/xiaoju/server/static/` -- show list
2. `svn co svn://10.10.10.60/xiaoju/server/trunk/api/v2/views` -- checkout
3. `svn add xx` -- add files or folders
4. `svn import $DIR $URL -m “Something your want to mark.”` -- import local folder to svn and commit to remote
4. `svn rm file` -- remove
5. `svn mv old_file new_file` -- move or rename
5. `svn up` -- update
3. `svn ci  filename -m "checkin note”` -- checkin
4. `svn st -v/-u` -- show status
5. `svn log filename` -- show logs
6. `svn cat -r 10528 home.html ` -- show history 
6. `svn delete filename` -- delete
13. `svn delete –force over-there` -- force to delete


####进阶

----

1. `svn export svn://10.10.10.60/xiaoju/server/trunk/api/v2/views` -- use for release project, without .svn folder
8. `svn diff -r 12302:12304 home.html` -- diff two files
2. `svn diff filename` -- show difference from the working file and the latest version
2. `svn diff get_hb_list.tpl |vim -R -` -- use vim to diff two files
4. `svn diff filename -r1234:2345[|vim -R -]` -- use vim to diff two files
3. `svn up –r 200 file.c` -- 将本地的file.c还原为200版本，【本地是拿下来了，版本库端并没有改变】
1. `svn mkdir newdir`
1. `svn mkdir newdir -m "Making a new dir" svn://10.10.10.60/xiaoju/server/`
20. svn resolve --accept working compressed，svn revert compressed－－解决目录compressed树冲突
22. svn revert filename
22. 冲突的解决方法：
  
		1. 先将.mine文件拷贝到你自己的文件
		2. 先跟test.html跟低版本的比较
		3. 再将test.html跟高版本的比较
		4. 解决完冲突之后再diff一下
		5. 然后设置svn resolved test.html
		6. 然后ci
		
23. ci的时候出现 xx.html is out of date－－解决方法就是先update一下，然后再ci  


###二、Linux命令（常用）


	  1. ls
	  2. ll
	  3. cp
	  4. mv
	  5. scp
	  6. rm
	  7. xx						    
      1. scp  -r  $DIR $DIR －－scp -r 113.11.197.199:~/app/api/v2/views/webapp/home.html . 12505cp -r 
      2. tar xvf filename.tar－－解包（tar是打包不是压缩）
      3. tar cvf filename.tar DIRNAME－－打包
      4. gunzip gilename.gz－－解压gz文件
      5. gzip -d filename.gz－－解压文件
      6. gzip filename－－压缩为filename.gz
      7. tar zxvf filename.tar.gz－－解压.tar.gz并解包
      8. tar zcvf filename.tar.gz DIRNAME－－打包文件夹并压缩为tar.gz
      9. du -sh f-weixin-sug 查看文件夹占用的磁盘空间



###三、Linux命令（不常用）

      1. hostname－－显示主机名
      2. top－－显示进程
      3. tail -f /home/xiaoju/php/logs/v2/didi.log.wf  |grep wxtransaction -A10 —color
      4. curl
      5. wget
      6. 安装wget的方法
    
        1. curl -O http://ftp.gnu.org/gnu/wget/wget-1.13.4.tar.gz
        2. tar -xzvf wget-1.13.4.tar.gz
        3. cd wget-1.13.4
        4. ./configure --with-ssl=openssl
        5. make
        6. sudo make install
        
      7. ifconfig en0
      8. ping ifconfig.me
      9. curl ifconfig.me
    

###四、mysql

      1. desc tablename; -- 查看表结构
      2. show databases; -- 查看所有的数据
      3. show tables; -- 查看表


###五、git命令

####Create a new repository on the command line

    touch README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:liujb/c-study.git
    git push -u origin master
    
####Push an existing repository from the command line

    git remote add origin git@github.com:liujb/c-study.git
    git push -u origin master
    
###OS X下git status中文会显示为编码的解决方案

    git config --global core.quotepath false