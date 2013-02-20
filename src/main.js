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
		setContent();
		document.body.className=document.body.className.replace("hide","");
	}
	function setContent()
	{
		if(loadParams.getValue("groom"))
		{
			document.getElementById("groomName").innerHTML=loadParams.getValue("groom");
		}
		if(loadParams.getValue("bride"))
		{
			document.getElementById("brideName").innerHTML=loadParams.getValue("bride");
		}
		if(loadParams.getValue("maintitle"))
		{
			document.getElementById("mainTitle").innerHTML=loadParams.getValue("maintitle");
		}
		if(loadParams.getValue("disablegallery"))
		{
			document.getElementById("galleryButton").parentNode.style.display="none";
		}
	}
	function onResize() {

	}
	window.currentPage="homeContent";
	window.changePage=function(name,target)
	{
		setButton(target);
		document.getElementById(window.currentPage).className = document.getElementById(window.currentPage).className.replace(" selected","");
		document.getElementById(window.currentPage).className +=" disabled"; 
		window.currentPage=name;
		document.getElementById(window.currentPage).className = document.getElementById(window.currentPage).className.replace(" disabled","");
		document.getElementById(window.currentPage).className +=" selected"; 
	}
	window.setButton=function(target)
	{
		console.log(target);
		var button =window.currentPage.replace("Content","");
		button+="Button";
		var b = document.getElementById(button).parentNode;
		b.className = b.className.replace(" selected","");
		target.className = target.className +=" selected"; 
		
	}
	Main();
})(window);
