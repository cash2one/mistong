;(function(factory) {
    if (typeof define === "function" && define.amd) {
        // AMD模式
        define(["jquery"], factory);
    } else {
        // 全局模式
        factory(jQuery);
    }
}(function($) {
    //闭包限定命名空间
    $.fn.extend({
        /**
         * 插件名称,(尽量简单的描述需要传入的参数)
         * @param  {[type]} options [description]
         * @return {[type]}         [description]
         */
        "highLight": function(options) {
            //默认参数
            var defaluts = {
                foreground: 'red',
                background: 'yellow'
            };
            //检测用户传进来的参数是否合法
            if (!isValid(options)) return this;
            var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
            return this.each(function() { //这里的this 就是 jQuery对象。这里return 为了支持链式调用
                //遍历所有的要高亮的dom,当调用 highLight()插件的是一个集合的时候。
                var $this = $(this); //获取当前dom 的 jQuery对象，这里的this是当前循环的dom
                //根据参数来设置 dom的样式
                $this.css({
                    backgroundColor: opts.background,
                    color: opts.foreground
                });
                //格式化高亮文本
                var markup = $this.html();
                markup = $.fn.highLight.format(markup);
                $this.html(markup);
            });
        }
    });
    //公共的格式化 方法. 默认是加粗，用户可以通过覆盖该方法达到不同的格式化效果。
    $.fn.highLight.format = function(str) {
            return "" + str + "";
        }
        // 
        //私有方法，检测参数是否合法
    function isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }
}));

// $(function() {
//     $("p").highLight({
//         foreground: 'orange',
//         background: '#ccc'
//     }); //调用自定义 高亮插件
// });