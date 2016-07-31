
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.controller('form', ['$view', '$site', 'user/lib', function($view, $site, userLib){

		console.log(userLib.getList());

		$view.tabIndex = 0;

		$view.model = {
			select1:'option2',
			select2:'2',
			mselect1:['2'],
			date1:'',
			date2:''
		};

		$view.save = function(){
			alert(JSON.stringify($view.model));
		};

	}]);

})(bingoV2, window.jQuery);
