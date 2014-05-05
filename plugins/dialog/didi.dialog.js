(function(window, undefined) {
	//todo:防止命名空间didi冲突
	var didi = window.didi || {};

	if (didi.dialog) {
		return didi.dialog;
	} else {
		window.didi = didi; // 注册didi对象到window下
	}

	var document = window.document,
		docElem = document.documentElement,
		body = document.body,
		first_script_in_body = body.getElementsByTagName("script")[0];

	var s_heigth = body.scrollHeight,
		s_width = body.scrollWidth;

	var s_top = docElem.scrollTop,
		s_left = docElem.scrollLeft;

	var c_height = docElem.clientHeight,
		c_width = docElem.clientWidth;

	var d_wall = null,
		d_wrap = null,
		_dialog = null;

	var dialog = function(opts) {
		//这个dialog对象应该使用强制使用new模式
		if (!(this instanceof dialog)) {
			_dialog = new dialog(opts);
			return _dialog; //注意体会这个return，当不使用new的时候，会走到前一句，然后再走到dialog.fn.init,然后再执行return
		} else {
			new dialog.fn.init(opts);
		}
	};

	/**
	 * 判断对象是否为数组
	 * @param  {[type]}  obj [description]
	 * @return {Boolean}     [description]
	 */
	var is_array = function(obj) {
		var res = false;
		if (typeof Array.isArray) {
			res = Array.isArray(obj);
		} else {
			res = (Object.prototype.toString.call(obj) === '[object Array]');
		}
		return res;
	};

	/**
	 * 插入DOM元素
	 * @param  {[type]} newNode [description]
	 * @return {[type]}         [description]
	 */
	var insertDom = function(newNode) {
		if (first_script_in_body) {
			body.insertBefore(newNode, first_script_in_body);
		} else {
			body.appendChild(newNode);
		}
	};


	dialog.fn = dialog.prototype = {
		constructor: dialog,
		init: function(opts) {
			if (!opts) {
				return;
			}

			var div_wall = document.createElement('div');
			div_wall.id = "d_wall";
			div_wall.style.backgroundColor = opts.bgcolor || "black";
			div_wall.style.opacity = opts.opacity || "0.2";
			div_wall.style.filter = opts.opacity ? "alpha(opacity=" + (opts.opacity * 100) + ")" : "alpha(opacity=20)";
			div_wall.className = "didi-dialog-wall";

			var div_wrap = document.createElement("div");
			div_wrap.id = "d_wrap";
			div_wrap.style.width = opts.width || "260px";
			div_wrap.style.height = opts.height || "210px";
			// div_wrap.style.borderTop = (opts.bar === false) ? "none" : "8px solid #ff8a01";
			div_wrap.style.backgroundColor = opts.d_bgcolor || "#e8e7e6";
			div_wrap.style.opacity = opts.d_opacity ? opts.d_opacity : "";
			div_wrap.style.filter = opts.d_opacity ? "alpha(opacity=" + (opts.d_opacity * 100) + ")" : "alpha(opacity=20)";
			if (opts.type === 'loading') {
				div_wrap.style.padding = "0px";
			}
			div_wrap.className = "didi-dialog-wrap";


			var html = '';
			if (opts.bar !== false) {
				html += "<p class='didi-dialog-bar'></p>";
			}
			html += "<div class='didi-dialog-content'>";

			if (opts.dom && opts.dom.nodeType === 1) { //表示的是dom节点
				html += opts.dom.outerHTML;
			} else if (opts.html && typeof opts.html === 'string') { //表示是html
				html += opts.html;

			} else if (opts.domId && opts.domId.length) {
				var dom = document.getElementById(opts.domId);
				if (dom) {
					html += dom.outerHTML;
				}
			} else {}


			if (opts.icon) {
				var url = opts.icon.url,
					w = opts.icon.width || "61px",
					h = opts.icon.height || "61px";
				if (url) {
					var tmpMargin = "";
					if (opts.type === 'loading') {
						tmpMargin = "margin:36px 0px 10px 0";
					} else {
						tmpMargin = "margin:20px 0px 12px 0";
					}
					html += '<p class="didi-dialog-icon" style="' + tmpMargin + '"><span style="display: inline-block; width:' + w + ';height:' + h + '; background:url(' + url + ') no-repeat; background-size:' + w + ' ' + h + ';"></span></p>';
				}
			}
			if (opts.title && is_array(opts.title)) {
				for (var o = 0, len = opts.title.length; o < len; o++) {
					var title = opts.title[o];
					if (title) {
						var color = title.color || "#ff8a01",
							size = title.fontSize || "1.4em";
						html += '<p class="didi-dialog-title" style="color:' + color + ';font-size:' + size + ';">' + title.txt + '</p>';
					}
				}
			}
			if (opts.tips && is_array(opts.tips)) {
				for (var i = 0, l = opts.tips.length; i < l; i++) {
					var tip = opts.tips[i];
					if (tip) {
						var _color = tip.color || "#666666",
							_size = tip.fontSize || "1.0em";
						html += '<p class="didi-dialog-p" style="color:' + _color + ';font-size:' + _size + ';">' + tip.txt + '</p>';
					}
				}
			}
			if (opts.btns && is_array(opts.btns)) {
				html += '<div id="d_dialog_footer" class="didi-dialog-footer">';
				var width = "",
					height = "",
					margin = "";
				if (opts.type === "confirm") {
					width = "45%";
					height = "35px";
					margin = "5%";
				}
				for (var j = 0, _len = opts.btns.length; j < _len; j++) {
					var btn = opts.btns[j];
					if (j !== 0) {
						margin = "0";
					}
					if (btn) {
						html += '<a class="' + btn.klsName + '" id="' + btn.id + '" style="width: ' + width + ';height:' + height + ';line-height:' + height + ';margin-right:' + margin + '">' + btn.txt + '</a>';
					}
				}
				html += '</div>';
			}
			html += "</div>";

			div_wrap.innerHTML = html;

			tmp_d_wall = document.getElementById('d_wall');
			tmp_d_wrap = document.getElementById('d_wrap');

			if (!tmp_d_wall) {
				insertDom(div_wall);
			} else {
				body.removeChild(tmp_d_wall);
				insertDom(div_wall);
			}
			if (!tmp_d_wrap) {
				insertDom(div_wrap);
			} else {
				body.removeChild(tmp_d_wrap);
				insertDom(div_wrap);
			}

			d_wall = document.getElementById('d_wall');
			d_wrap = document.getElementById('d_wrap');

			if (opts.btns && opts.btns.length && is_array(opts.btns)) {
				for (var k = 0, ll = opts.btns.length; k < ll; k++) {
					var _btn = opts.btns[k];
					if (_btn) {
						var btn_id = _btn.id,
							event_type = _btn.eventType || "click",
							callback = _btn.callback,
							ele = document.getElementById(btn_id);

						if (ele && !ele['on' + event_type]) {
							ele.addEventListener(event_type, callback, false);
						} else {}
					}
				}
			}

		},
		_dialogPoint: function() {
			// var s_top = docElem.scrollTop,
			// s_left = docElem.scrollLeft;
			// alert(s_top + " " + s_left); //0,0
			var c_height = docElem.clientHeight,
				c_width = docElem.clientWidth;
			// alert(c_height + " " + c_width);
			var _height = d_wrap.style.height.replace("px", ""),
				_width = d_wrap.style.width.replace("px", "");

			// alert(_height + " " + _width);
			var top = (c_height - _height - 20) / 2,
				left = (c_width - _width) / 2;
			// alert(top + " " + left);
			return {
				top: top,
				left: left
			};
		}
	};

	dialog.fn.show = function() {
		var that = this;
		if (d_wall && d_wrap) {
			var c_height = docElem.clientHeight, //浏览器可见视口的高度和
				c_width = docElem.clientWidth;


			// alert(c_height + " " + c_width);
			d_wall.style.width = c_width + "px";
			d_wall.style.height = c_height + "px";
			d_wall.style.display = "block";

			var p = this._dialogPoint();
			d_wrap.style.top = p.top + "px";
			d_wrap.style.left = p.left + "px";
			d_wrap.style.display = "inline-block";

			window.addEventListener("resize", function() {
				// that.reset.call(that);
			}, false);

			window.addEventListener("scroll", function() {
				// that.reset.call(that);
			}, false);
		}
	};



	dialog.fn.hide = function() {
		if (d_wall && d_wrap) {
			d_wall.style.display = "none";
			d_wrap.style.display = "none";
		}

	};

	dialog.fn.reset = function() {
		var display = d_wall.style.display;
		if (display === "block" && d_wall && d_wrap) {
			var c_height = document.documentElement.clientHeight,
				c_width = document.documentElement.clientWidth;

			d_wall.style.width = c_width + "px";
			d_wall.style.height = c_height + "px";

			var p = this._dialogPoint();
			d_wrap.style.top = p.top + "px";
			d_wrap.style.left = p.left + "px";
		}
	};


	didi.alert = function(text, callback) {
		var config = {
			type: "alert",
			bgcolor: "black",
			tips: [{
				txt: text,
				fontSize: "1.1em"
			}],
			icon: {
				url: "images/i-alert.png",
				width: "61px",
				height: "61px"
			},
			btns: [{
				id: "btn_close",
				txt: "我知道了",
				klsName: "btn-orange",
				eventType: "click",
				callback: function(ev) {
					_dialog.hide();
					if (callback) {
						callback();
					}
				}
			}]
		};
		_dialog = new dialog(config);
		_dialog.show();
	};

	didi.confirm = function(text, confirmCallback, cancelCallback, stop) {
		_dialog = new dialog({
			type: "confirm",
			icon: {
				url: "images/i-alert.png",
				width: "60px",
				height: "60px"
			},
			tips: [{
				txt: text || "确定执行此操作吗？",
				color: "#666666",
				fontSize: "1.04em"
			}],
			btns: [{
				id: "btn-ok",
				txt: "确定",
				klsName: "btn-orange",
				eventType: "click",
				callback: function(ev) {
					_dialog.hide();
					if (typeof confirmCallback === "function") {
						confirmCallback();
					}
				}
			}, {
				id: "btn-cancel",
				txt: "取消",
				klsName: "btn-orange",
				eventType: "click",
				callback: function(ev) {
					_dialog.hide();
					if (typeof cancelCallback === "function") {
						cancelCallback();
					}
				}
			}]
		});
		_dialog.show();
		if (stop === true) {
			return false;
		}

	};

	didi.loading = function(text, time, hideCB, showCB) {
		_dialog = new dialog({
			type: "loading",
			bgcolor: "#ffffff",
			bar: false,
			d_bgcolor: "black",
			d_opacity: "0.7",
			width: "125px",
			height: "125px",
			icon: {
				url: "images/i-loading.gif",
				width: "30px",
				height: "30px"
			},
			tips: [{
				txt: text || "正在加载...",
				color: "#FFFFFF",
				fontSize: "13px"
			}]
		});

		time = !time ? 5000 : time;
		window.setTimeout(function() {
			_dialog.hide();
			if (typeof hideCB === "function") {
				hideCB.call(null, arguments);
			}
		}, time);
		if (typeof showCB === "function") {
			showCB();
		}
		_dialog.show();
	};

	window.didi.dialog = dialog; // 注册dialog到didi命名空间下


})(window);