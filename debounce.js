// Debounce function is used to throttle function calls on scroll or resize, for example.
// Anywhere where calls to the function may be rapid and performance needs to be protected
// Wrap your funtion in a debounce function and it will do the rest

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
