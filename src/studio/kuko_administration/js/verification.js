//判断字符串所占的字节数
$(function(){
    function GetCharLength(str) {
        var iLength = 0;  //记录字符的字节数
        for (var i = 0; i < str.length; i++) {  //遍历字符串中的每个字符
            if (str.charCodeAt(i) > 255) {  //如果当前字符的编码大于255
                iLength += 3;    //所占字节数加2
            } else {
                iLength += 1;   //否则所占字节数加1
            }
        }
        return iLength;   //返回字符所占字节数
    }
	$('.comments').on('keyup input paste',function(){  //采用几个事件来触发（已增加鼠标粘贴事件）
	
	    $('#c_l_num').text(parseInt(200-GetCharLength($(this).val())/3));
	    
		 //获取评论框字符长度并添加到ID="num"元素上  
	});
	/*$(document).on("click",".same",function(){
			alert(123);
			});*/  
	
		$(document).on('click','.same',function(){
			//alert(1)
			var _thisText = $(".comments").val();
			//alert(_thisText);
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
						$(".comments").val('');
						$('#c_l_num').html('140');
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
	
	$(document).on('focus','.comments',function(){
		$('.c_length').show();
		$(this).siblings('.c_failue').html('');
	});
});	