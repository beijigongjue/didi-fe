##前端必备利器（基础篇）

###一、常用工具

	1. Sublime text 2或者3 -- 不解释，推荐使用2。
	2. XMind -- 思维导图，流程图非常方便。
	3. Evernote -- 有理想的程序员都需要一款强大的笔记软件，而Evernote毫无疑问符合你的任何需求，不仅仅工作包括生活。
	4. Markdown Editor -- 有节操的程序员都有一定程度的强迫症都希望写成nice的笔记，Markdown你的不二选择。
	5. Windows下的Fiddle和Mac OS X下的Charles -- 避免成为瞎子。
	6. 有道词典 -- 大中华的工程师都使用吧。
	7. Google Chrome DevTools -- 不二选择
 
###二、Sublime Package
 

####Package Control 

1.Sublime text 2

	import urllib2,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
	
2.Sublime text 3

	import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

[参考地址](https://sublime.wbond.net/installation)
	
####install package
	
	ctrl+shift+p =》 input package name ＝》 enter

####setting and shortcuts

	Browse package ＝》find your package folder ＝》 read
	
*PS：建议有问题找官方文档耐心仔细去查阅，一定会有意想不到的收获*       


###三、Sublime text 插件


####1. 团队协作

---

1. svn [参考地址](http://wbond.net/sublime_packages/svn)
 
	     1.Select individual files and folders when committing, adding, deleting
	     2.Simplified interface for branching and merging
	     3.Syntax highlighting for all commands
	     4.Automatic notification of available remote revisions
	     5.Guidance through conflicts and tree conflicts
	     6.Supports advanced SVN features like properties and externals
	    

2. git [参考地址](https://sublime.wbond.net/packages/Git) [Git简易指南](http://www.bootcss.com/p/git-guide/)
 
	     1.If you just went and installed Package Control, you probably need to restart Sublime Text 2 before doing this next bit.
	     2.Bring up the Command Palette (Command+Shift+p on OS X, Control+Shift+p on Linux/Windows).
	     3.Select “Package Control: Install Package” (it'll take a few seconds)
	     4.Select Git when the list appears.



3. sftp [参考地址](http://wbond.net/sublime_packages/sftp) 
 
		 连接服务器，一步到位，不再需要rm，rz

####2. 美化代码

----

1. Docblockr [参考地址](https://github.com/spadgos/sublime-jsdocs)
 
    键入`/**`按下`Enter`即可
    
2. JsFormat [参考地址](https://github.com/jdc0589/JsFormat)
   
    美化js代码，比如多余的空格，或者不对称的大括号。
    
3. HTMLBeautiful [参考地址](https://github.com/rareyman/HTMLBeautify)
 
    美化HTML
    
4. Tag [参考地址](https://github.com/SublimeText/Tag)
    
    格式化HTML
    
5. Alignment [参考地址](http://wbond.net/sublime_packages/alignment)
    
    对齐代码
    
4. compact_expand_css_command.py [参考地址](http://www.cnblogs.com/meetrice/archive/2013/01/24/2875093.html)
    
    可以选择css是展开还是并为一行 
    
5. csscomb [参考地址](https://github.com/csscomb/csscomb-for-sublime)
    
    检测css的属性，重新排列。
    
6. Trimmer [参考地址](https://github.com/jonlabelle/Trimmer)
    
    删除多余的空格，建议有代码洁癖的人使用。 

####3. 代码检测

---

1. sublime-jslint [参考地址](https://github.com/fbzhong/sublime-jslint) 
   
    检测js代码，执行非常严格，建议有代码洁癖者使用。 
    
2. JSHint [参考地址](https://github.com/uipoet/sublime-jshint)
    
    检测js代码是否符合规范，可自由设置检测项和类型，相比jslint更人性化一些。 
    
3. SublimeLinter [参考地址](https://github.com/SublimeLinter/SublimeLinter-for-ST2)
    
    很多语言都使用这个壳来配置校验的核心。 
    
4. JSONLint [参考地址](https://bitbucket.org/hmml/jsonlint)
5. CSSHint [参考地址](https://github.com/austinhappel/sublime-csslint)
6. HTMLTidy [参考地址](https://github.com/Warin/SublimeTidyHTML)

####4. 语法提示&检测

----

1. SublimeCodeIntel
2. SublimeText-Nodejs
3. DetectSyntax
4. Bracket Highlighter

####5. 压缩打包

---

1. HTML Compressor
2. CSS Compressor
3. JS Compressor
6. JSMinifier
7. YUI Compressor
5. Closure Compressor

####6. 模板片段

---

1. Emmet
2. SublimeTmpl
3. jQuery Package for sublime Text
4. less

####7. 增强工具

---

1. Terminal
2. FileDiffs
3. Markdown Editing
4. ColorPicker
5. GBKEncodingSupport
6. Convert to UTF8
7. Hex to HSL
8. Sidebarenhancements
9. Sublime color highlighter

*liujb整理于2014-04-21知识来源于网络*