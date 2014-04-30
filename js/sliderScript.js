$(document).ready(function() {
		    init_clock();
		    init_slider();
		    init_controls_slider();
		});

function init_clock(){
	$('.countdownScript').countdown({
		        date: "April 30, 2014 14:00:00"
		    });
}

function init_controls_slider(){
	$('#nav0').click(slide0);
		function slide0(){
			var slider1 = $(".royalSlider").data('royalSlider');
			addActiveClass();
			slider1.goTo(0);
	}
	$('#nav1').click(slide1);
		function slide1(){
			var slider2 = $(".royalSlider").data('royalSlider');
			addActiveClass();
			slider2.goTo(1);
	}
	$('#nav2').click(slide2);
		function slide2(){
			var slider3 = $(".royalSlider").data('royalSlider');
			addActiveClass();
			slider3.goTo(2);
	}
}

function addActiveClass(){
	$('span.navStyle').click(function(){
		$('span.navStyle').removeClass("active");
		$(this).addClass("active");
	});
}
function init_slider(){
	$('.royalSlider').royalSlider({
	    arrowsNav: true,
	    loop: true,
	    keyboardNavEnabled: true,
	    controlsInside: true,
	    imageScaleMode: 'fill',
	    arrowsNavAutoHide: true,
	    autoScaleSlider: false, 
	    autoScaleSliderWidth: 960,     
	    autoScaleSliderHeight: 350,
	    controlNavigation: 'bullets',
	    thumbsFitInViewport: true,
	    navigateByClick: true,
	    startSlideId: 0,
	    autoPlay: true,
	    transitionType:'move',
	    globalCaption: true,
	    deeplinking: {
	      enabled: true,
	      change: false
	    },
	    /*size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images*/
	    imgWidth: 1400,
	    imgHeight: 680
	  });
}
