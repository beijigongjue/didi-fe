###单例模式
[CNblogs汤姆大叔](http://www.cnblogs.com/TomXu/archive/2012/02/20/2352817.html) [腾讯前端AlloyTeam](http://www.alloyteam.com/2012/10/common-javascript-design-patterns/)

####方法一
	/**
	 * 单例模式
	 */
	var Singleton = (function() {
		var _instance = null;
	
		function init() {
			return {
				pubMethod: function() {
					console.log("pubMethod");
				}
			};
		}
		return {
			instance: function() {
				if (!_instance) {
					_instance = init();
				}
				return _instance;
			}
		};
	})();
	
	//Singleton匿名自执行，执行完之后返回object
	//object内有属性instance，执行instance()返回对象
	//console.log(Object.prototype.toString.call(Singleton, null)); //[object Object]
	var s1 = Singleton.instance(),
		s2 = Singleton.instance();
	console.log(s1 === s2); //true
	
####方法二
	/**
	 * 单例模式
	 */
	var singleton = (function() {
		var _instance = null;
		return function() {
			return _instance || (_instance = {
				getXhr: function() {
					console.log("create an xmlhttprequest.");
				},
				isGet: true
			});
		};
	})();
	
	var s1 = singleton();
	var s2 = singleton();
	console.log(s1 === s2); //true
	console.log(s1.getXhr === s2.getXhr); //true
	console.log(s1 === _instance);//语法错误
	
####单例模式包装函数
	/**
	 * 单例模式－－包装盒
	 * @param  {Function} fn [description]
	 * @return {[type]}      [description]
	 */
	var singleton = function(fn) {
		var _instance = null;
		return function() {
			return _instance || (_instance = fn.apply(this, arguments));
		};
	};
	
	var Obj = singleton(function() {
		return new Object();
	});
	
	
	var x1 = new Obj();
	var x2 = new Obj();
	console.log(x2 === x2);//true
	
	
**PS：注意作用域，否则可能出现单例不单的情况**