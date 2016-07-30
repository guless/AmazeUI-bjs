
//设置route资源路由
;(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	//直接通过， 即没有转发处理
	app.route('pass', {
		type: 'pass',
		url: '{pass*}',
		toUrl: '{pass*}',
		defaultValue: {
			pass: ''
		}
	});

	//设置controller资源路由
	app.route('controller', {
		//优先级, 越小越前, 默认100
		//priority: 200,
		type: 'controller',
		//路由url, 如: user/list
		url: '{controller*}',
		//路由到目标url, 生成:modules/user/list.js
		toUrl: 'modules/{controller*}.js',
		//变量默认值, 框架提供内部用的变量: app, controller, service
		defaultValue: {
			controller: ''
		}
	});

	//设置view模板路由
	app.route('view', {
		type: 'view',
		url: '{view*}',
		toUrl: 'modules/{view*}.html',
		defaultValue: {
			view: ''
		}
	});

	//设置tmpl资源路由
	app.route('tmpl', {
		type: 'tmpl',
		url: '{tmpl*}',
		toUrl: 'tmpls/{tmpl*}.html',
		defaultValue: {
			tmpl: ''
		}
	});

	//设置command资源路由
	app.route('command', {
		type: 'command',
		url: '{command*}',
		toUrl: '{command*}',
		promise: function(url, p, context){

			var cUrl = context.url,
				l = cUrl.split('/'),
			    hasType  = l.length > 1,
				cmdType = hasType ? l[0] : 'base',
				tmplid = hasType ? l[1] : cUrl;

			//如 route url: index:sidebar
			//类型(type)为: index
			//url==> commands/index.js
			url = ['pass::commands', cmdType].join('/');
			url += '.js';

			return app.using(url);
		},
		defaultValue: {
			command: ''
		}
	});

	//设置command模板资源路由
	app.route('cmdtmpl', {
		type: 'cmdtmpl',
		url: '{cmdtmpl*}',
		promise: function(url, p, context){

			var cUrl = context.url,
				l = cUrl.split('/'),
			    hasType  = l.length > 1,
				cmdType = hasType ? l[0] : 'base';

			//如 route url: index:sidebar
			//类型(type)为: index


			//url==> commands/index.html
			url = ['pass::commands', cmdType].join('/');
			url += '.html';

			//tmplid: index:sidebar
			//最终结果是: 加载commands/index.html文件中的index:sidebar模板
			return app.tmpl(url, {tmplid:cUrl});
		},
		defaultValue: {
			cmdtmpl: ''
		}
	});

	//设置ajax资源路由
	app.route('ajax', {
		type: 'ajax',
		url: '{ajax*}',
		toUrl: 'api/{ajax*}.json',
		defaultValue: {
			ajax: ''
		}
	});

	//设置service资源路由
	app.route('service', {
		type: 'service',
		url: '{service*}',
		toUrl: function(url, p){
			var l = url.split('/'),
			    isBase  = l.length == 1,
				file = isBase ? 'base' : l[0];
			return 'services/' + file + '.js';
		},
		defaultValue: {
			service: ''
		}
	});

	bingo.ready(function(){
		bingo.compile(document.getElementById('main'));
	});

})(bingoV2, window.jQuery);
