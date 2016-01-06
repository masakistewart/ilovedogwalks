$(document).ready(function() {
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 50) {
			$('.navbar').addClass('scroll')
		} else {
			$('.navbar').removeClass('scroll');
		}
	});
})