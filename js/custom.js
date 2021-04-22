/* JS Document */

		function openForm() {
		  document.getElementById("booking").style.display = "block";
		}
		
		function closeForm() {
		  document.getElementById("booking ").style.display = "none";
		}

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var searchActive = false;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initHomeSlider();
	initMenu();
	initSearch();
	initCtaSlider();
	initTestSlider();
	initSearchForm();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.addClass('scrolled');
			}
			else
			{
				header.removeClass('scrolled');
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');

			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				smartSpeed:1200,
				dotsContainer:'main_slider_custom_dots'
			});

			/* Custom nav events */
			if($('.home_slider_prev').length)
			{
				var prev = $('.home_slider_prev');

				prev.on('click', function()
				{
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.home_slider_next').length)
			{
				var next = $('.home_slider_next');

				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}

			/* Custom dots events */
			if($('.home_slider_custom_dot').length)
			{
				$('.home_slider_custom_dot').on('click', function()
				{
					$('.home_slider_custom_dot').removeClass('active');
					$(this).addClass('active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
				});
			}

			/* Change active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.home_slider_custom_dot').removeClass('active');
				$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');
			});	

			// add animate.css class(es) to the elements to be animated
			function setAnimation ( _elem, _InOut )
			{
				// Store all animationend event name in a string.
				// cf animate.css documentation
				var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

				_elem.each ( function ()
				{
					var $elem = $(this);
					var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

					$elem.addClass($animationType).one(animationEndEvent, function ()
					{
						$elem.removeClass($animationType); // remove animate.css Class at the end of the animations
					});
				});
			}

			// Fired before current slide change
			homeSlider.on('change.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-out]");
				setAnimation ($elemsToanim, 'out');
			});

			// Fired after current slide has been changed
			homeSlider.on('changed.owl.carousel', function(event)
			{
				var $currentItem = $('.home_slider_item', homeSlider).eq(event.item.index);
				var $elemsToanim = $currentItem.find("[data-animation-in]");
				setAnimation ($elemsToanim, 'in');
			})
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

	
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	5. Init Search

	*/

	function initSearch()
	{
		if($('.search_tab').length)
		{
			$('.search_tab').on('click', function()
			{
				$('.search_tab').removeClass('active');
				$(this).addClass('active');
				var clickedIndex = $('.search_tab').index(this);

				var panels = $('.search_panel');
				panels.removeClass('active');
				$(panels[clickedIndex]).addClass('active');
			});
		}
	}

	/* 

	6. Init CTA Slider

	*/

	function initCtaSlider()
	{
		if($('.cta_slider').length)
		{
			var ctaSlider = $('.cta_slider');

			ctaSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				nav:false,
				dots:false,
				smartSpeed:1200
			});

			/* Custom nav events */
			if($('.cta_slider_prev').length)
			{
				var prev = $('.cta_slider_prev');

				prev.on('click', function()
				{
					ctaSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.cta_slider_next').length)
			{
				var next = $('.cta_slider_next');

				next.on('click', function()
				{
					ctaSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	7. Init Testimonials Slider

	*/

	function initTestSlider()
	{
		if($('.test_slider').length)
		{
			var testSlider = $('.test_slider');

			testSlider.owlCarousel(
			{
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200,
				margin:30,
				responsive:
				{
					0:{items:1},
					480:{items:1},
					768:{items:2},
					992:{items:3}
				}
			});

			/* Custom nav events */
			if($('.test_slider_prev').length)
			{
				var prev = $('.test_slider_prev');

				prev.on('click', function()
				{
					testSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.test_slider_next').length)
			{
				var next = $('.test_slider_next');

				next.on('click', function()
				{
					testSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	8. Init Search Form

	*/

	function initSearchForm()
	{
		if($('.search_form').length)
		{
			var searchForm = $('.search_form');
			var searchInput = $('.search_content_input');
			var searchButton = $('.content_search');

			searchButton.on('click', function(event)
			{
				event.stopPropagation();

				if(!searchActive)
				{
					searchForm.addClass('active');
					searchActive = true;

					$(document).one('click', function closeForm(e)
					{
						if($(e.target).hasClass('search_content_input'))
						{
							$(document).one('click', closeForm);
						}
						else
						{
							searchForm.removeClass('active');
							searchActive = false;
						}
					});
				}
				else
				{
					searchForm.removeClass('active');
					searchActive = false;
				}
			});	
		}
	}
});



jQuery(document).ready(function($){
	function getCookie(cname) {
	    var name = cname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i <ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}


$('[data-anb-id]').each(function (index, value){
	var anb_id = $(this).data("anb-id");
	var anb_show = true;

	var anb_close_cookie_name = "anb_close_" + anb_id;
	var anb_close_cookie = getCookie(anb_close_cookie_name);
	var anb_close_days = $(this).children().data("anb-close-button");

	if (anb_close_days == 0) {
		if (anb_close_cookie) {
			document.cookie = anb_close_cookie_name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	} else {
		if (anb_close_cookie) {
			$(this).parent().remove();
			var anb_show = false;
		}
	}



	if (anb_show) {
		var anb_delay = $(this).data("anb-delay");
		if (anb_delay > 0) {
			setTimeout(function(){
				$('#anb-id-'+anb_id).removeClass('delay');
			}, anb_delay*1000);
		}
		var anb_show_time = ($(this).data("anb-show-time") + anb_delay)*1000;
		if (anb_show_time > 0) {
			var anb_animation_out_class = $(this).data("anb-animation-out-class");
			var anb_animation_out_speed = $(this).data("anb-animation-out-speed")*1000;
			setTimeout(function(){
				$('#anb-id-'+anb_id).addClass(anb_animation_out_class);
				setTimeout(function(){
					$('#anb-id-'+anb_id).parent().fadeOut( 400, function() {
						$(this).remove();
					});
				}, anb_animation_out_speed);
			}, anb_show_time);
		}
	}

});

$('body').on("click", ".anb-close", function(e){
	var anb_alert = $(this).closest(".anb");
	var anb_id = $(anb_alert).data("anb-id");
	var anb_close_days = $(anb_alert).data("anb-close-button");
	if (anb_close_days > 0) {
		var anb_close_status = true;
		var d = new Date();
		var n = d.setTime(d.getTime() + (anb_close_days*24*60*60*1000));
		document.cookie = "anb_close_" + anb_id + "=" + anb_close_status + "; expires=" + d.toUTCString() ;
	}
	var anb_animation_out_class = $(anb_alert).data("anb-animation-out-class");
	var anb_animation_out_speed = $(anb_alert).data("anb-animation-out-speed")*1000;
	$(anb_alert).addClass(anb_animation_out_class);
	setTimeout(function(){
		$('#anb-id-'+anb_id).parent().fadeOut( 400, function() {
			$(this).remove();
		});
	}, anb_animation_out_speed);
});

});


// function change(){ 
// 	let tgl = document.getElementById("tgl");
// 	let body = document.body;
// 	if (tgl.className == "fas fa-moon"){
// 	  tgl.className = "fas fa-sun";
// 	  body.style.backgroundColor = "#FFF";
// 	  tgl.style.color = "#CC5D03";
// 	}
// 	else{
// 	   tgl.className = "fas fa-moon";
// 	   body.style.backgroundColor = "#2C3545";
// 	   tgl.style.color = "#FFF";
// 	}
//   }