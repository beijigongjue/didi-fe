/**
 * [func1 description]
 * @param  {[type]}   abc      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
var func1 = function(abc, callback) {
	if (abc === "abc") {
		if (typeof callback === "function") {
			// console.log(this.name);
			console.log(arguments); //arguments是传到func1的参数数组 arguments[1] === callback
			callback.call(this, arguments); //callback();
		}
	}
};


var aa = "aaaaa";
func1("abc", function(aa) {
	// console.log("ssssso");
	// console.log(arguments); //
	// console.log("sssssx");
	console.log("ssss");
});