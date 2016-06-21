(function($){
    
    function rwd(){
        var winW = parseInt($(window).width()),
            mob_v = 480,
            pc = 960,
            body = $('body'),
            btn = $('button');
        // var winT = winW + t;
        
        if(winW <= mob_v){
            menu();
            main_slider();
            sub_slider();
        }else if( (winW > mob_v) && (winW <= pc) ){
            menu();
            main_slider();
            sub_slider();
        }else {
            main_slider();
            sub_slider();
            story();
        }
    } // rwd();
    rwd();
    
    var windowWidth = $(window).width();
    $(window).on('resize',function(){
        if(windowWidth != $(window).width()){
            location.reload();  // 새로고침
            rwd();
            return;
        }
    });
     // console.log( rwd(50) );  // 함수를 불러오고 인자값을 넣어줌
})(this.jQuery);