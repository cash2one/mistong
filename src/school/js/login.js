//按钮绑定事件帐号密码不为空
	$(function(){
		//验证用户名和密码
		$(document).on("click",".login_but",
			function(e){
				var $parent = $(this).closest(".login-input");
				var name = $parent.find('.name input').val();
				var pwd = $parent.find('.pass input').val();
				name = $.trim(name);
				pwd = $.trim(pwd);
				$parent.find('.error_name').hide();
				$parent.find('.error_pwd').hide();
				if(name == ''){
					$parent.find(".error_name").show();
					return false;
				}
				if(pwd == ''){
					$parent.find('.error_pwd').show();
					return false;
				}
				return true;
				e.stopPropagation();//阻止click事件起泡   
			
		});
		//验证注册的帐号、密码
		$('.login_setPwd').bind({
			click :
			function(e){
				var username = $('#u_username').val();
				var pwd = $('#password').val();
				var repeat_pwd = $('#repeat_pwd').val();
				username = $.trim(username);
				pwd = $.trim(pwd);
				repeat_pwd = $.trim(repeat_pwd);
				$('#error_u_username').hide();
				$('#error_pwd').hide();
				$('#error_repeatPwd').hide();
				if(username == '' || username == '字母，数字的组合6-12位'){
					$('#error_u_username').show();
					return false;
				}
				if(username.length < 6 || username.length > 12){
					$('#error_u_username').html("用户账户请输入6-12位！");
					$('#error_u_username').show();
					return false;
				}
				if(!isDigitAndStrNoLen(username)){
					$('#error_u_username').html("用户账户请输入字母，数字的组合！");
					$('#error_u_username').show();
					return false;
				}
				if(pwd == '' || pwd == '请输出密码'){
					$('#error_pwd').show();
					return false;
				}
				var pwd_len = pwd.length;
				if(pwd_len < 6){
					$('#error_pwd').html("密码强度太弱了，很不安全喔！");
					$('#error_pwd').show();
					return false;
				}
				if(repeat_pwd == '' || repeat_pwd=='请重复输入密码'){
					$('#error_repeatPwd').html("请重复输入密码！");
					$('#error_repeatPwd').show();
					return false;
				}
				//判断两次输入的密码是否相等
				if(pwd != repeat_pwd){
					$('#error_repeatPwd').html("您两次输入的密码不一致喔！");
					$('#error_repeatPwd').show();
					return false;
				}
				return true;
				e.stopPropagation();//阻止click事件起泡   
			}
		});
		
		
		$(document).on("click",".login_setPwd_cc",
			function(e){
				var $parent = $(this).closest(".modify_main");
				var pwd = $parent.find('.password').val();
				var repeat_pwd = $parent.find('.repeat_pwd').val();
				pwd = $.trim(pwd);
				repeat_pwd = $.trim(repeat_pwd);
				$parent.find('.error_pwd').hide();
				$parent.find('.error_repeatPwd').hide();
				if(pwd == '' || pwd == '请输出密码'){
					$parent.find('.error_pwd').show();
					return false;
				}
				var pwd_len = pwd.length;
				if(pwd_len < 6){
					$parent.find('.error_pwd').html("密码强度太弱了，很不安全喔！");
					$parent.find('.error_pwd').show();
					return false;
				}
				if(repeat_pwd == '' || repeat_pwd=='请重复输入密码'){
					$parent.find('.error_repeatPwd').html("请重复输入密码！");
					$parent.find('.error_repeatPwd').show();
					return false;
				}
				//判断两次输入的密码是否相等
				if(pwd != repeat_pwd){
					$parent.find('.error_repeatPwd').html("您两次输入的密码不一致喔！");
					$parent.find('.error_repeatPwd').show();
					return false;
				}
				return true;
				e.stopPropagation();//阻止click事件起泡   
		});
		
		//验证设置的密码强度
		$('#password').bind({
			keyup :
			function(e){
				var pwd = $('#password').val();
				var repeat_pwd = $('#repeat_pwd').val();
				pwd = $.trim(pwd);
				repeat_pwd = $.trim(repeat_pwd);
				$('#error_pwd').hide();
				$('#error_repeatPwd').hide();
				var pwd_len = pwd.length;
				//当没有输入密码时不提示
				if(pwd_len <= 0){
					$('#error_pwd').html("");
					$('#error_pwd').hide();
					return;
				}
				if(pwd_len <= 4){
					$('#error_pwd').html("密码强度太弱了，很不安全喔！");
					$('#error_pwd').show();
					return false;
				}
				if(isDigitAndStr(pwd)){
					$('#error_pwd').html("这密码设的有点意思了！");
					$('#error_pwd').show();
				}
				if(vPass(pwd)){
					$('#error_pwd').html("很好，这样的密码设置的很安全喔！");
					$('#error_pwd').show();
				}
				if(pwd_strong(pwd)){
					$('#error_pwd').html("非常棒，不过您可千万得记住啊！");
					$('#error_pwd').show();
				}
				return true;
				e.stopPropagation();//阻止click事件起泡   
			}
		});
		
		$('#repeat_pwd').bind({
			keyup :
			function(e){
				var repeat_pwd = $('#repeat_pwd').val();
				repeat_pwd = $.trim(repeat_pwd);
				var repeat_pwd_len = repeat_pwd.length;
				//当没有输入密码时不提示
				if(repeat_pwd_len <= 0){
					$('#error_repeatPwd').html("");
					$('#error_repeatPwd').hide();
					return;
				}
				e.stopPropagation();//阻止click事件起泡   
			}
		});
		
		//验证QQ:QQ号码的格式是5到10位的数字
		$('.login_qq').bind({
			click :
				function(e){
				var qq = $("#qq").val();
				qq = $.trim(qq);
				$("#error_qq").hide();
				if(qq == '' || qq == '请输出QQ号'){
					$('#error_qq').show();
					return false;
				}
				if(!validateNumber(qq)){
					$('#error_qq').html("对不起，您输入的QQ号码格式错误。");
					$('#error_qq').show();
				}
				return true;
				e.stopPropagation();//阻止click事件起泡   
			}
		});
		
		//验证手机号码
		$('.login_phone').bind({
			click :
				function(e){
				var phone = $("#phone").val();
				phone = $.trim(phone);
				$("#error_phone").hide();
				if(phone == '' || phone == '请输出手机号码'){
					$('#error_phone').show();
					return false;
				}
				if(!validateMobile(phone)){
					$('#error_phone').html("对不起，您输入的格式错误。");
					$('#error_phone').show();
					return false;
				}
				return true;
				e.stopPropagation();//阻止click事件起泡   
			}
		});
		
		//验证邮箱
		$('.login_email').bind({
			click :
				function(e){
				var email = $("#email").val();
				email = $.trim(email);
				$("#error_email").hide();
				if(email == '' || email == '请输入邮箱'){
					$('#error_email').show();
					return false;
				}
				if(!validateEmail(email)){
					$('#error_email').html("对不起，您输入的邮箱格式错误。");
					$('#error_email').show();
				}
				return true;
				e.stopPropagation();//阻止click事件起泡   
			}
		});
	});// JavaScript Document

	
	function validateEmail(value){
		var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/; 
		return myReg.test(value);
	}
	
	//QQ
	function validateNumber(value){
		var patrn=/^[1-9]\d{4,9}$/;
		return patrn.test(value);
		
	}
	
	//手机
	function validateMobile(value){
		var length = value.length;
		var mobile =  /^(((13[0-9]{1})|159|153)+\d{8})$/;
		return length == 11 && mobile.test(value);
	}
	
	//数字、字母
	function isDigitAndStr(v_pw){
		var len= v_pw.length;
		var patrn_shuzi=/^[0-9]$/; 
		var patrn_zimu=/^[a-z]|[A-Z]$/;
		var flag=0;
		var s = v_pw.split('');
		flag = eachChar(s,patrn_shuzi,flag);
		flag = eachChar(s,patrn_zimu,flag);
		//符合密码必须由数字,字母,特殊符号组成
		if (flag != 2) {
			return false;
		}
		//判断长度
		if(len < 6){
			return true;
		}else{
			return false;
		}
	}

	//数字，字母，特殊符号的组合
	function vPass(v_pw){
		var len= v_pw.length;
		var patrn_shuzi=/^[0-9]$/; 
		var patrn_zimu=/^[a-z]|[A-Z]$/;
		var patrn_teshu=/^[^A-Za-z0-9]$/;
		var flag=0;
		var s = v_pw.split('');
		flag = eachChar(s,patrn_shuzi,flag);
		flag = eachChar(s,patrn_zimu,flag);
		flag = eachChar(s,patrn_teshu,flag);
		//符合密码必须由数字,字母,特殊符号组成
		if (flag != 3) {
			return false;
		}
		//判断长度
		if(len >= 6 && len < 8){
			return true;
		}else{
			return false;
		}
	}
	
	//数字，大写字母，小写字母，特殊符号的组合
	function pwd_strong(v_pw){
		var len= v_pw.length;
		var patrn_shuzi=/^[0-9]$/; 
		var patrn_zimu_daxie=/^[a-z]|[A-Z]$/;
		var patrn_zimu_daxie=/^[A-Z]$/;
		var patrn_zimu_xiaoxie=/^[a-z]$/;
		var patrn_teshu=/^[^A-Za-z0-9]$/;
		var flag=0;
		var s = v_pw.split('');
		flag = eachChar(s,patrn_shuzi,flag);
		flag = eachChar(s,patrn_zimu_daxie,flag);
		flag = eachChar(s,patrn_zimu_xiaoxie,flag);
		flag = eachChar(s,patrn_teshu,flag);
		if (flag != 4) {
			return false;
		}
		//判断长度
		if(len >= 8){
			return true;
		}else{
			return false;
		}
	}
	
	//数字、字母(不判断长度)
	function isDigitAndStrNoLen(v_pw){
		var len= v_pw.length;
		var patrn_shuzi=/^[0-9]$/; 
		var patrn_zimu=/^[a-z]|[A-Z]$/;
		var flag=0;
		var s = v_pw.split('');
		flag = eachChar(s,patrn_shuzi,flag);
		flag = eachChar(s,patrn_zimu,flag);
		//符合密码必须由数字,字母,特殊符号组成
		if (flag != 2) {
			return false;
		}else{
			return true;
		}
	}
	
	//根据正则来循环字符串，满足的情况下标记加1
	function eachChar(value,patrn,flag){
		for(var i=0;i<value.length;i++){
		  if (patrn.exec(value[i])) {
		     flag = flag + 1;
		     break;
		  }
		}
		return flag;
	}
	
	//切换
	function next_page($button,$hide,$show){
		$($button).one("click",function(){
			//alert($(this).text());
			$hide.hide(0);
			$show.show(0);
			return false;
		});
	}
	