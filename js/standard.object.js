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
        if ($(this).scrollTop() > 600) {
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

    function resize() {
        console.log("resize viewport");
        if( $( window ).height() < 400){
            console.log("true");
            // $('.connect_item').first().addClass("active");
        }
    }
    window.onresize = resize;

    window.JSObjectStandard = JSObjectStandard;
    JSObjectStandard.init();
});
// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("fr-show") == -1) {
        x.className += " fr-show";
        x.previousElementSibling.className += " fr-theme-d1";
    } else {
        x.className = x.className.replace("fr-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" fr-theme-d1", "");
    }
}

var JSObjectStandard = {
    default: {},
};
$.extend(JSObjectStandard, {
    init : function () {
        this.quarkData = {
            quark_type:'product',
            photos:[],
            language:'en',
            show_info:1,
            list_languages:['en'],
            translations: {
                en: {
                    title: '',
                    description: '',
                    show_info: '',
                    value_bands_data: [
                        'ngocson', 'test'
                    ],
                    marketing_value_bands_data: [
                        'test'
                    ]
                }
            },
            valueBand:[],
            marketingTag:[]
        };
        this.setupEvent();
    },
    setupEvent : function () {
        // $(document).on('click', $.proxy(this.submitFunction, this));
    },

    submitFunction : function() {
        var url = "http: quark.at.mikorm.com";
        //submit param
        var data = $.param(this.quarkData);
        jQuery.post(url, data, function (dataResult) {
            console.log("" + data);
        })
    },
});
// on document ready
/*
$(document).ready = function () {
    window.JSObjectStandard = JSObjectStandard;
};*/
