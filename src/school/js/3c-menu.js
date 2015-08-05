$(document).ready(function(){
	$(function(){
		$('#allCategoryHeaderBox dl').each(function(){
			$(this).hover(
			function(){
					$(this).addClass('curr');
					$(this).find('dd').show();
					//$('#allCategoryHeaderBox .a_navbg').css({'top': ($(this).attr('flag') * 57) + 'px', 'visibility': 'visible'});
				},
				function(){
					$(this).removeClass('curr');
					$(this).find('dd').hide();
					//$('#allCategoryHeaderBox .a_navbg').css({'top':  '0px', 'visibility': 'hidden'});
				}
			);
		});
	});
});