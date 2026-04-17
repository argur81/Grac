$(document).ready(function(){
    //Main Banner
    $('.mainBanner .banData').flexslider({
        animation: '',
        directionNav: false,
        animationLoop: true,
        controlNav: true,
        slideshow: true,
        controlsContainer: ".mainBanner .controller .banEA .active",
        start: function () {
            $('.mainBanner .flex-control-nav li:nth-child(-n+9) a span').each(function () {
                var thisObjNum = $(this).text();
                $(this).text('0' + thisObjNum);
            });
            function totalBannerEA() {
                var banEA = $('.mainBanner .banData .slides li').length - 2;
                if (banEA < 10) {
                    $('.mainBanner .controller .total').text('0' + banEA)
                } else {
                    $('.mainBanner .controller .total').text(banEA)
                }
            }
            function bannerLineSize(){
                var lineSize = $('.mainBanner .controller .lineBul').width();
                var banEA = $('.mainBanner .banData .slides li').length - 2;
                var lineBarSize = lineSize / banEA;
                var lineBarSizePercent = (lineBarSize / lineSize) * 100;
                $('.mainBanner .controller .lineBul ul li').css({ 'width': lineBarSizePercent + '%' });
                $('.mainBanner .controller .lineBul ul li:first-child span').animate({ 'width': '100%' });
            }
            function ctrlTags() {
                var banEA = $('.mainBanner .banData .slides li').length - 2;
                var output = '';
                for (i = 0; i < banEA; i++) {
                    output += '<li class="ctrl_'+i+'"><span>Banner</span></li>';
                }
                $('.mainBanner .controller .lineBul ul').html(output)
            }
            ctrlTags();
            bannerLineSize();
            totalBannerEA();
        },
        before: function () {
            var activeEQ = $('.mainBanner .banData .slides li.flex-active-slide').index();
            $('.mainBanner .controller .lineBul ul li').eq(activeEQ - 1).addClass('end');
            $('.mainBanner .controller .lineBul ul li').eq(activeEQ - 1).removeClass('active');
            $('.mainBanner .controller .lineBul ul li').eq(activeEQ - 1).find('span').animate({ 'width': 0 });
        },
        after: function () {
            var activeEQ = $('.mainBanner .banData .slides li.flex-active-slide').index();
            $('.mainBanner .controller .lineBul ul li').eq(activeEQ - 1).addClass('active');
            $('.mainBanner .controller .lineBul ul li').eq(activeEQ - 1).find('span').animate({'width' : '100%'});
            if ($('.mainBanner .controller .lineBul ul li:first-child').hasClass('active')) {
                $('.mainBanner .controller .lineBul ul li').removeClass('end');
            }
            if ($('.mainBanner .controller .lineBul ul li:last-child').hasClass('active')) {
                $('.mainBanner .controller .lineBul ul li:last-child').prevAll('li').addClass('end');
            }
            if ($('.mainBanner .controller .lineBul ul li').hasClass('active')) {
                $('.mainBanner .controller .lineBul ul li.active').nextAll('li').removeClass('end');
            }
        }
    });
    $('.mainBanner .controller .ctrlbtn a.prev').click(function () {
        $('.mainBanner .banData').flexslider('prev');
        return false;
    });
    $('.mainBanner .controller .ctrlbtn a.next').click(function () {
        $('.mainBanner .banData').flexslider('next');
        return false;
    });
    $('.mainBanner .controller .ctrlbtn a.pause').click(function () {
        $('.mainBanner .banData').flexslider('pause');
        $(this).hide();
        $('.mainBanner .controller .ctrlbtn a.play').show();
        return false;
    });
    $('.mainBanner .controller .ctrlbtn a.play').click(function () {
        $('.mainBanner .banData').flexslider('play');
        $(this).hide();
        $('.mainBanner .controller .ctrlbtn a.pause').show();
        return false;
    });
    //자주가는 메뉴
    function favMenuSetupHide() {
        var menuSizeWD = $('.favMenuSetup').outerWidth();
        $('.favMenuSetup').css('right', '-' + menuSizeWD + 'px')
    }
    favMenuSetupHide();
    $('.favMenuSetup a.menuBtn').click(function () {
        var menuSizeWD = $('.favMenuSetup').outerWidth();
        if ($('.favMenuSetup').css('right') == '-' +menuSizeWD+'px') {
            $('.favMenuSetup').stop().animate({ 'right': 0 });
            $('.favMenuSetup a.menuBtn p span').text('CLOSE');
            $('.favMenuSetup a.menuBtn p img').css({ 'transform': 'rotate(180deg)' })
        } else {
            $('.favMenuSetup').stop().animate({ 'right': '-' + menuSizeWD + 'px' });
            $('.favMenuSetup a.menuBtn p span').text('OPEN');
            $('.favMenuSetup a.menuBtn p img').css({ 'transform': 'rotate(0deg)' })
        }
        return false;
    });
    $('.menuAdd').click(function(){
        $('.menuPlusPop').show();
        return false;
    });
    //Menu Plus
    $('.menuPlusPop .close').click(function(){
        $('.menuPlusPop').hide();
        return false;
    });
    //게임물관련 사업자
    const slide = new Swiper('.mainCurriculum .gameBuisness .swiper-container', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 40,
        navigation: {
            nextEl: '.gameBuisness .swiper-button-next',
            prevEl: '.gameBuisness .swiper-button-prev'
        },
        breakpoints: {
            940: {
                slidesPerView: 2,
            },
            720: {
                slidesPerView: 1.5
            }
        }
    });
    slide.on('transitionEnd', function() { 
        console.log('now index :::', slide.realIndex);
        if(slide.realIndex == 1){
            $('.mainCurriculum .gameBuisness .swiper-button-prev').addClass('active');
        }
    });
    //지자체공무원
    const slide2 = new Swiper('.mainCurriculum .localOffical .swiper-container', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 40,
        navigation: {
            nextEl: '.localOffical .swiper-button-next',
            prevEl: '.localOffical .swiper-button-prev'
        },
        breakpoints: {
            940: {
                slidesPerView: 2,
            },
            720: {
                slidesPerView: 1.5
            }
        }
    });
    slide2.on('transitionEnd', function() { 
        if(slide2.realIndex == 1){
            $('.mainCurriculum .localOffical .swiper-button-prev').addClass('active');
        }
    });
    //자체등급분류
    const slide3 = new Swiper('.mainCurriculum .selfClassfication .swiper-container', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 40,
        navigation: {
            nextEl: '.selfClassfication .swiper-button-next',
            prevEl: '.selfClassfication .swiper-button-prev'
        },
        breakpoints: {
            940: {
                slidesPerView: 2,
            },
            720: {
                slidesPerView: 1.5
            }
        }
    });
    slide3.on('transitionEnd', function() { 
        if(slide3.realIndex == 1){
            $('.mainCurriculum .selfClassfication .swiper-button-prev').addClass('active');
        }
    });
    //자체등급분류
    const slide4 = new Swiper('.mainCurriculum .gameUser .swiper-container', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 40,
        navigation: {
            nextEl: '.gameUser .swiper-button-next',
            prevEl: '.gameUser .swiper-button-prev'
        },
        breakpoints: {
            940: {
                slidesPerView: 2,
            },
            720: {
                slidesPerView: 1.5
            }
        }
    });
    slide4.on('transitionEnd', function() { 
        if(slide4.realIndex == 1){
            $('.mainCurriculum .gameUser .swiper-button-prev').addClass('active');
        }
    });
});