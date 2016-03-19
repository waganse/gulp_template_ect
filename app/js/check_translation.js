;(function ($) {
    'use strict';

    // Translation filtering for Items
    $(function() {
      var $filter = $('.js-translate-filter'),
          brand_id = window.BRAND_ID || '';

      $filter.find('input[type=radio]').on('change', function() {
        var $this = $(this),
            val = $this.val() - 0;

        if (val === 0) {
          location.href = location.pathname + '?id=' + brand_id;
        } else if (val === 1) {
          location.href = location.pathname + '?id=' + brand_id +'&trans=1';
        } else {
          location.href = location.pathname + '?id=' + brand_id +'&trans=0';
        }
      });
    });

})(jQuery);