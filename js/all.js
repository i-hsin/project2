$(document).ready(function(){
    $('.to-top a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: 0 }, 700);
    });
    $('.choice a').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');

    });  
    
    $('.question-item ').click(function(){
        $(this).find('.ans').slideToggle();
        $(this).find('h1').toggleClass('active');
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('img').attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_minus.svg");
        } else {
            $(this).find('img').attr("src", "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/f70f00178a7f0baa31e9c01634303d8562cfe93a/chatTalker_images/icon_plus.svg");
        }
        
    });    
});