
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.controller('index', ['$view', '$site', function($view, $site){

		// console.log('index ok', $view);

		var  url = App.hashUrl();
		
		$site.open(url || 'normal');

	}]);

})(bingoV2, window.jQuery);
