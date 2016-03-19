;(function() {
    'use strict';

    $(function(){
        var brand_id = window.BRAND_ID || 0,
            $dropzoneWrap = $('.dropzone-wrap'),
            options = {
                url: 'sample',
                paramName : 'file',
                parallelUploads:1,
                acceptedFiles:'.xlsx',
                maxFiles:1,
                maxFilesize:0.5,
                autoProcessQueue: false,
                dictDefaultMessage: '<svg class="svg-upload"><use xlink:href="#svg-excel_upload" /></svg><p class="upload-message"><small>Drop xls file to import</small></p>',
                dictFileTooBig: 'Exceeding the maximum file size. ({{filesize}}MiB). Max: {{maxFilesize}}MiB.',
                dictInvalidFileType: 'Need to upload excel file in specific format.',
                dictMaxFilesExceeded: 'Exceed maximum # of files.',
            },
            importErrFlag = true;

        Dropzone.autoDiscover = false;

        $dropzoneWrap.each(function(i, el) {
            var $self = $(el),
                $dropzone = $self.find('.my-awesome-dropzone');

            options.url = $self.data('url');
            options.maxFiles = $self.data('maxFile') || 1;
            options.parallelUploads = $self.data('maxFile') || 1;

            options.init = function() {
                var dropzone = this;

                dropzone.on('sending', function(file, xhr, formData) {
                    formData.append('brand_id', brand_id);
                });

                dropzone.on('complete', function(res) {
                    var data = JSON.parse(res.xhr.response);

                    if (data.cord !== 200) {
                        console.log(data.message);
                        importErrFlag = false;
                    }
                });

                dropzone.on('queuecomplete', function() {
                    if (importErrFlag) {
                        setTimeout(function() {
                            dropzone.removeAllFiles();
                            location.reload();
                        }, 3000);
                    }
                });

                $self.find('.js-btn-upload').on('click', function(e) {
                    dropzone.processQueue();
                    e.preventDefault();
                 });

                $self.find('.js-btn-upload-cancel').on('click', function(e) {
                    dropzone.removeAllFiles();
                    e.preventDefault();
                });
            };

            $dropzone.dropzone(options);

        });

    });

})(jQuery);