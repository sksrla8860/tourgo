function story(){
    var text = $('.story_text').find('li');
    
    text.on('click', function(){
        var ti = $(this).index(),
            img = $('.story_img').find('li');
        
        img.eq(ti).fadeIn().siblings().css({'display':'none'});
        
        $(this).stop().animate({'color':'#333'}).siblings().css({'color':'#aaa'});
        
    });
}