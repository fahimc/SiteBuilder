(function(window) {
	
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
			window.addEventListener("orientationchange", onResize);
		} else {
			window.attachEvent("onload", onLoad);
		}


	}

	function onLoad() {
		
	}
	function onReady() {
	

	}

	Main();
})(window);
