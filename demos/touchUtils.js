/**
 * touch的帮助对象
 * @type {Object}
 */
var touchUtils = {
	/**
	 * 计算触摸的点相对元素左上角(0,0)的坐标
	 * @param  {[type]} ele [description]
	 * @return {[type]}     [description]
	 */
	calcPoint: function(ele) {
		var touch = {
			x: null,
			y: null,
			isPressed: false
		};

		/**
		 * 为ele元素绑定touchstart事件
		 * @param  {[type]} ev [description]
		 * @return {[type]}    [description]
		 */
		ele.addEventListener("touchstart", function(ev) {
			touch.isPressed = true;
		}, false);

		/**
		 * 为ele绑定touchend事件
		 * @param  {[type]} ev [description]
		 * @return {[type]}    [description]
		 */
		ele.addEventListener("touchend", function(ev) {
			touch.isPressed = false;
			touch.x = null;
			touch.y = null;
		}, false);

		/**
		 * 为ele绑定touchmove事件
		 * @param  {[type]} ev [description]
		 * @return {[type]}    [description]
		 */
		ele.addEventListener('touchmove', function(ev) {
			var x, y, touchObj = ev.touches[0]; //first touch
			if (touchObj.pageX || touchObj.pageY) {
				x = touchObj.pageX;
				y = touchObj.pageY;
			} else {
				x = touchObj.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				y = touchObj.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}
			x -= ev.target.offsetLeft;
			y -= ev.target.offsetTop;

			touch.x = x;
			touch.y = y;

		}, false);

		return touch;
	}
};