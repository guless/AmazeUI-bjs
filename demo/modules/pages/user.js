
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.controller('pages/user', ['$view', '$site', function($view, $site){

		var _form = $view.form = $site.block({
			model:{
				intro:'测试描述'
			},
			save:function(){
				alert(JSON.stringify(_form.model));
			}
		});

		var _other = $view.other = $site.block({
			progress:0,
			progress1:0,
			increase:function(){
				this.progress += parseInt(1 + Math.random()*10);
				this.progress %= 100;
				this.progress1 += parseInt(1 + Math.random()*10);
				this.progress1 %= 100;
				setTimeout(function(){$view.bgIsDispose ||_other.increase()}, parseInt(10 + Math.random()*1000))
			},
			$ready:function(){
				this.increase();
			}
		});

	}]);

})(bingoV2, window.jQuery);
