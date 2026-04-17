$(document).ready(function () {
    //상세(추천강의-영상)
    $('.detailsData .video .recMovie').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 180,
        itemMargin: 10,
        slideshow: false,
        minItems: 2,
        controlNav: false,
        directionNav: false,
        maxItems: 4,
        start: function () {
            if ($('.detailsData .video .recMovie li').length <= 4) {
                $('.detailsData .video a.ctrl.prev').hide();
                $('.detailsData .video a.ctrl.next').hide();
            }
        }
    });
    $('.detailsData .video a.ctrl.prev').click(function () {
        $('.detailsData .video .recMovie').flexslider('prev');
        return false;
    });
    $('.detailsData .video a.ctrl.next').click(function () {
        $('.detailsData .video .recMovie').flexslider('next');
        return false;
    });
    function recMovieTags() {
        objTag = $('.recMovie .flex-viewport .slides').html();
        $('.recMovieMobile ul').html(objTag)
    }
    recMovieTags();
    //상세(강의설명)
    $('.detailsData .infomation .textCnt').click(function () {
        $(this).toggleClass('on');
        $('html, body').animate({ scrollTop: $(this).offset().top }, 600);
        relatedRoll();
    });
    //상세(추천강의-목록)
    function relatedRoll() {
        var leftContentHeight = $('.eduAlways .detailsData .infomation').outerHeight();
        var thisTitle = $('.detailsData .relatedCnt h5').outerHeight();
        $('.eduAlways .detailsData .relatedCnt div.roll').css('height', leftContentHeight - thisTitle)
    }
    relatedRoll();
    //상세팝업
    $('.detailsData .infomation a.pt_btn').click(function () {
        var userProgress = $('.detailsData .infomation dd.prog i').text();
        if (userProgress < 100) {
            $('.evalNotiPopup').show();
        } else {
            $('.pointEnterPopup').show();
        }
        return false;
    });
    $('.evalNotiPopup .popData .close, .evalNotiPopup .popData a.ok').click(function () {
        $('.evalNotiPopup').hide();
    });
    $('.pointEnterPopup .popData .close,.pointEnterPopup .popData button.cancel').click(function () {
        $('.pointEnterPopup').hide();
    });
    $('.pointEnterPopup .star').click(function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).nextAll('span').removeClass('on');
        } else {
            $(this).addClass('on');
            $(this).prevAll('span').addClass('on');
            $(this).nextAll('span').removeClass('on');
        }
    });
});