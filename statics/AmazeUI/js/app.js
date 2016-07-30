(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });


    $(document.body).on('click', '[data-am-dropdown]', function() {
      var jo = $(this);
      if (jo.data('init-am-dropdown') !== 1) {
        jo.data('init-am-dropdown', 1);
        jo.dropdown().dropdown('open');
      }
    });
    
  });

})(jQuery);
