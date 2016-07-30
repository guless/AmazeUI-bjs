
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	var _takeList = function(list, size, cur){
		var index = size * (cur-1);
		return list.slice(index, index + size);
	};

	app.command('pagebar', function(cp){
		cp.$tmpl(function(){ return cp.$loadTmpl('cmdtmpl::pagebar'); });

		cp.$controller(['$view', function($view){
			$view.datas = null;
			$view.pageSize = 10;
			$view.curPage = 1;
			$view.curDatas = null;
			$view.totalPage = 0;
			$view.setPage = function(page){
				$view.curPage = page <= 0 ? 1 : (page > $view.totalPage  ? $view.totalPage : page);
			};
			var takeDatas = function(cur){
				var curDatas = $view.curDatas = _takeList($view.datas, $view.pageSize, cur);
				$view.bgTrigger('onChanged', [curDatas, $view]);
			}, calcTotalPage = function(){
				var length = $view.datas ? $view.datas.length : 0,
					isAdd = (length % $view.pageSize) != 0;
				$view.totalPage = parseInt(length/$view.pageSize) + (isAdd ? 1 : 0);
			};
			$view.onChanged = function(callback){
				$view.bgOn('onChanged', callback);
			};

			$view.$observe('curPage', function(c){
				takeDatas(c.value || 1);;
			});
			$view.$observe('pageSize', function(c){
				calcTotalPage();
				if ($view.curPage != 1)
					$view.curPage = 1;
				else
					takeDatas(1);
			});
			$view.$observe('datas', function(c){
				calcTotalPage();
				if ($view.curPage != 1)
					$view.curPage = 1;
				else
					takeDatas(1);
			});

			$view.pages = null;
			$view.$observe('totalPage', function(c){
				var total = c.value, list=[];
				for (var i=1; i<=total; i++) list.push(i);
				$view.pages = list;
			});
		}]);
	});

})(bingoV2, window.jQuery);
