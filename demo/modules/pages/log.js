
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.controller('pages/log', ['$view', '$site', function($view, $site){
		var _log = $view.log = $site.block({
			list: [],
			$init:function(){
				for (var i = 0; i<20; i++)
					_log.list.bgPush(i);
			}
		});

	}]);

})(bingoV2, window.jQuery);
