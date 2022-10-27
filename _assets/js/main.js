$(document).ready(function() {
	$('#toggleNav').click(function(e){
		e.preventDefault();
		$('#toggleNav,#nav,#chonk').toggleClass('open');
	});
	$('#nav ul a').click(function(){
		$('#toggleNav,#nav,#chonk').removeClass('open');
	});
	$('.when-loaded').removeClass('when-loaded');
});

var navPosition = $('#toggleNav').offset().left;

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	if (scroll > 100){
		$('#toggleNav').addClass('fixed').css('left',navPosition);
	} else {
		$('#toggleNav').removeClass('fixed').removeAttr('style');
	}
});

$(window).resize(function() {
	navPosition = $('#toggleNav').removeClass('fixed').removeAttr('style').offset().left;
  var scroll = $(window).scrollTop();
	if (scroll > 100){
		$('#toggleNav').addClass('fixed').css('left',navPosition);
	}
});
