jQuery(document).ready(function($){
    startDate = new Date("1 December 2018 0:00:00 EST");
	endDate = new Date("1 April 2020 0:00:00 EST");
	now = new Date();
	if ((startDate < now) && (endDate > now)) {
		$('.location-address:eq(0) .css-margin-bottom:eq(1)').append('<div style="color: red"><strong>Winter Hours for <br />Sat - Sun: 11am-6pm</div>');
		$('.location-address:eq(1) .css-margin-bottom:eq(1)').append('<br class="hidden-sm"><br class="hidden-sm">')
	}
});