window.onload = function() {
    // console.log("doc loaded, scripts loaded");
	var h = document.getElementById('menu').scrollHeight; //get menu height
	var prevScrollpos = window.pageYOffset;

	window.onscroll = function() {
	  var currentScrollPos = window.pageYOffset;
	  // on scroll up, position menu at 0
	  if (prevScrollpos > currentScrollPos) {
	    document.getElementById("menu").style.top = "0";
	    //if at top of page, disable menu background
	    if (window.pageYOffset == 0) {
	    	document.getElementById("menu").style.background = "";
	    }else{
	    //if not at top of page, enable menu background
	    document.getElementById("menu").style.background = 
	    "linear-gradient(to right, rgba(9,5,47,0.85) 0%,rgba(49,29,94,0.85) 100%)";
		}
	  }else{
	  	//on scroll down, position menu at minus its height
	    document.getElementById("menu").style.top = "-"+h+"px";
	  }
	  prevScrollpos = currentScrollPos;
	}
};

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" dot_current", "");
  }
  x[slideIndex-1].style.display = "";  
  dots[slideIndex-1].className += " dot_current";
}