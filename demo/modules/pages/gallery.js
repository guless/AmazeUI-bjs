
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.controller('pages/gallery', ['$view', '$site', function($view, $site){

		var _gallery = $view.gallery = $site.block({
			list:null,
			$init:function(){
				$view.pagebar1.type = 1;
				$view.pagebar1.pageSize = 1;
				$view.pagebar1.datas = new Array(10);
				var url = 'normal/gallery';
				return $site.ajax(url).then(function(rs){
					_gallery.list = rs;
				});
			}
		});

	}]);

})(bingoV2, window.jQuery);
