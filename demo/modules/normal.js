
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.controller('normal', ['$view', '$site', function($view, $site){

		var _nums = $view.nums = $site.block({
			newPage: 2300,
			order: 308,
			visit:80082,
			online: 1300,
			increase:function(){
				this.newPage += parseInt(3 + Math.random()*300);
				this.order += parseInt(1 + Math.random()*100);
				this.visit += parseInt(10 + Math.random()*1000);
				this.online += parseInt(2 + Math.random()*100);
				setTimeout(function(){ $view.bgIsDispose || _nums.increase()}, parseInt(10 + Math.random()*1000))
			},
			$ready: function(){
				this.increase();
			}
		});

		var _table = $view.table = $site.block({
			browsers:null,
			$init:function(){
				var url = 'normal/list',
					burl = 'normal/browser';
				return bingo.Promise.always([$site.ajax(url).then(function(rs){
					$view.pagebar1.pageSize = 5;
					$view.pagebar1.datas = rs;
				}), $site.ajax(burl).then(function(rs){
					_table.browsers = rs;
					_table.increaseBrowse();
				})]);
			},
			delItem:function(item){
				$view.pagebar1.datas = bingo.removeArrayItem(item, $view.pagebar1.datas);
			},
			increaseBrowse:function(){
				bingo.each(_table.browsers, function(item){
					item.count += parseInt(3 + Math.random()*30);
				});
				setTimeout(function(){$view.bgIsDispose ||_table.increaseBrowse()}, parseInt(10 + Math.random()*1000))
			}
		});

		var _other = $view.other = $site.block({
			progress:0,
			increase:function(){
				this.progress += parseInt(1 + Math.random()*10);
				this.progress %= 100;
				setTimeout(function(){$view.bgIsDispose ||_other.increase()}, parseInt(10 + Math.random()*1000))
			},
			$ready:function(){
				this.increase();
				$view.pagebar2.pageSize = 1;
				$view.pagebar2.datas = new Array(10);
			}
		});


	}]);

})(bingoV2, window.jQuery);
