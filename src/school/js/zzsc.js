$(function(){		
	//设计案例切换
	$('.title-list li').click(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
		//var liWidth = $('.title-list li').width();
		//$('.case .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
		//alert('left' : liindex * liWidth + 'px');
	});
	
	$(".selection ul li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		})
	
	//鼠标经过：mouseover
	//鼠标点击：click
	
	/*//设计案例hover效果
	$('.product-wrap .product li').hover(function(){
		$(this).css("border-color","#ff6600");
		$(this).find('p > a').css('color','#ff6600');
	},function(){
		$(this).css("border-color","#fafafa");
		$(this).find('p > a').css('color','#666666');
	});*/
});
	