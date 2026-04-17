$(document).ready(function () {
    /*강의상세*/
    var TabSize = $('.eduInfo div.tab > div').outerHeight();
    var eduIntroPos = $('.eduInfo .introduce').offset().top;
    var eduCntPos = $('.education .detailData').offset().top;
    //교육정보(Tab)
    function eduInfoTabFun() {
        $('.eduInfo div.tab').css('height', TabSize)
    };
    $('.eduInfo div.tab a').click(function () {
        var scrollAniPos = $($(this).attr('href')).offset().top - TabSize;
        $('html, body').animate({ scrollTop: scrollAniPos });
        return false;
    });
    eduInfoTabFun();
    function eduInfoTabPos() {
        if ($(document).scrollTop() > eduIntroPos) {
            var eduIntroLeftPos = $('.eduInfo .introduce').offset().left;
            $('.eduInfo div.tab > div').css('left', eduIntroLeftPos)
        } else {
            $('.eduInfo div.tab > div').css('left', 0)
        }
    }
    eduInfoTabPos();
    $(window).resize(function () {
        eduInfoTabFun();
        eduInfoTabPos();
    });
    //Motion
    $(window).scroll(function () {
        //수강신청 Quick
        if ($(document).scrollTop() > eduCntPos) {
            $('.education .application').stop().animate({ "top": $(document).scrollTop() - eduCntPos + 20 });
        } else {
            $('.education .application').stop().animate({ "top": 0 });
        }
        //과정정보 Tab
        if ($(document).scrollTop() > eduIntroPos) {
            var eduIntroLeftPos = $('.eduInfo .introduce').offset().left;
            $('.eduInfo div.tab > div').addClass('fixed');
            $('.eduInfo div.tab > div').css('left', eduIntroLeftPos)
        } else {
            $('.eduInfo div.tab > div').removeClass('fixed');
            $('.eduInfo div.tab > div').css('left', 0)
        }
    });
});