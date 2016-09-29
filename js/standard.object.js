/**
 * Created by nqlong on 29-Sep-16.
 */
$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    var JSObjectStandard = {
      default: {

      },

    };
    $.extend(JSObjectStandard, {
       init : function () {

       },
        setupEvent : function () {

        },
    });
    $(document).ready = function () {
        window.JSObjectStandard = JSObjectStandard;
    };
    function resize() {
        console.log("resize viewport");
        if( $( window ).height() < 400){
            console.log("true");
            // $('.connect_item').first().addClass("active");
        }
    }
    window.onresize = resize;
});