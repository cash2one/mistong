
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
	
	//判断字符串所占的字节数
$(function(){
	function GetCharLength(str){
    	var iLength = 0;  //记录字符的字节数
    	for(var i = 0;i<str.length;i++){  //遍历字符串中的每个字符
    		if(str.charCodeAt(i) >255){  //如果当前字符的编码大于255
    			iLength += 3;    //所占字节数加2
    		}else{
    			iLength += 1;   //否则所占字节数加1
    		}
    	}
    	return iLength;   //返回字符所占字节数
    }
	$('#comments').on('keyup input paste',function(){  //采用几个事件来触发（已增加鼠标粘贴事件）
	    $('#c_l_num').text(parseInt(200-GetCharLength($(this).val())/3));
	    
		 //获取评论框字符长度并添加到ID="num"元素上  
	});

	$(function(){
		$('#s_submit').on('click',function(){
			var _thisText = $("#comments").val();
			if(_thisText == '' || _thisText == '写点什么，评论一下~'){
				$('.c_length').hide();
				$(".c_failue").html("写点东西吧，评论内容不能为空哦。");return false;
			}
			var _textLength = GetCharLength(_thisText)
			if(_textLength > 420){
				$('.c_length').hide();
				$(".c_failue").html("字数超过限制哦。");return false;
			}
			if(_textLength < 3){
				$('.c_length').hide();
				$(".c_failue").html("你的内容太水了，多写点字吧。");return false;
			}
			var _b_id = parseInt($(this).parents('.com_wrap').attr('id'));
			$.ajax({
				type:"POST",
				url:'~',
				data: {baobei_id:_b_id,comment:_thisText},
				dataType: "json",
				success:function(re){
					if(re.s == 1){
						$("#comments").val('');
						$('#c_l_num').html('200');
						if($(".com_list li.no_com").length > 0){
							$(".com_list li.no_com").remove();
							}
						$(".com_list ul").prepend(re.des);
					}else if(re.s == -1){
						$(this).popLogin();
						//alert(re.des);return false;	
					}else{
						$(".c_failue").html(re.des);
					}
				}
			});
			
			//alert(_textLength);return false;
			
		});
	});
	$('.com_wrap').on('focus','#comments',function(){
		$('.c_length').show();
		$(this).siblings('.c_failue').html('');
	});
});	
	$(function(){
		// 专辑详细 删除 点赞
		$('.reply-size a.praise,.reply-floor-zong a.praise').on('click',function(){ //专辑点赞
			var _this = $(this),_thisVal = parseInt(_this.find('em').text()),_artUid = _this.parents('li').attr('uid');
					_this.find('em').text(_thisVal+1);
					_this.off('click').addClass('liked').removeClass('praise');
			
		});
	});
	$(document).on("click",".about span",function(){
		$(".about span").html("已收藏");
		$(".about span").addClass("collected");
		$(".about span").removeClass("collect");
		})
	$(document).on("click",".follow a",function(){
		$(".follow a span").html("已关注老师");
		$(".follow a span").addClass("teacher");
			var Num = parseInt($('.guanzhu').html());
			   //alert(parseInt($('.num-num').html()))
				   Num++;
				$('.guanzhu').html(Num);
			
		})
	
	$(document).ready(function(e) {
		$('.flowers a').bind("click",function(){
			  var left = parseInt($(this).offset().left)+50, top =  parseInt($(this).offset().top)-30, obj=$(this);
			  $(this).append('<div id="zhan"><b>+1<\/b></\div>');
			  $('#zhan').css({'position':'absolute','font-size':'14px','z-index':'1', 'color':'#f3981d','left':left+'px','top':top+'px'}).animate({top:top-10,left:left},'slow',function(){
			   $(this).fadeIn('fast').remove();
			   var Num = parseInt($('.num-num').html());
			   //alert(parseInt($('.num-num').html()))
				   Num++;
				$('.num-num').html(Num);
			  });
			  $('.flowers a').unbind();
			  return false;
			 });
			 
 		});
	$(document).ready(function(e) {
		$('.ridicule a').bind("click",function(){
			  var left = parseInt($(this).offset().left)+50, top =  parseInt($(this).offset().top)-30, obj=$(this);
			  $(this).append('<div id="zhan"><b>+1<\/b></\div>');
			  $('#zhan').css({'position':'absolute','font-size':'14px','z-index':'1', 'color':'#f3981d','left':left+'px','top':top+'px'}).animate({top:top-10,left:left},'slow',function(){
			   $(this).fadeIn('fast').remove();
			   var Num = parseInt($('.num-num').html());
			   //alert(parseInt($('.num-num').html()))
				  // Num--;
				$('.num-num').html(Num);
			  }); 
			  $('.ridicule a').unbind();
			  return false;
			 });
 		});
	
