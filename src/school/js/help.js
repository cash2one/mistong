$(function(){
	$(document).ready(function(e) {
		$('.dianzan a').bind("click",function(){
			  var left = parseInt($(this).offset().left)+50, top =  parseInt($(this).offset().top)-30, obj=$(this);
			  $(this).append('<div id="zhan"><b>+1<\/b></\div>');
			  $('#zhan').css({'position':'absolute','font-size':'14px','z-index':'1', 'color':'#f3981d','left':left+'px','top':top+'px'}).animate({top:top-10,left:left},'slow',function(){
			   $(this).fadeIn('fast').remove();
			   var Num = parseInt($('.num-num').html());
			   //alert(parseInt($('.num-num').html()))
				   Num++;
				$('.num-num').html(Num);
			  });
			  $('.dianzan a').unbind();
			  return false;
			 }); 
		});	
	$(document).on("click",".chaping a",function(){
		$(".novice-feed").show(0);
		$(".novice-zan").hide(0);
	})
})