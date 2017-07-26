//滚动效果
$.fn.slideplay = function(autotime,onelength,liname){

    var _self = $(this),
        onepage = onelength,
        num = _self.parent().find(".page").length,
        timer;
    _self.append(_self.find(liname).eq(0).clone());//克隆前四个添加到末尾
    var p_num = _self.parent().find(".page");
    var li = _self.find(liname);
    var boundary = (num) * onepage * -1;

    function init(){
        timer = setInterval(function(){
            var left = parseInt(_self.css("marginLeft"));
            left = left-onepage;


            _self.animate({"marginLeft":left+"px"},500,"swing",function(){
                if(left === boundary){
                    _self.css("marginLeft", 0);
                    left = 0;
                }
                var index = Math.abs(left / onepage);
                pagelight(index);
            });
            /*_self.css("marginLeft",left+"px");*/

        },autotime);
    };
    init();

    p_num.on("mouseover",function(){
        var index = parseInt($(this).index());
        var left = index * onepage * -1;
        pagelight(index);
        _self.animate({"marginLeft":left+"px"},500);
        clearInterval(timer);
    });
    p_num.on("mouseout",function(){
        init();
    });
    li.on("mouseover",function(){
        clearInterval(timer);
    });
    li.on("mouseout",function(){
        init();
    })
    function pagelight(index){
        _self.parent().find(".page").removeClass("cur");
        _self.parent().find(".page").eq(index).addClass("cur");
    }
};

//滑动检测代码
$(window).scroll(function(){
    var top = $(this).scrollTop();
    if(top >= 700){
        $(".ad_side").addClass("fixed_top");
        $(".close_box_side").addClass("fixed_close");
    }else{
        $(".ad_side").removeClass("fixed_top");
        $(".close_box_side").removeClass("fixed_close");
    }
})