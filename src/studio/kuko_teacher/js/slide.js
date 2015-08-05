$(document).ready(function() {
		var height1 = $(window).height();
		var width1 = $(window).width(); 
		var height2 = height1 - 40;
		var img_width = $(".ck-slide img").width();
		var img_height = $(".ck-slide img").height();
		var img_container_width = width1 - 272;
		var img_cotainer_height = height1
		if(img_width>img_container_width || img_height >img_cotainer_height){
			//图片放小
			if(img_width / img_height > img_container_width/img_cotainer_height){
				$(".ck-slide img").width(img_container_width);
				$(".ck-slide img").height(img_container_width/img_width*img_height)
			}else{
				$(".ck-slide img").height(img_cotainer_height);
				$(".ck-slide img").width(img_cotainer_height/img_height*img_width)
			}
		}
		//图片居中
		$(".ck-slide img").css("margin-top",(img_cotainer_height-img_height)/2);
        $(".ck-slide img").css("margin-left",(img_container_width-img_width)/2);
		
		//var h = (height1-img_height)/2;
		//alert(h);
		$(".edit-title").css("height",height2);
		$(".edit-complete").css("height",height1-1);
		//$(".ck-slide img").css("margin-top",h>0?h:0);
		$(".ck-slide").css("width",img_container_width);
		$(".ck-slide").css("height",height1);
		//alert(height2);
		$('.ck-slide-wrapper li').css("width",img_container_width);
	});


(function($){
    $.fn.ckSlide = function(opts){
        opts = $.extend({}, $.fn.ckSlide.opts, opts);
        this.each(function(){
            var slidewrap = $(this).find('.ck-slide-wrapper');
            var slide = slidewrap.find('li');
            var count = slide.length;
            var that = this;
            var index = 0;
            var time = null;
            $(this).data('opts', opts);
            // next
            $(this).find('.ck-next').on('click', function(){
                if(opts['isAnimate'] == true){
                    return;
                }
                
                var old = index;
                if(index >= count - 1){
                    index = 0;
                }else{
                    index++;
                }
                change.call(that, index, old);
            });
            // prev
            $(this).find('.ck-prev').on('click', function(){
                if(opts['isAnimate'] == true){
                    return;
                }
                
                var old = index;
                if(index <= 0){
                    index = count - 1;
                }else{                                      
                    index--;
                }
                change.call(that, index, old);
            });
            $(this).find('.ck-slidebox li').each(function(cindex){
                $(this).on('click.slidebox', function(){
                    change.call(that, cindex, index);
                    index = cindex;
                });
            });
            
            // focus clean auto play
            /*$(this).on('mouseover', function(){
                if(opts.autoPlay){
                    clearInterval(time);
                }
                $(this).find('.ctrl-slide').css({opacity:0.6});
            });*/
            //  leave
            /*$(this).on('mouseleave', function(){
                if(opts.autoPlay){
                    startAtuoPlay();
                }
                $(this).find('.ctrl-slide').css({opacity:0.15});
            });*/
            startAtuoPlay();
            // auto play
            function startAtuoPlay(){
                if(opts.autoPlay){
                    time  = setInterval(function(){
                        var old = index;
                        if(index >= count - 1){
                            index = 0;
                        }else{
                            index++;
                        }
                        change.call(that, index, old);
                    }, 2000);
                }
            }
            // 修正box
            var box = $(this).find('.ck-slidebox');
            box.css({
                'margin-left':-(box.width() / 2)
            })
            // dir
            switch(opts.dir){
                case "x":
                    opts['width'] = $(this).parent().width();
                    slidewrap.css({
                        'width':count * opts['width']
                    });
                    slide.css({
                        'float':'left',
                        'position':'relative',
						'overflow':'hidden'
                    });
                    slidewrap.wrap('<div class="ck-slide-dir"></div>');
                    slide.show();
                    break;
            }
        });
    };
    function change(show, hide){
        var opts = $(this).data('opts');
        if(opts.dir == 'x'){
            var x = show * opts['width'];
            $(this).find('.ck-slide-wrapper').stop().animate({'margin-left':-x}, function(){opts['isAnimate'] = false;});
            opts['isAnimate'] = true
        }else{
            $(this).find('.ck-slide-wrapper li').eq(hide).stop().animate({opacity:0});
            $(this).find('.ck-slide-wrapper li').eq(show).show().css({opacity:0}).stop().animate({opacity:1});
        }
       
        $(this).find('.ck-slidebox li').removeClass('current');
        $(this).find('.ck-slidebox li').eq(show).addClass('current');
    }
    $.fn.ckSlide.opts = {
        autoPlay: false,
        dir: null,
        isAnimate: false
    };
})(jQuery);