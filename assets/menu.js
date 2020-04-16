// $(document).ready(function(){
//     $("#nav-desktop").html($("#nav-main").html());
//     $("#nav-trigger").on( "click", function() {
//     	// $(this).fadeOut(300);
//         if ($("nav#nav-desktop ul").hasClass("expanded")) {
//             $("nav#nav-desktop ul.expanded").removeClass("expanded").slideUp(250);
//             $(this).removeClass("open");
//         } else {
//             $("nav#nav-desktop ul").addClass("expanded").slideDown(250);
//             $(this).addClass("open");
//         }
//     });
// });




// turbolinks compatible 
// https://stackoverflow.com/questions/18770517/rails-4-how-to-use-document-ready-with-turbo-links
	// var menuFunction;
	// menuFunction = function() {
	// 	// JS
	// };

// .on click events do not need to reside within the menuFunction
$(document).on('click', '.menu-dropdown-link', function(e){
	e.preventDefault();
	e.stopPropagation();
	$this = $(this);
	href = $this.attr('href');
	sibling = $this.siblings('.menu-dropdown');
	if (sibling.hasClass('menu-dropdown-show')) {
		sibling.removeClass('menu-dropdown-show');
	} else {
		sibling.addClass('menu-dropdown-show');
	}
});
$(document).on('click', '.menu-hover-link', function(e){
	e.preventDefault();
	e.stopPropagation();
	$this = $(this);
	href = $this.attr('href');
	sibling = $this.siblings('.menu-hover-dropdown');
	if (sibling.hasClass('menu-hover-dropdown-show')) {
		sibling.removeClass('menu-hover-dropdown-show');
	} else {
		sibling.addClass('menu-hover-dropdown-show');
	}
});
$(document).on('click', '.menu-location', function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $('#location').offset().top
	}, 500);
});
$(document).on('click', '.instagram-location', function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $('#instagram').offset().top
	}, 500);
});


	// $(document).ready(menuFunction);
	// $(document).on('page:load', menuFunction);
