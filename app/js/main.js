;(function ($) {
    'use strict';

    // Materialize Functions
    $(function() {

      $('.modal-trigger').leanModal();

      $('select').material_select();

      $('.js-menu-trigger').on('click', function() {
        $('body').addClass('nav-open');
        return false;
      });

      $('.js-menu-overlay').on('click', function() {
        $('body').removeClass('nav-open');
      });

    });

    // Browser compatibility
    $(function() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
          appVersion = window.navigator.appVersion.toLowerCase();

      if (userAgent.indexOf('msie') !== -1) {
        if (appVersion.indexOf('msie 6.') !== -1) {
          location.href = 'unsupport/';
        } else if (appVersion.indexOf('msie 7.') !== -1) {
          location.href = 'unsupport/';
        } else if (appVersion.indexOf('msie 8.') !== -1) {
          location.href = 'unsupport/';
        } else if (appVersion.indexOf('msie 9.') !== -1) {
          location.href = 'unsupport/';
        } else {
          // return 'ie';
        }
      } else {
        // location.href = 'not_supported/';
      }

      return;
    });

})(jQuery);