function sub_slider(){
    var best = $('#best'),
        best_banner = $('#best').find('ul'),
        banner_li = best_banner.find('li'),
        btn_l = $('.btn_l'),
        btn_r = $('.btn_r'),
        li_width = banner_li.width();
    
    banner_li.last().prependTo(best_banner);
    
    btn_l.on('click', function(){
        var b_li = best_banner.find('li');
        b_li.first().stop().delay(100).animate({'margin-left':li_width}, 700, function(){
            b_li.css({'margin-left':0}).last().prependTo(best_banner);
        });
    });
    
    btn_r.on('click', function(){
        var b_li = best_banner.find('li');
        b_li.first().stop().delay(100).animate({'margin-left': -li_width}, 700, function(){
            b_li.css({'margin-left':0}).first().appendTo(best_banner);
        });
    });
}