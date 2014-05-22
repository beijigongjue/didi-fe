##前端必备利器（工具篇）
###1. php+apache+mysql -- Mac篇

---

[参考地址](http://www.guomii.com/posts/30136)

####php

1. mac上本身就有php
2. 查看php的版本 `php -v`

####apache

1. OS X内置apache环境，默认是关闭的，只需要开启即可。
2. `sudo apachectl start` -- start the apache server
3. `sudo apachectl stop` -- stop server
4. `sudo apachectl restart` -- restart server
5. `httpd -v` -- look up the version
6. `/etc/apache2/http.conf` -- config file 
7. `/Library/WebServer/Documents/` -- Website files location
8. 用户级别的站点文件存储位置
		 
	1. `~/Sites` 确保Sites文件夹存储，没有则新建 `mkdir Sites`
	2. `sudo vi /etc/apache2/users/你的用户名.conf` 新建配置文件
	3. 将如下代码写入
 
			<Directory "/Users/username/Sites/">
				Options Indexes MultiViews
				AllowOverride All
				Order allow,deny
				Allow from all
			</Directory>

	4. `sudo chmod 755 /etc/apache2/users/你的用户名.conf` 修改权限
	5. `sudo apachectl restart` 重启服务
	5. `http://localhost/~username/` 访问

####mysql

	sudo port -v install mysql5-server

###jdk

---

###node

---

###ruby

----


###python

---



