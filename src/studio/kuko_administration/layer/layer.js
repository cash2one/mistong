$(function(){
	//导入流程
	$(document).on('click','.tan-btn',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'一键导入本校学生',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".benxiao").html()
			}
		});        	  
	});
	
	$(document).on('click','.fen-tan',function(){
		layer.closeAll()
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'导入信息提示',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".daoru").html()
			}
		}); 
		$(document).on("click",".daoru-sure",function(){
			$(".xubox_shade,.xubox_layer").slideUp(0);
			})	;
	});
	
	//分配账号流程
	$(document).on('click','.fenpei',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'分配账号',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".fen-zhang").html()
			}
		});        	  
	});
	$(document).on('click','.fen-zhang-btn',function(){
		layer.closeAll()
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'分配账号提示',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".fen-tishi").html()
			}
		}); 
		$(document).on("click",".daoru-sure",function(){
			$(".xubox_shade,.xubox_layer").slideUp(0);
			})	;
	});
	
	//导出学生名单
	$(document).on('click','.mingdan',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'导出学生名单',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".dao-mingdan").html()
			}
		});
		$(document).on("click",".daoru-sure",function(){
			$(".xubox_shade,.xubox_layer").slideUp(0);
			});       	  
	});
	
	//新增学生
	$(document).on('click','.add-xue',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'新增学生',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".xuesheng").html()
			}
		}); 
		   	  
	});
	//编辑新增学生
	$(document).on('click','.show',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'编辑新增学生',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			
			page: {
				html: $(".bianji").html()
			}
		}); 

	});
	//判断姓名卡号
	$(document).on("click",".tijiao",function(){
		var name = $(".xubox_main input.name").val();
		var num = $(".xubox_main input.num").val();
		if(/^[\u4E00-\u9FFF]{2,4}$/.test(name),/^[1-9]{1}[\d]{15}$/.test(num))
		{
			//alert("asdasdasd");
			$(".xubox_shade,.xubox_layer").hide();	
			//alert(name+'-------');
			return false;
		}
	});           	 
	//确认提示
	$(document).on('click','.clear',function()
	{
		var jqthis = $(this);
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'确认提示',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			btns: 2,
			btn: ['确定', '暂时取消'],
			yes:function(jqthis){			
				return function(){
					layer.closeAll();
					var jqtr = jqthis.closest("tr");
					jqtr.slideUp(100,function(){jqtr.remove()});
				}
			}(jqthis),
			page: {
				html: $(".queren").html()
			}
		});        	  
	});
	
	$(document).on("click",".clear-more",function () {//全选  
		var jqthis = $(this);
		
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'确认提示',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			btns: 2,
			btn: ['确定', '暂时取消'],
			yes:function(jqthis){			
				return function(){
					layer.closeAll();
					$("#playList :checkbox").each(function(index,element){
					if($(element).attr("id") != "checkall" && $(element).is(":checked")) 
						$(element).closest("tr").hide().remove();
					})
				}
			}(jqthis),
			page: {
				html: $(".queren").html()
			}
		});       
	}); 
	
	//上传微课视频
	$(document).on('click','.upload-ke',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'上传微课视频',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".video").html()
			}
		});  	  
	});
	$(document).on("click",".upload-btn",function(){
		$(".xubox_shade,.xubox_layer").slideUp(0);
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'上传微课视频',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".video-two").html()
			}
		}); 
		$(document).on("click",".no-upload",function(){
			$(".two-main").slideUp();
			})
	});     
	
	//进度
	$(document).on('click','.speed',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'进度',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".jindu").html()
			}
		}); 
		$(document).on("click",".same",function(){
			$(".xubox_shade,.xubox_layer").slideUp(0);
			});       	  
	});
	
	//发布成功
	$(document).on('click','.release',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'发布成功',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".fabu").html()
			}
		}); 
		$(document).on("click",".same",function(){
			$(".xubox_shade,.xubox_layer").slideUp(0);
			});       	  
	});
	//编辑微课信息
	$(document).on('click','.editing',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'编辑微课信息',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				dom: ".editing-new"
			}
			
		}); 
		$(document).on("click",".zanbu",function(){
			$(".xubox_shade,.xubox_layer").slideUp(0);
			});       	  
	});
	//微课播放数据
	$(document).on('click','.play-data',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'微课播放数据',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".shuju").html()
			}
		}); 
		$(document).on("click",".same",function(){
			$(".xubox_shade,.xubox_layer").slideUp(0);
			});       	  
	});
	//升级空间
	$(document).on('click','.space',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'升级空间',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".upgrade").html()
			}
		}); 
		$(document).on("click",".same",function(){
			$(".xubox_shade,.xubox_layer").slideUp(0);
			});       	  
	});
	//容量升级记录
	$(document).on('click','.record',function(){
		$.layer({
			type: 1,   //0-4的选择,（1代表page层）
			area: ['auto', 'auto'],
			//shade: [0],  //不显示遮罩
			border: [0], //不显示边框
			title: [
				'容量升级记录',
				//自定义标题风格，如果不需要，直接title: '标题' 即可	 
			],
			bgcolor: '#fff', //设置层背景色
			page: {
				html: $(".capacity").html()
			}
		}); 
		$(document).on("click",".same",function(){
			$(".xubox_shade,.xubox_layer").slideUp(0);
			});       	  
	});
});