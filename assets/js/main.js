/* Sidebar Menü Kapat/Aç + Ekranı Genişlet */
function sidebarmenu() {
 	var x = document.getElementById("sidebar");
 	if (x.style.display === "none") {
 		localStorage.setItem('mode', 1);
 		x.style.display = "block";
 		var element = document.getElementById("kapsayici");
 		element.classList.remove("fullsize");
 		
 	} else {
 		localStorage.setItem('mode', 2);
 		x.style.display = "none";
 		x.classList.add("kapandi");
 		var element = document.getElementById("kapsayici");
 		element.classList.add("fullsize");
 		
 	}
 }





$(document).ready(function(){



if (localStorage.getItem('mode') == 2) { //kapalı
	document.getElementById("sidebar").style.display = "none";
		var element = document.getElementById("kapsayici");
 		element.classList.add("fullsize");
} else if (localStorage.getItem('mode') == 1) {
document.getElementById("sidebar").style.display = "block";
var element = document.getElementById("kapsayici");
 		element.classList.remove("fullsize");
}else{
localStorage.setItem('mode', 1);
document.getElementById("sidebar").style.display = "block";
var element = document.getElementById("kapsayici");
 		element.classList.remove("fullsize");
}







$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
});




 function getBrowserWindowSize() {
     var myWidth = 0, myHeight = 0;
     if (typeof (window.innerWidth) == 'number') {
       //Non-IE
       myWidth = window.innerWidth;
       myHeight = window.innerHeight;
     }
     else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
       //IE 6+ in 'standards compliant mode'
       myWidth = document.documentElement.clientWidth;
       myHeight = document.documentElement.clientHeight;
     }
     else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
       //IE 4 compatible
       myWidth = document.body.clientWidth;
       myHeight = document.body.clientHeight;
     }
     return { width: myWidth, height: myHeight };
    }
    function RefreshCss() {
      var browserWindowSize = getBrowserWindowSize();
      document.getElementById("video-kay").style.width = (browserWindowSize.width - 300) + "px"; // leftdiv id değerine sahip elementin genişliği
      // document.getElementById("video-kay").style.height = (browserWindowSize.height) + "px"; // rigthdiv id değerine sahip elementin yüksekliği
    }
    window.onload = RefreshCss;
    // Çözünürlük değiştiğinde yeniden ayarla 
    window.onresize = function ()   {
    RefreshCss();
}



});









/*
$(document).ready(function($) {
	var mode = localStorage.getItem('mode');
  if (mode) 
  	$('html').addClass(mode);

  $(".darkmode").click(function() {
    $("html").addClass("darkmode");
    localStorage.setItem('mode', 'darkmode');
  });

  $(".normalmode").click(function() {
    $("html").removeClass("darkmode");
    localStorage.setItem('mode', null);
  });
});
*/


jQuery(function($) {
const darkSwitch = document.getElementById('darkSwitch');
window.addEventListener('load', () => {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener('change', () => {
      resetTheme();
    });
  }
});

function initTheme() {
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  darkSwitch.checked = darkThemeSelected;
  darkThemeSelected ? document.getElementsByTagName( 'html' )[0].setAttribute('theme', 'dark') :
    document.getElementsByTagName( 'html' )[0].removeAttribute('theme');
}

function resetTheme() {
  if (darkSwitch.checked) {
    document.getElementsByTagName( 'html' )[0].setAttribute('theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.getElementsByTagName( 'html' )[0].removeAttribute('theme');
    localStorage.removeItem('darkSwitch');
  }
}






/* IMG TO SVG ÇEVİRİCİ */
jQuery('img.svg').each(function(){
		    var $img = jQuery(this);
		    var imgID = $img.attr('id');
		    var imgClass = $img.attr('class');
		    var imgURL = $img.attr('src');
		    jQuery.get(imgURL, function(data) {
		        var $svg = jQuery(data).find('svg');
		        if(typeof imgID !== 'undefined') {
		            $svg = $svg.attr('id', imgID);
		        }
		        if(typeof imgClass !== 'undefined') {
		            $svg = $svg.attr('class', imgClass+' cevirilmis-svg');
		        }
		        $svg = $svg.removeAttr('xmlns:a');
		        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
		            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
		        }
		        $img.replaceWith($svg);
		    }, 'xml');
		});






});

const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
/*
toggle.addEventListener('change', function() {
  localStorage.setItem('toggleState', toggle.checked);
});
*/
