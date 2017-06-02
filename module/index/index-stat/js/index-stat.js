define(function(require, module, exports) {
	var m = require("mui");
	var app = require("app");
	var  Vue = require("vue");
	var indexStatVue = new Vue({
		el:'#index-stat',
		data:{
			yszj:0,//应收租金提醒
			yqzj:0,//逾期租金
			htjq:0,//合同结清提醒
			xbtx:0,//续保提醒
			sptx:0,//上牌提醒
			dytx:0//抵押提醒
		},
		methods:{
			/**
			 * 打开租金计算器
			 */
			openRentCalculator:function(){
				m.openWindow({
					url: '../../rent-calculator/html/rent-calculator.html',
					id: 'rent-calculator',
					show: {
						autoShow: true //页面loaded事件发生后自动显示，默认为true
					},
					waiting: {
						autoShow: false //自动显示等待框，默认为true
					}
				});
			/*	m.openWindow({
					url: '../../../test/html/test2.html',
					id: 'rent-calculator',
					show: {
						autoShow: true //页面loaded事件发生后自动显示，默认为true
					},
					waiting: {
						autoShow: false //自动显示等待框，默认为true
					}
				});*/
			},
			/**
			 * 打开应收租金列表
			 */
			openRentList: function () {
				m.openWindow({
					id: 'rent-list',
					"url": '../../rent/html/rent-list.html',
					show: {
						aniShow: 'pop-in'
					},
					waiting: {
						autoShow: true
					},
					extras: {
						//自定义扩展参数，可以用来处理页面间传值
						//'custId': custId,
						//'custName': custName
					}
				});
		   },
		   /**
			 * 打开逾期租金列表
			 */
			openYqRentList: function () {
				m.openWindow({
					id: 'yq-rent-list',
					"url": '../../yq-rent/html/yq-rent-list.html',
					show: {
						aniShow: 'pop-in'
					},
					waiting: {
						autoShow: true
					},
					extras: {
						//自定义扩展参数，可以用来处理页面间传值
						//'custId': custId,
						//'custName': custName
					}
				});
		   },
		   /**
			 * 打开合同结清提醒查询列表
			 */
			openContractRemindList: function () {
				m.openWindow({
					id: 'contract-remind',
					"url": '../../contract-remind/html/list.html',
					show: {
						aniShow: 'pop-in'
					},
					waiting: {
						autoShow: true
					},
					extras: {
						//自定义扩展参数，可以用来处理页面间传值
						//'custId': custId,
						//'custName': custName
					}
				});
		   },
		   /**
			 * 打开续保提醒查询列表
			 */
			openRenewalRemindList: function () {
				m.openWindow({
					id: 'contract-remind',
					"url": '../../renewal-remind/html/list.html',
					show: {
						aniShow: 'pop-in'
					},
					waiting: {
						autoShow: true
					},
					extras: {
						//自定义扩展参数，可以用来处理页面间传值
						//'custId': custId,
						//'custName': custName
					}
				});
		   },
		   /**
			 * 打开上牌查询列表
			 */
			openCardRemindList: function () {
				m.openWindow({
					id: 'card-remind',
					"url": '../../card-remind/html/list.html',
					show: {
						aniShow: 'pop-in'
					},
					waiting: {
						autoShow: true
					},
					extras: {
						//自定义扩展参数，可以用来处理页面间传值
						//'custId': custId,
						//'custName': custName
					}
				});
		   },
		   /**
			 * 打开抵押提醒查询列表
			 */
			openMortgageRemindList: function () {
				m.openWindow({
					id: 'mortgage-remind',
					"url": '../../mortgage-remind/html/list.html',
					show: {
						aniShow: 'pop-in'
					},
					waiting: {
						autoShow: true
					},
					extras: {
						//自定义扩展参数，可以用来处理页面间传值
						//'custId': custId,
						//'custName': custName
					}
				});
		    }
		}
	});
	
	(function initData(){
		m.getJSON(app.api_url + '/api/fl/contract/getContractIndexData?_t=' + new Date().getTime(),function(data){
			indexStatVue.yszj = data.yszj;//应收租金提醒
			indexStatVue.yqzj = data.yqzj;//逾期租金
			indexStatVue.htjq = data.htjq;//合同结清提醒
			indexStatVue.xbtx = data.xbtx;//续保提醒
			indexStatVue.sptx = data.sptx;//上牌提醒
			indexStatVue.dytx = data.dytx;//抵押提醒
		});
	})();
});
