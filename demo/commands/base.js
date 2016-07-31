
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	var _takeList = function(list, size, cur){
		if (!list)return list;
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
			$view.total = 0;
			$view.type = 0;
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
				$view.total = $view.datas && $view.datas.length || 0
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

	app.command('table', function(cp){
		cp.$tmpl(function(){ return cp.$loadTmpl('cmdtmpl::table'); });

		cp.$controller(['$view', function($view){
			$view.column = null;
			$view.datas = null;

			$view.$observe('datas', function(c){
				$view.pagebar.datas = c.value
			});

		}]);
	});

	app.command('select', function(cp) {
		cp.$tmpl(function() {
			return cp.$loadTmpl('cmdtmpl::select');
		});

		cp.$controller(['$view', function($view) {
			$view.datas = null;
			$view.model = '';
		}]);

		//观察datas属性的执行结果
		cp.$layoutResult('datas', function(c){
			cp.$ownerView.datas = c.value;
		});

		//初始化， link model属性
		cp.$init(function(){
			var model = cp.$attrs.$getAttr('model');
			model && cp.$link({model:model});
		});
	});

	app.command('mselect', function(cp) {
		cp.$tmpl(function() {
			return cp.$loadTmpl('cmdtmpl::mselect');
		});

		cp.$controller(['$view', function($view) {
			$view.datas = null;
			$view.model = [];

			var fixModel = function(){
				if ($view.model)
					$view.model = bingo.isArray($view.model) ? $view.model : [$view.model];
				else
					$view.model = [];
			};

			$view.setValue = function(value){
				if ($view.has(value))
					$view.model = bingo.removeArrayItem(value, $view.model);
				else
					$view.model.push(value);
			};
			$view.has = function(value){
				fixModel();
				return bingo.inArray(value, $view.model) >= 0;
			}
		}]);

		//观察datas属性的执行结果
		cp.$layoutResult('datas', function(c){
			cp.$ownerView.datas = c.value;
		});

		//初始化， link model属性
		cp.$init(function(){
			var model = cp.$attrs.$getAttr('model');
			model && cp.$link({model:model});
		});
	});


})(bingoV2, window.jQuery);
