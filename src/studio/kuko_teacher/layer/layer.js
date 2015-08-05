$(function(){
	//导入流程
	$(document).on('click','.upload-btn',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'上传答案照片/截图',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".shangchuan").html()
			}
		});
		$(document).on("click",".liu-ok",function(){
			$(".deil").slideDown(0);
			$(".liulan,.liu-ok").slideUp(0);
			$(document).on("click",".shang-ok",function(){
				$(".xubox_shade,.xubox_layer").slideUp(0);
				$(".shangchuan2").slideDown(0);
				$(".shangchuan1").slideUp(0);
				$(document).on("click",".delete-btn",function(){
					$(".shangchuan1").slideDown(0);
					$(".shangchuan2").slideUp(0);
					})
				})
			})        	  
	});
	
	$(document).on('click','.next',function(){
		layer.closeAll()
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'确认提交批改',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".tijiao").html()
			}
		}); 
		
	});
	
	//查看
	$(document).on('click','.next',function(){
		layer.closeAll()
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'确认提交批改',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".tijiao").html()
			}
		}); 
	});
	
	//调查
	$(document).on('click','.sure-work',function(){
		layer.closeAll()
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'确认提交批改',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".tiaocha").html()
			}
		}); 
		
	});
});