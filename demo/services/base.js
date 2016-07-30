
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.service('$site', ['$view', function($view){
		if ($view.$site) return $view.$site;

		return $view.$site = {
			block:function(p){
				if (p){
					p.bgAutoDispose = true;//自动销毁
					var ready =  p.$ready,
						init = p.$init;

					if (bingo.isFunction(ready)){
						$view.$ready(function(){
							return ready.apply(p, arguments);
						});
					}

					if (bingo.isFunction(init)){
						$view.$init(function(){
							return init.apply(p, arguments);
						});
					}

				}
				return p;
			},
			ajax:function(url, p){
				return app.ajax(url, bingo.extend({dataType:'json'}, p));
			}
		};

	}]);

})(bingoV2, window.jQuery);
