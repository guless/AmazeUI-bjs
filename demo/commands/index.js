
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.command('index/topbar', function(cp){
		cp.$tmpl(function(){ return cp.$loadTmpl('cmdtmpl::index/topbar'); });

		cp.$controller(['$view', function($view){
			$view.fullscreen = function(){
				$.AMUI.fullscreen.toggle();
			};
		}]);
	});

	app.command('index/sidebar', function(cp){
		cp.$tmpl(function(){ return cp.$loadTmpl('cmdtmpl::index/sidebar'); });
	});

	app.command('index/footer', function(cp){
		cp.$tmpl(function(){ return cp.$loadTmpl('cmdtmpl::index/footer'); });
	});

})(bingoV2, window.jQuery);
