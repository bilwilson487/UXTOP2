$(document).ready(function(){
	$('nav a.mobile-menu').click(function(){
		var currentNavHeight = $('nav').height();
		if(currentNavHeight < 5){

		var newNavHeight = $('nav > ul').height() + 25;
		$('nav').animate({'height':newNavHeight+'px'},750);
		}else{
			$('nav').animate({'height':'0px'}, 750, function(){

				$(this).removeAttr('style');

			});
		}
	});
	$(window).resize(function(){
		if( $(this).width() > 625 ){
			$('nav').removeAttr('style');
		}
	});
});