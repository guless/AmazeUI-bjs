(function(bingo, $) {
	"use strict";

	var app = bingo.app('demo');

	app.controller('index', ['$view', '$site', function($view, $site) {

		//console.log('index ok', $view);

		var url = App.hashUrl();


		$view.progress = 0;
		var tid, clearTid = function(){
			//清除tid
			if (tid){
				window.clearTimeout(tid);
				window.clearInterval(tid);
				tid = null;
			}
		};
		//开始进度条
		$view.startProg = function() {
			if (tid) {
				clearTid();
				$view.progress = 0;
			}
			tid = window.setInterval(function() {
				if ($view.bgIsDispose) {
					clearTid();
				} else {
					$view.progress += parseInt(1 + Math.random() * 3)
					if ($view.progress > 100) {
						$view.progress = 100;
						clearTid();
					}
				}

			}, 100);
		};
		//结果进度条
		$view.endProg = function() {
			clearTid();
			$view.progress = 100;
			//200ms后，隐藏进度
			tid = window.setTimeout(function() {
				if ($view.bgIsDispose) return;
				$view.progress = 0;
			}, 200);
		};
		$site.open(url || 'normal');

	}]);

})(bingoV2, window.jQuery);