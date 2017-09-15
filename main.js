$(document).ready(function() {
	$('.portfolio-tab').on('click', function(){
		var i = $(this).data('nav');
		var $tab = $('.portfolio-tab-content[data-tab = "'+ i +'"]');

		$('.portfolio-tab').removeClass('active');
		$(this).addClass('active');
		$('.portfolio-tab-content').removeClass('active');
		$tab.addClass('active');
	})
});