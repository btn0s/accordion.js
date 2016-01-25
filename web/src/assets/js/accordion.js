// ACCORDION.JS

var accordion = function() {


	// Toggle menu when clicking the title bar
	$('.title a').click(function(e) {
		e.stopPropagation();
		$('.menu').toggleClass('open');
		$('.content').slideToggle(200);
	});

	// Click tier 1 items
	$('.menu a.toggle').click(function(e) {
		e.stopPropagation();
		//Select child menu and open it
  		$(this).siblings('ul').slideToggle(200);
  		// Change icon (temporarily unavailable)
  		//$(this).children('.fa').toggleClass('fa-plus').toggleClass('fa-minus');
  		//Close all other child menus and reset icons
  		$(this).parent().siblings().children().next('ul').slideUp(200);
	});

	// Click link that does not have another menu as child
	$('.menu li').not(':has(ul)').click(function(e) {
		e.stopPropagation();
		// Close everything
		$('.content ul').slideUp(200);
		$('.content').slideUp(200);
		$('.menu').removeClass('open');
	});

	// Close everything on click outside menu
	$('html').click(function (e) {
		if (!$(event.target).is('#closer')) {
			$('.menu').removeClass('open');
			$('.content ul').slideUp(200);
			$('.content').slideUp(200);
		};
	});
};

$(document).ready(accordion);