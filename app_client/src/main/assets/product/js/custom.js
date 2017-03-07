// jQuery(document).ready(function ($) {
//
//     /* ------------------- Client Carousel --------------------- */
//
//     $('.clients-carousel').flexslider({
//         animation: "slide",
//         easing: "swing",
//         animationLoop: true,
//         itemWidth: 188,
//         itemMargin: 0,
//         minItems: 1,
//         maxItems: 5,
//         controlNav: false,
//         directionNav: false,
//         move: 1
//     });
//
//
//     /* ------------------ Back To Top ------------------- */
//
//     jQuery('#footer-menu-back-to-top a').click(function () {
//         jQuery('html, body').animate({scrollTop: 0}, 300);
//         return false;
//     });
//
//     /* ------------------ Progress Bar ------------------- */
//     $(function () {
//         $(".meter > span").each(function () {
//             $(this)
//                 .data("origWidth", $(this).width())
//                 .width(0)
//                 .animate({
//                     width: $(this).data("origWidth")
//                 }, 1200);
//         });
//     });
//
//     /* --------------------- Tabs ------------------------ */
//
//     (function () {
//
//         var $tabsNav = $('.tabs-nav'),
//             $tabsNavLis = $tabsNav.children('li'),
//             $tabContent = $('.tab-content');
//
//         $tabsNav.each(function () {
//             var $this = $(this);
//
//             $this.next().children('.tab-content').stop(true, true).hide()
//                 .first().show();
//
//             $this.children('li').first().addClass('active').stop(true, true).show();
//         });
//
//         $tabsNavLis.on('click', function (e) {
//             var $this = $(this);
//
//             $this.siblings().removeClass('active').end()
//                 .addClass('active');
//
//             $this.parent().next().children('.tab-content').stop(true, true).hide()
//                 .siblings($this.find('a').attr('href')).fadeIn();
//
//             e.preventDefault();
//         });
//
//     })();
//
//
// });
//
//
// /* ------------------- Parallax --------------------- */
//
// jQuery(document).ready(function ($) {
//
//     $('#da-slider').cslider({
//         autoplay: true,
//         bgincrement: 450
//     });
//
// });

/*Spinner*/
$(document).ready(function(){
    //Stop people from typing
    $('.spinner input').keydown(function(e){
        e.preventDefault();
        return false;
    });
    var minNumber = 1;
    var maxNumber = 10;
    $('.spinner .btn:first-of-type').on('click', function() {
        if($('.spinner input').val() == maxNumber){
            return false;
        }else{
            $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
            return false;
        }
    });

    $('.spinner .btn:last-of-type').on('click', function() {
        if($('.spinner input').val() == minNumber){
            return false;
        }else{
            $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
            return false;
        }
    });

});

/**/
$(function () {
    $('input:radio').click(function (e) {
        e.stopPropagation();
        $('li').removeClass('active')
        $(this).parent().parent().addClass('active');
        var tabpane = $(this).parent().attr('aria-controls');
        $('.tab-content').children().removeClass('active');
        $('#' + tabpane).addClass('active');
    });
    $('a').click(function (e) {
        $(this).find("input[type=radio]").trigger('click');
    });
});

/**/
function openImg(imgName) {
    var i, x, y, j;
    x = document.getElementsByClassName("picture");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(imgName).style.display = "block";
}

/**/
$( "#address" ).click(function() {
    var x = document.getElementById('delivery-car');
    x.style.display = 'block';
});

function openDiv(id) {
    var x = document.getElementsByClassName('address');
    var i;
    for(i=0;i<x.length;i++){
        x[i].style.border = 'solid 1px #ea9215';
        x[i].getElementsByClassName('Delivery')[0].style.display= 'block';
    }
    document.getElementById(id).style.border ='dashed 1px ';
    document.getElementById(id).getElementsByClassName('Delivery')[0].style.display= 'none';

}

$(function () {
    $('input:radio').click(function (e) {
        e.stopPropagation();
        $('li').removeClass('active')
        $(this).parent().parent().addClass('active');
        var tabpane = $(this).parent().attr('aria-controls');
        $('.tab-content').children().removeClass('active');
        $('#' + tabpane).addClass('active');
    });
    $('a').click(function (e) {
        $(this).find("input[type=radio]").trigger('click');
    });
});
