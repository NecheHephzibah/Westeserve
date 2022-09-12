$(document).ready(function() {
    $('.slideout-menu-toggle').on('click', function(event) {
        event.preventDefault();
        //create menu variables
        let slideoutMenu = $('.slideout-menu');
        let slideoutMenuWidth = $('.slide-menu').width();
        //toggle open class
        slideoutMenu.toggleClass("open");
        //slide menu
        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({
                left: "0px"
            });
        }else{
            slideoutMenu.animate({
                left: -slideoutMenuWidth
            }, 250);
        }

        if(slideoutMenu.hasClass("open")){
            $('body').animate({
                'margin-left': slideoutMenuWidth
            });
        }else{
            $('body').animate({
                'margin-left': '0px'
            }, 250);
        }
    })
})