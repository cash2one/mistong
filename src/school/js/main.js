$(function() {
	var originalCur = $("#nav_main li.selected");
	$("#nav_main li").mousemove(function(){
		$("#nav_main li").removeClass("selected");	
		$(this).addClass("selected");		
		//$(this).children(".lm").show().animate({left : 15,top : 40}, "fast");
	});
	$("#nav_main li").mouseleave(function(){
		$(this).removeClass("selected");	
		//$(this).children(".lm").stop(true,true).animate({left:0,top:0},100,function(){
			//$(this).hide();
		//});
		originalCur.addClass("selected");
	});
});

	