$(document).ready(function(){
	"use strict";

	// Mobile header nav toggle
	$(".site-header__toggler").on("click" , function() {
		$(".site-nav").slideToggle();
	});

	// Mobile footer menu toggle
	$(".footer__toggle").on("click" , function() {
		if( $(window).width() <= 580 ) {
			$(this).toggleClass("footer__toggle--active");
			$(this).parents(".footer__menu").find("ul").slideToggle();
		}
	});


	// Search trigger for desktop
	$(".trigger-search").on("click" , function() {
		$(".search-form-header--desktop").fadeToggle();
	});

	// Search trigger for mobile
	$(".site-header__search > img").on("click" , function() {
		$(".search-form-header--mobile").fadeToggle();
	});


	// Add black overlay for cart open 
	$("body").append("<div class='bodyoverlay'></div>");

	// Show black overlay on cart click
	$(".cart-link").click(function(){
	  $(".bodyoverlay").fadeIn();
	});

	// Remove black overlay and cart drawer on outside drawer click
	$(document).on("click" , ".bodyoverlay" , function() {
		$(".bodyoverlay").fadeOut();
		$(".js-drawer-close")[0].click();
	});

	// Remove black overlay on drawer close
	$(document).on("click" , ".js-drawer-close" , function() {
		$(".bodyoverlay").fadeOut();
	});

	// Custom quantity button for add value
	$(".add-qty").click(function () {
		if ($(this).prev().val() < 30) {
			$(this).prev().val(+$(this).prev().val() + 1);
		}
	});

	// Custom quantity button for subtract value
	$(".sub-qty").click(function () {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
	});
   $('.drawer__check input[type="checkbox"]').click(function(e) {
    if($(this).is(":checked")){
          var pid = $(this).val();
          jQuery.post('/cart/add.js', {     
              quantity: 1,
              id: pid
             
            },function(data) {
                console.log(data);
                setTimeout(function(){ 
                           $('.site-header__cart')[0].click();
                           $('.site-header__cart')[0].click();
                        }, 700);
            });
         }
    });


	commonMenu();

}) //Ready end


$(window).resize(function() {
	commonMenu();
}); // Resize end


// custom function for header nav and footer menu toggler
function commonMenu() {
	if( $(window).width() > 580 ) {
		$(".footer__toggle").removeClass("footer__toggle--active");
		$(".footer__menu ul").removeAttr("style");
	}
	if( $(window).width() > 1090 ) {
		$(".site-nav").removeAttr("style");
	}
}

