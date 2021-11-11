	/* ===================================================================
	
	Author       	: Incognito Themes
	Template Name	: Grandy - Multi Purpose HTML5 Template
	Version      	: 1.0
	
	* ================================================================= */
	


	/* ===== LOADER OVERLAY ===== */
	
	 jQuery(function ($) {
	'use strict';
	
	jQuery(document).ready(function ($) {
		mainSlider();
		testimonialSlider();
		clientSlider();
		teamSlider();
		teamSingleSlider();
		blogSlider();
		productItemSlider();
		blogGridSlider();
		portfolioSlider();
		productNavSlider();
		productSlider();
		modelSlider();
		sideMenu();
		fullPage();
		parallaxEffect();
		
		function sideMenu() {
			$('.side-menu').sidemenu();
		}
	
	/* ===== Fixed Footer ===== */
	
	var $window = $(window);
	
	$('<div class="footer-height"></div>').insertAfter('#footer-fixed');
	
	$window.on('resize', function() {
        $('.footer-height').css('height', $('#footer-fixed').height());
      })
      .trigger('resize');
	  
	  if ($('#footer-fixed').length) {
      
    }

    /* ===== COUNTERS ===== */

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
	
	/* ===== COUNTDOWN ===== */
	 
	
	if ($('.countdown').length > 0) {
        $(".countdown").countdown({
            date: "21 dec 2017 12:00:00",
            format: "on"
        });

	}
	
	/* ===== PROGRESS BAR ===== */
	
	$(window).on('scroll', function(){
			progress_bars();
	});
	
	function progress_bars() {
		$(".progress .progress-bar:in-viewport").each(function() {
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).width($(this).attr("data-width") + "%");
			}
			
		});
	}

	

    /* ===== Sliders ===== */
	
	/* ~~~ Hero Half Slider ~~~ */
	function mainSlider(){
	$(".default-slider").slick({
        dots: true,
        infinite: true,
        centerMode: true,
		autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1,
		centerPadding: '0',
		responsive: [
    	{
		  breakpoint: 480,
		  settings: {
			arrows: false,
		  }
		}
  		]
      });
	}
	
	/* ~~~ Testimonials Slider ~~~ */
	function testimonialSlider(){
	$(".testimonial").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		centerPadding: '0'
      });
	}
	
	/* ~~~ Client Slider ~~~ */
	function clientSlider() {
	$(".client-slider").slick({ 
		slidesToShow: 6,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 5000,
		dots:false,
		prevArrow: false,
    	nextArrow: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}
	
	/* ~~~ Team Slider ~~~ */
	function teamSlider() {
	$(".team-slider").slick({ 
		slidesToShow: 4,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 5000,
		dots:true,
		prevArrow: false,
    	nextArrow: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}
	
	function teamSingleSlider(){
	$(".team-slider-single").slick({
        dots: true,
        infinite: true,
        centerMode: true,
		autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
		centerPadding: '0'
      });
	}
	
	/* ~~~ Blog Slider ~~~ */
	function blogSlider() {
	$(".blog-slider").slick({ 
		slidesToShow: 3,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 5000,
		dots:true,
		prevArrow: false,
    	nextArrow: false,
		responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
	}
	/* ~~~ Porfolio Slider ~~~ */
	function portfolioSlider() {
    $(".portfolio-slider").slick({
		dots: true,
        infinite: true,
        centerMode: true,
		autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
		centerPadding: '0'
	});
	}
	
	/* ~~~ Blog Grid Slider ~~~ */
	function blogGridSlider() {
    $(".blog-grid-slider").slick({
		dots: false,
        infinite: true,
        centerMode: true,
		autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
		centerPadding: '0'
	});
	}
	
	/* ~~~ Product Slider ~~~ */
	function productItemSlider() {
	$('.product-item').not('#product-slider').slick({
      autoplay: true,
      arrows: true,
      dots: false,
      swipeToSlide: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="ion-android-arrow-back"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ion-android-arrow-forward"></i></button>',
    });
	}
	
	function productNavSlider() {
    $('#product-slide').slick({
      arrows: false,
      dots: false,
      infinite: true,
      touchMove: false,
      asNavFor: '#product-slider',
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 3,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
            slidesToShow: 3,
          }
        },
      ],
    });
	}
	
	function productSlider() {
    $('#product-slider').slick({
      arrows: true,
      dots: false,
      swipeToSlide: true,
      asNavFor: '#product-slide',
      prevArrow: '<button type="button" class="slick-prev"><i class="ion-android-arrow-back"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="ion-android-arrow-forward"></i></button>',
    });
	}
	 
	/* ~~~ Model Slider ~~~ */
	function modelSlider() {
	$(".model-slider").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		centerPadding: '0'
      });
	}
	/* ===== One page Scroller ===== */
	
	$('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
	
	
	$('.type-it').typeIt({
		speed: 100,
		cursor:true,
		breakLines:false,
		lifeLike:true,
		startDelete:false,
		loop:true,
        strings: ['Hi I am','Flip Oliver','Web Designer', 'And', 'Developer', 'From', 'New York City']
  });
  
  $('.grandy').typeIt({
		speed: 100,
		cursor:true,
		breakLines:false,
		lifeLike:true,
		startDelete:false,
		loop:true,
        strings: ['Grandy','a', 'Creative Agency','Multi Purpose','Theme', 'Based on', 'Bootstrap 3x', '15 Demos', '64 Html Files']
  });
  
  
		
	
    /* ===== Go to Top ===== */

    if ($('#back-to-top').length) {
        var scrollTrigger = 100,
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
        backToTop();
        
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /* ===== Parallax Effect===== */
	
	function parallaxEffect() {
    	$('.parallax-effect').parallax();
	}
	
	function fullPage() {
		$('#fullpage').fullpage({
			sectionSelector: 'section',
			menu: '#menu',
			lockAnchors: true,
			navigation: true,
			navigationPosition: 'right',
			showActiveTooltip: false,
			slidesNavigation: false,
			slidesNavPosition: 'bottom',
			responsiveWidth: 768,
		});
	}

   /* ===== Parallax Stellar ===== */


    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    jQuery(window).stellar({
        horizontalScrolling: false,
        hideDistantElements: true,
        verticalScrolling: !isMobile.any(),
        scrollProperty: 'scroll',
        responsive: true
    });
    
	

	/* ===== Animate Text ===== */
	 
    if ($('.rotate').length > 0) {
        $(".rotate").textrotator({
            animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
            separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
            speed: 3000 // How many milliseconds until the next word show.
        });
    }
	
	/* ===== Search Overlay ===== */
	
	  var wHeight = window.innerHeight;
	  //search bar middle alignment
	  $('#fullscreen-searchform').css('top', wHeight / 2);
	  //reform search bar
	  jQuery(window).resize(function() {
		wHeight = window.innerHeight;
		$('#fullscreen-searchform').css('top', wHeight / 2);
	  });
	  // Search
	  $('#search-button').on('click', function () {
	 	$("div.fullscreen-search-overlay").addClass("fullscreen-search-overlay-show");
	  });
	  $('a.fullscreen-close').on('click', function () {
		$("div.fullscreen-search-overlay").removeClass("fullscreen-search-overlay-show");
	  });
	

    /* ===== Fullscreen Video ===== */

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });


    function scaleVideoContainer() {
        var height = $(window).height() + 5;
       	var unitHeight = parseInt(height, 10) + 'px';
        $('.homepage-hero-module').css('height', unitHeight);

    }

    function initBannerVideoSize(element) {
        $(element).each(function () {
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element) {
        var windowWidth = $(window).width(),
                windowHeight = $(window).height() + 5,
                videoWidth,
                videoHeight;

        $(element).each(function () {
            var videoAspectRatio = $(this).data('height') / $(this).data('width');

            $(this).width(windowWidth);

            if (windowWidth < 1000) {
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    }


    /* ===== SKILLS BAR ===== */
	 
	 $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
			},6000);
	});

    /* ===== CONTACT FORM ===== */
	 
	$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            var url = "assets/php/contact.php";
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = data.class;
                    var messageText = data.message;

                    var alertBox = '<div class="' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    	});
	});

    /* ===== CBP PORTFOLIO ===== */
	 $(window).on('load', function(){
		 
		 var wow = new WOW({
				offset: 100,          
				mobile: false
			  }
			);
			wow.init();
		 
		 /* ~~~ Blog Masonry ~~~ */
		if ($('#blogMasonry').length > 0) {
	
			$('#blogMasonry').masonry({
			   //options
			  itemSelector: '.blog-masonry-item',
			});
		}
	
		 
		$('#grandy-folio').cubeportfolio({
			filters: '#grandy-folio-filter',
			layoutMode: 'grid',
			defaultFilter: '*',
			animationType: 'quicksand',
			gapHorizontal: 0,
			gapVertical: 0,
			gridAdjustment: '',
			mediaQueries: [{
				width: 1500,
				cols: 5
			}, {
				width: 1100,
				cols: 4
			}, {
				width: 800,
				cols: 3
			}, {
				width: 480,
				cols: 2
			}, {
				width: 320,
				cols: 1
			}],
			caption: 'overlayBottomAlong',
			displayType: 'bottomToTop',
			displayTypeSpeed: 100,
		});
		 
		
		
	});

	
	/* === magnificPopup === */

		$('.alpha-lightbox').magnificPopup({
			type: 'image',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			fixedContentPos: false
			// other options
		});
		
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	
	});	
	
	
	/* ===== PRELOADER  ===== */
	
	$(window).on('load', function(){
        
        // Page loader
        $("#loader-overlay").delay(500).fadeOut();
        $(".loader").delay(1000).fadeOut("slow");
    
        
        
        $(window).trigger("scroll");
        $(window).trigger("resize");
        
        if (window.location.hash){
            
            var hash_offset = $(window.location.hash).offset().top;
            $("html, body").animate({
                scrollTop: hash_offset
            });
        }
        
    });
	
	

	/* ===== GOOGLE MAPS  ===== */
	
		/* ~~~ Default Map ~~~ */
		if($("#myMap").length>0){var $latitude=42.008315,$longitude=-88.163807,$map_zoom=12,$marker_url="assets/images/pin.png",style=[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],map_options={center:new google.maps.LatLng($latitude,$longitude),zoom:$map_zoom,panControl:!0,zoomControl:!0,mapTypeControl:!0,streetViewControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:style},map=new google.maps.Map(document.getElementById("myMap"),map_options),marker=new google.maps.Marker({position:new google.maps.LatLng($latitude,$longitude),map:map,visible:!0,icon:$marker_url}),contentString='<div id="mapcontent"><p>Grandy Studio</p></div>',infowindow=new google.maps.InfoWindow({maxWidth:320,content:contentString});google.maps.event.addListener(marker,"click",function(){infowindow.open(map,marker)})}
		
		/* ~~~ Dark Style Map ~~~ */
		if($("#map-style-2").length>0){var $latitude=42.008315,$longitude=-88.163807,$map_zoom=12,$marker_url="assets/images/pin.png",style=[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}],map_options={center:new google.maps.LatLng($latitude,$longitude),zoom:$map_zoom,panControl:!0,zoomControl:!0,mapTypeControl:!0,streetViewControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:style},map=new google.maps.Map(document.getElementById("map-style-2"),map_options),marker=new google.maps.Marker({position:new google.maps.LatLng($latitude,$longitude),map:map,visible:!0,icon:$marker_url}),infowindow=new google.maps.InfoWindow({maxWidth:320,content:contentString});google.maps.event.addListener(marker,"click",function(){infowindow.open(map,marker)})}
		
		/* ~~~ Light Style Map ~~~ */
		if($("#map-style-3").length>0){var $latitude=42.008315,$longitude=-88.163807,$map_zoom=12,$marker_url="assets/images/pin.png",style=[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}],map_options={center:new google.maps.LatLng($latitude,$longitude),zoom:$map_zoom,panControl:!0,zoomControl:!0,mapTypeControl:!0,streetViewControl:!0,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:style},map=new google.maps.Map(document.getElementById("map-style-3"),map_options),marker=new google.maps.Marker({position:new google.maps.LatLng($latitude,$longitude),map:map,visible:!0,icon:$marker_url}),infowindow=new google.maps.InfoWindow({maxWidth:320,content:contentString});google.maps.event.addListener(marker,"click",function(){infowindow.open(map,marker)})}
	

	});

/*End Jquery*/
