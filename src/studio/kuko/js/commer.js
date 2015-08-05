	$(document).on("click",".play-time a.show",function(e){
		e.stopPropagation()
		currentShow=$(this).next('.up-dowm');
		currentShow.toggle(0);
		$(document).click(function(){
			$('.up-dowm').hide();	
		});
	});
	
	$(document).on("click",".bofang-num",function(){
		$(".bofang-num").addClass("bofang-numed");
		$(".bofang-num").removeClass("bofang-num");
	});	
	$(document).on("click",".bofang-numed",function(){
		$(".bofang-numed").addClass("bofang-num");
		$(".bofang-numed").removeClass("bofang-numed");
	});	
	$(document).on("click",".gengxin-time",function(){
		$(".gengxin-time").addClass("gengxin-timed");
		$(".gengxin-time").removeClass("gengxin-time");
	});	
	$(document).on("click",".gengxin-timed",function(){
		$(".gengxin-timed").addClass("gengxin-time");
		$(".gengxin-timed").removeClass("gengxin-timed");
	});	
	//切换
	function selectTag(showContent,selfObj){
		var tag = document.getElementById("tags").getElementsByTagName("li");
		var taglength = tag.length;
		for(i=0; i<taglength; i++){
			tag[i].className = "";
		}
		selfObj.parentNode.className = "selectTag";
		
		for(i=0; j=document.getElementById("tagContent"+i); i++){
			j.style.display = "none";
		}
		document.getElementById(showContent).style.display = "block";
	}
	//点击弹出
	function show() {
        if (document.getElementById('div2').style.display == 'block')
            document.getElementById('div2').style.display = 'none';
        else
            document.getElementById('div2').style.display = 'block'
    }
	
	$(function(){	
		$(document).on('click','.zhi-lu ul li',function(){
			$(this).addClass('hit').siblings().removeClass('hit');
			$('.panes>div:eq('+$(this).index()+')').show().siblings().hide();	
		})
	})
	
	$(function(){		
		//设计案例切换
		$('.title-list li').click(function(){
			var liindex = $('.title-list li').index(this);
			$(this).addClass('on').siblings().removeClass('on');
			$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();
		});
	});
	
	//下拉
	$(document).ready(function(){
	 $(document).on("click",".select_box",function(event){
	 event.stopPropagation();
	 $(this).find(".option").toggle();
	$(this).parent().siblings().find(".option").hide();
	});
	$(document).on("click",function(event){
	var eo=$(event.target);
	if($(".select_box").is(":visible") && eo.attr("class")!="option" && !eo.parent(".option").length)
	$('.option').hide();
	});
	/*赋值给文本框*/
	$(document).on("click",".option a",function(){
	var value=$(this).text();
	$(this).parent().siblings(".select_txt").text(value);
	$("#select_value").val(value)
	})
	})
	
	$(document).on("click",".recommend a.gengduo",function(){
			$(".more-shiping").show();
			$(".next-shiping").hide();
		})
	$(document).on("click",".recommend a.fanhui",function(){
			$(".next-shiping").show();
			$(".more-shiping").hide();
		})