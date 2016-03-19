;(function() {
    'use strict';

    $(function() {

        $.get(SVG_PATH, function(data) {
            $('body').prepend(new XMLSerializer().serializeToString(data.documentElement));
        });

    });

})(jQuery);