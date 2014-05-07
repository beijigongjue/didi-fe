(function(window, undefined) {

	/**
	 * todo：解决命名空间冲突的问题？？
	 */

	var didi = window.didi || {};
	if (didi.demoPlugin) { //存在了demoPlugin对象，则返回
		console.log("已经存在了didi.demoPlugin对象,return!");
		return;
	} else {
		console.log("不存在didi.demoPlugin对象。");
		window.didi = didi;
	}
	// 在window作用域中注册一个didi.demoPlugin时，这句话就不会执行了
	// console.log("不存在didi.demoPlugin对象，接着往下执行。");


	/**
	 * 插件中要用到得变量
	 * @type {[type]}
	 */
	var _demoPlugin = null,
		document = window.document;


	/**
	 * demoPlugin构造函数
	 * @param  {[type]} opts [description]
	 * @return {[type]}      [description]
	 */
	var demoPlugin = function(opts) {

		//创建对象，强制new模式
		if (!(this instanceof demoPlugin)) {
			console.log("强制使用new模式创建对象.");
			_demoPlugin = new demoPlugin(opts);
			return _demoPlugin; //注意体会这个return，当不使用new的时候，会走到前一句，然后再走到 demoPlugin.fn.init,然后再执行return
		} else {
			console.log("将使用new操作符创建对象.");
			new demoPlugin.fn.init(opts);
		}
	};

	/**
	 * 重写原型－－记得将 constructor 指向demoPlugin本身？？否则会怎么样？？？
	 * @type {Function}
	 */
	demoPlugin.fn = demoPlugin.prototype = {
		constructor: demoPlugin,
		init: function(opts) {
			console.log("run init.");
			if (!opts) {
				throw "Need arguments to init this plugin.";
				return;
			}

			/**
			 * 如果想使用DOM对象，则需要添加这句话，或者将插件的js放在document.body后面也可以省略这句话
			 * @param  {[type]} ev [description]
			 * @return {[type]}    [description]
			 */
			window.addEventListener("DOMContentLoaded", function(ev) {
				/**
				 * 插件初始化要做的事情，
				 * @type {[type]}
				 */
				// document.body.innerHTML = "LET ME FUCK YOU!";
				// modules();
			}, false);


			/**
			 * 初始化时需要抽取出来的东东
			 * @return {[type]} [description]
			 */
			function modules() {
				console.log("Modules is running...");
			}
		},
		run: function() {
			console.log("run.");
		},
		stop: function() {
			console.log("stop.");
		}
	};

	/**
	 * 将demoPlugin插件注册刀window.didi.demoPlugin下
	 * @type {[type]}
	 */
	didi.demoPlugin = demoPlugin;

})(window);