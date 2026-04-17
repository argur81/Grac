$(document).ready(function () {
    //Header Login
    $('header .loginAfter a.mypage').click(function () {
        $(this).next('.drop').toggle();
        return false;
    });
    //Header
    $('header nav > ul > li').hover(function () {
        $(this).find('ol').stop().slideDown();
    }, function () {
        $(this).find('ol').slideUp();
    });
    //전체메뉴
    $('header nav .all a.open').click(function () {
        $(this).hide();
        $('header nav .all a.close').show();
        $('header .allMenuWrap').show();
        return false;
    });
    $('header nav .all a.close').click(function () {
        $(this).hide();
        $('header nav .all a.open').show();
        $('header .allMenuWrap').hide();
        return false;
    });
    function allMenuTags() {
        var navTagsP1 = $('header nav .menu1').html();
        var navTagsp2 = $('header nav .menu2').html();
        var navTagsp3 = $('header nav .menu3').html();
        var navTagsp4 = $('header nav .menu4').html();
        var navTagsp5 = $('header nav .menu5').html();
        $('header .allMenuWrap .part1').html(navTagsP1);
        $('header .allMenuWrap .part2 .p1').html(navTagsp2);
        $('header .allMenuWrap .part2 .p2').html(navTagsp3);
        $('header .allMenuWrap .part3 .p1').html(navTagsp4);
        $('header .allMenuWrap .part3 .p2').html(navTagsp5);
    }
    function allMenuPos() {
        var windowHT = $(window).height();
        var headerHT = $('header').outerHeight();
        $('header .allMenuWrap').css({
            'top': headerHT,
            'height': windowHT - headerHT
        })
    }
    allMenuTags();
    allMenuPos();
    $(window).resize(function () {
        allMenuPos();
    });
    //Mobile Nav
    function mobileNav() {
        var navTags = $('header nav').html();
        $('.mobileNav .menuList').html(navTags);
    }
    function mobileNavSize() {
        var windowHT = $(window).height();
        var moNavTopHT = $('.mobileNav .topCnt').outerHeight();
        $('.mobileNav .menuList').css({ 'height': windowHT - moNavTopHT})
    }
    mobileNav();
    mobileNavSize();
    $('header .moUtil a.menuOpen').click(function () {
        $('.mobileNav').stop().animate({'left' : 0});
        return false;
    });
    $('.mobileNav .topCnt .close').click(function () {
        $('.mobileNav').stop().animate({ 'left': '-100%' });
        $('.mobileNav .menuList > ul > li > a').removeClass('on');
        $('.mobileNav .menuList ol').slideUp();
        return false;
    });
    $('.mobileNav .menuList > ul > li > a').click(function () {
        $(this).toggleClass('on');
        $(this).next('ol').slideToggle();
        return false;
    });
    //Family Site
    $('.familySite select').change(function(){
        if($(".familySite select option:eq(0)").prop("selected") == true){
            return false;
        }else{
            var siteURL = $(this).val()
            window.open(siteURL, '_blank');
        }
    });
});