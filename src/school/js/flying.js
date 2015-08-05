
//图片飞入
function MoveBox(obj) {
	var jj = $(obj);
	
	if(jj.hasClass("added")){
		return false;
	}
	jj.addClass("added");
	
	//var ss = jj.clone(true).appendTo($(obj).parent());
	var $img = jj.parents('.abb').find('img');
	
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
		$(".tan").show("slow");
	})
	
}

$(function(){
	$(document).on("click","#addAll",function(){
		$(".abb .enter a.dian").each(function(){
			$(this).click();
		})
		$(".tan").show("slow");
	})
})
	