$(function(){	
	$(".evalu").click(function(){
		//console.log($(this).next('.reply-floor-zong'));
		currentShow=$(this).parent().parent().parent().next('.reply-floor-zong');
		$(".reply-floor-zong").hide(0);
		
		
		if(currentShow.hasClass('currentShow')){
			currentShow.removeClass('currentShow');
		}else{
			$('.currentShow').removeClass('currentShow');
			currentShow.addClass('currentShow');
			currentShow.toggle(0);
		}
		
		
       // $(".reply-floor-zong").toggle(0);
    })
	
	$(".huifu").click(function(){
        //$(".reply-floor-input").toggle(0);
		$(".reply-floor-input").hide(0);
		currentShow=$(this).parent().parent().next('.reply-floor-input');
		
		if(currentShow.hasClass('currentShow')){
			currentShow.removeClass('currentShow');
		}else{
			$('.currentShow').removeClass('currentShow');
			currentShow.addClass('currentShow');
			currentShow.toggle(0);
		}
    })
	
	$(".huifu-a").click(function(){
		//console.log($(this).next('.reply-floor-zong'));
		currentShow=$(this).parent().next('.reply-floor-zong');
		$(".reply-floor-zong").hide(0);
		
		
		if(currentShow.hasClass('currentShow')){
			currentShow.removeClass('currentShow');
		}else{
			$('.currentShow').removeClass('currentShow');
			currentShow.addClass('currentShow');
			currentShow.toggle(0);
		}
		
		
       // $(".reply-floor-zong").toggle(0);
    })
	
	$(function(){
		$(".subject").click(function(){
			$(".showbox").show();
			$(".showdiv").css({
				display:"block",height:$(document).height()
			});
			return false;
		});
		$(".showbox .close-title").click(function(){
			$(this).parents(".showbox").hide();
			$(".showdiv").css("display","none");
		});
		$(".add a").click(function(){
			$(".annex").show();
			$(".annexdiv").css({
				display:"block",height:$(document).height()
			});
			$(".showdiv").css("display","none");
			return false;
		});
		$(".annex .close-title,.annex-btn a").click(function(){
			$(this).parents(".annex").hide();
			$(".annexdiv").css("display","none");
			$(".showdiv").css({
				display:"block",height:$(document).height()
			});
		});
		$(".fabiao-btn").click(function(){
			$(".showbox").hide();
			$(".showdiv").hide();
			$(".publish").show();
			setTimeout(function () { $(".publish").hide(); }, 3000);
		})
		$(".reply-me").click(function(){
			$(".huifu-zong").show();
			$(".huifudiv").css({
				display:"block",height:$(document).height()
			});
			return false;
		});
		$(".huifu-zong .close-title").click(function(){
			$(this).parents(".huifu-zong").hide();
			$(".huifudiv").css("display","none");
		});
		$(".huifubtn").click(function(){
			$(".huifu-zong").hide();
			$(".huifudiv").hide();
			$(".publish").show();
			setTimeout(function () { $(".publish").hide(); }, 3000);
		})
	});

	$(document).on("click",".follow-l a",function(){
		$(".follow-l a").html("已关注");
		})
	$(document).on("click",".dianzan a",function(){
		$(".dianzan a").html("赞(1325)");
		$(".dianzan a").addClass("aed");
		})
	$(document).on("click",".collect a",function(){
		$(".collect a").html("已收藏");
		$(".collect").addClass("collected");
		})
	$(document).ready(function() {
		//var height = $(".landlord-right").height();
		//var height1 = $(".reply-right").height();
		//alert(height1);
		//$(".landlord-left").css("height",height);
		//$(".reply-left").css("height",height1);
	});
	
	$(document).on("click",".zan-a",function(){
		$(this).html("已赞");
		})
	$(document).on("click",".guanzhu-a",function(){
		$(this).html("已关注");
		})
})