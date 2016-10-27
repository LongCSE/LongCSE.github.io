/**
 * Created by nqlong on 12-Oct-16.
 */
var DEBUG = true;
(function ($) {
    var WordMobile = {
        default: {
            name : "Work mobile",

        }

    };
    $.extend(WordMobile, {
        init: function () {
            this.setupBindEvent();
        },
        // set up.....
        setupBindEvent : function () {
            $("html").on("click", $.proxy(this.func, this)) ;
            $(".tab").on("click", $.proxy(this.changeTAbActiveJs, this));
        },
        func : function () {
            if (DEBUG) {

                console.log("WordMobile @github");
            }
        },
        changeTAbActiveJs : function (e) {
            if (DEBUG) {
                console.log("ChangeTabActive");
            }
            $(e.target).changeTabActive();
        },

    });

    window.WordMobile = WordMobile;
    $(document).ready(function () {
        WordMobile.init();
    });

    $.fn.changeTabActive = function () {
        var mapActive = {};
        mapActive["tab 1"] = "content-1";
        mapActive["tab 2"] = "content-2";
        mapActive["tab 3"] = "content-3";
        mapActive["tab 4"] = "content-4";

        $(this).removeActive();
        var attClass = $(this).attr("class");
        $(this).addClass("active");
        $.each(mapActive, function (key, value) {
            if (key.indexOf(attClass) >= 0) {
                $("." + mapActive[key]).removeActive();
                $("." + mapActive[key]).addClass("active");
            }
        })

    };

    $.fn.removeActive = function() {
        $(this).siblings().removeClass("active");
    }
}(jQuery));

