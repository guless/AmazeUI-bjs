
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.service('user/lib', ['$view', function($view){
		
		return {
			getList:function(){
				return [{id:'1', role:"1", name:"admin"},{id:'2', role:"2", name:"小李"}];
			}
		};

	}]);

	app.service('user/role', ['$view', function($view){
		
		return {
			getList:function(){
				return [{id:'1', name:"管理员"},{id:'2', name:"测试员"}];
			}
		};

	}]);

})(bingoV2, window.jQuery);
