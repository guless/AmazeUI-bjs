
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
			},
			mainView: function() {
				return bingo.app('demo').view('main');
			},
			mainRoute: function() {
				return _app.mainView().mainRoute
			},
			open:function(url, params){
				var _cp = null,
					_page = {
						bgNoObserve: true,
						params: params,
						receive: function(callback) {
							this.bgOn('receive', callback);
							return this;
						},
						send: function(p) {
							this.bgTrigger('receive', arguments);
							return this;
						}
					}; //end _page

				App.open(url, ['$view', function($pageView) {
					$pageView.__page_ = _page;
				}]);
				return _page;
			},
			page: function() {
				return $view.__page_;
			},
			params: function(defaultValue) {
				var page = this.page();
				return bingo.extend(defaultValue || {}, page && page.params);
			}
		};

	}]);

})(bingoV2, window.jQuery);
