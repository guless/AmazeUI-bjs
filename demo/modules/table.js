
(function(bingo, $){
	"use strict";

	var app = bingo.app('demo');

	app.controller('table', ['$view', '$site', function($view, $site){

		var _table = $view.table = $site.block({
			$init: function() {
				var table1 = $view.table1;
				table1.column = [{
					name: 'id',
					title: 'ID',
					width:50
				},{
					name: 'title',
					title: '标题',
					formatter:function(cellvalue, col, row){
						return '<a href="javascript:void">'+bingo.htmlEncode(cellvalue)+'</a>';
					}
				},{
					name: 'type',
					title: '类别',
					width:70
				},{
					name: 'user',
					title: '作者',
					width:80
				},{
					name: 'date',
					title: '修改日期',
					width:180
				},{
					name: '',
					title: '操作',
					width:230,
					formatter:function(cellvalue, col, row){
						return '{{include src="#table_opt" /}}';
					}
				}];
				var model = {
					id:'',
					title:'Business management',
					type:'default',
					user:'测试1号',
					date:'2014年9月4日 7:28:47'
				};
				var datas = [];
				for(var i=1;i<=35;i++){
					datas.push(bingo.extend({}, model, {id:i}));
				}
				table1.pagebar.type = 1;
				table1.pagebar.pageSize = 10;
				table1.datas = datas;
			}
		});

	}]);

})(bingoV2, window.jQuery);
