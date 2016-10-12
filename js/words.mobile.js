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
        },
        func : function () {
            if (DEBUG) {
                console.log("WordMobile @github");
            }
        },

    });
    window.WordMobile = WordMobile;
    $(document).ready(function () {
        WordMobile.init();
    });
}(jQuery));

