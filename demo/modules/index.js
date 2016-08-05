
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.controller('index', ['$view', '$site', function($view, $site){

		//console.log('index ok', $view);

		var  url = App.hashUrl();
		

		$view.progress = 0;
		var tid;
		$view.startProg = function(){
			if (tid){
				$view.progress = 0;
				window.clearTimeout(tid);
				window.clearInterval(tid);
			}
			tid = window.setInterval(function(){
				if ($view.bgIsDispose){
					window.clearInterval(tid);
				} else{
					$view.progress += parseInt(1 + Math.random()*3)
					if ($view.progress > 100){
						$view.progress = 100;
						window.clearInterval(tid);
					}
				}

			}, 100);
		};
		$view.endProg = function(){
			$view.progress = 100;
				window.clearTimeout(tid);
				window.clearInterval(tid);
				window.setTimeout(function(){
					if ($view.bgIsDispose) 
						return;
					$view.progress = 0;
				}, 50);
		};
		$site.open(url || 'normal');

	}]);

})(bingoV2, window.jQuery);
