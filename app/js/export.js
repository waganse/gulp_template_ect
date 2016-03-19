;(function($) {
    'use strict';

    $(function() {

        $('.js-ect-export').on('click', function(e) {
            var $loader = $('.js-loader'),
                $message = $('.js-complete-message'),
                $messageError = $('.js-error-message'),
                $bg = $('.js-bg-build');

            $loader.addClass('active');
            $bg.addClass('active');
            $('.js-menu-overlay').trigger('click');

            exportJson()
            .done(function() {
                $message.find('span').html('ECT json export completed!!!');
                $message.fadeIn(function() {
                    setTimeout(function() {
                        $message.fadeOut();
                    }, 2000);
                });
            })
            .fail(function(e) {
                $messageError.find('span').html('ECT json export failed.');
                $messageError.fadeIn(function() {
                    setTimeout(function() {
                        $message.fadeOut();
                    }, 2000);
                });
                console.log(e);
            })
            .always(function() {
                $loader.removeClass('active');
                $bg.removeClass('active');
            });

            e.preventDefault();
        });

        $('.js-grunt-build').on('click', function(e) {
            var $loader = $('.js-loader'),
                $message = $('.js-complete-message'),
                $bg = $('.js-bg-build');

            $loader.addClass('active');
            $bg.addClass('active');
            $('.js-menu-overlay').trigger('click');

            exportJson()
            .then(function() {
                $message.find('span').html('ECT json export completed!!!');
                $message.fadeIn(function() {
                    setTimeout(function() {
                        $message.fadeOut();
                    }, 2000);
                });

                return gruntBuild();
            })
            .done(function(res) {
                $message.find('span').html('Build completed!!!');
                console.log(res);
            })
            .fail(function(e) {
                $message.find('span').html('Build failed.');
                console.log(e);
            })
            .always(function() {
                $loader.removeClass('active');
                $bg.removeClass('active');

                $message.fadeIn(function() {
                    setTimeout(function() {
                        $message.fadeOut();
                    }, 2000);
                });
            });

            e.preventDefault();
        });

        function exportJson() {
            var d = new $.Deferred();

            $.ajax({
                url: ECT_EXPORT_API,
                dataType: 'json',
                success: d.resolve,
                error: d.reject
            });
            return d.promise();
        }

        function gruntBuild() {
            var d = new $.Deferred();

            $.ajax({
                url: GRUNT_BUILD_API,
                dataType: 'json',
                success: d.resolve,
                error: d.reject
            });
            return d.promise();
        }

    });

})(jQuery);