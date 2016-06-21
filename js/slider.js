function slider_01(){
    $('#main_banner').ulslide({
        statusbar: true,
        affect: 'slide',
        axis: 'x',
        navigator: '.ind',
        duration: 400,
        autoslide: 3000,
        nextButton: '.l_btn',
        prevButton: '.r_btn'
    });
}