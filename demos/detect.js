(function(window) {
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setInterval(callback, 40);
				//40===1000/25 24帧每秒是大脑反应临界值，电影界做过大量测试得出
			}
		);
	}
})(window);