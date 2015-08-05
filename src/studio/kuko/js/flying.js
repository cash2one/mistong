
//图片飞入
function MoveBox(obj) {
	var jj = $(obj);
	
	if(jj.hasClass("added")){
		return false;
	}
	jj.addClass("added");
	
	//var ss = jj.clone(true).appendTo($(obj).parent());
	var $img = jj.parents('dd').find('img');
	
	var divTop = $img.offset().top;
	var divLeft = $img.offset().left;
	
	
	//var targetTop = $(".lan")
	//alert(divTop+","+divLeft);
	
	var ss = $img.clone(true).appendTo($(obj).parent());
	ss.css({
		"position": "fixed",
		"z-index": "500",
		"left": (divLeft) + "px",
		"top": (divTop) + "px"
	});
	
	//alert($("#collectBox").position().top)
	ss.animate({
			"left": $("#collectBox").offset().left,
			"top": $("#collectBox").offset().top,
			"width": "45px",
			"height": "29px"
	},500,function(){ 
		ss.fadeTo(0, 1).hide(0).remove();
		$("#tanone").show("slow");
	})
	
}

$(function(){
	$(document).on("click","#addAllone",function(){
		$(".subject .row .speaker a.btn_two").each(function(){
			$(this).click();
		})
		$("#tanone").show("slow");
	})
})
	
	

//图片飞入
function MoveBoxtwo(obj) {
	var jj = $(obj);
	
	if(jj.hasClass("added")){
		return false;
	}
	jj.addClass("added");
	
	//var ss = jj.clone(true).appendTo($(obj).parent());
	var $img = jj.parents('dd').find('img');
	
	var divTop = $img.offset().top;
	var divLeft = $img.offset().left;
	
	
	//var targetTop = $(".lan")
	//alert(divTop+","+divLeft);
	
	var ss = $img.clone(true).appendTo($(obj).parent());
	ss.css({
		"position": "fixed",
		"z-index": "500",
		"left": (divLeft) + "px",
		"top": (divTop) + "px"
	});
	
	//alert($("#collectBox").position().top)
	ss.animate({
			"left": $("#collectBoxtwo").offset().left,
			"top": $("#collectBoxtwo").offset().top,
			"width": "45px",
			"height": "29px"
	},500,function(){ 
		ss.fadeTo(0, 1).hide(0).remove();
		$("#tantwo").show("slow");
	})

	//购物车数量+1
/*	var a = $("#collectBoxtwo span").text();
	$("#collectBoxtwo span").text(Number(a) + 1);
	$("#tantwo span").text(Number(a) + 1);*/
}

$(function(){
	$(document).on("click","#addAlltwo",function(){
		$(".subject .row-lu .speaker a.btn_two").each(function(){
			$(this).click();
		})
		$("#tantwo").show("slow");
	})
})
