/*点击叉叉删除*/
$(document).on("click",".edit-title a.close",function(){
	$(this).closest("li").slideUp("slow",function(){
		$(this).closest("ul").find("li .title h4:visible").each(function(date, num) {
				$(num).html("3-" + (date + 1));
			});
		});
	})
	
/*新增题目*/
$(document).on("click",".edit-title a.add",function(){
	var liclone = $(".parts .part ul li").clone();
	$(this).closest("li").before(liclone);
	liclone.show("slow");
	$(this).closest("ul").find("li .title h4:visible").each(function(date, num) {
				$(num).html("3-" + (date + 1));
			});
	})
