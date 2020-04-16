// http://www.appelsiini.net/projects/lazyload
// https://github.com/tuupola/jquery_lazyload
jQuery(document).ready(function($){
    $("img.lazy").lazyload({
	    effect : "fadeIn"
	});
});