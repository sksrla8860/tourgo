
function menu(){
    var wd = $(window).width();
    
    var m_gnb = $('#gnbBox');
    var m_menu = $('#gnbBox').find('ul');
    
    $(window).on('resize',function(){
        var ht = $(window).height();
        var wd = $(window).width();
        
        $('#wrap').width(wd);
        $('#wrap').height(ht);
        
    });
    
    var $bgBox = $('#gnbBox').find('#bg');
    
    $('.menu_btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('close_btn');
        m_menu.stop().toggleClass('menu_list');
        $bgBox.stop().fadeToggle().toggleClass('bg_op');
    });
};