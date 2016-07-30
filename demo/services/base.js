
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.service('$site', ['$view', function($view){
		if ($view.$site) return $view.$site;

		return $view.$site = {

		};

	}]);

})(bingoV2, window.jQuery);
