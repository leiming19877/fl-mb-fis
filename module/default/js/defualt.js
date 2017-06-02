define(function(require, module, exports) {
	var m = require("mui");
	var app = require("app");

	m.plusReady(function(){
		initReady();
	});

	function initReady() {
		//if app.token is exsit and not exsit autoLogin varible or autoLogin exsit  
		//but autoLogin is true
		if(app.token && app.user.autoLogin) {
			//如果token 有效直接跳过登录
			m.ajax(app.api_url + "/api/check?_t=" + new Date().getTime(), {
				data: {
					token: app.token
				},
				dataType: 'json', //服务器返回json格式数据
				type: 'post', //HTTP请求类型
				timeout: 5000, //超时时间设置为10秒；
				success: function(data) {
					//如果token没有超时
					if(!data.tokenExpire) {
						toMain();
					} else {
						toLogin();
					}
				},
				error: function(xhr, type, errorThrown) {
					toLogin();
				}
			});
		} else {
			toLogin();
		}
	}
	function toLogin() {
		var loginView = m.openWindow({
			id: 'login',
			"url": '../../login/html/login.html',
			show: {
				autoShow: true, //页面loaded事件发生后自动显示，默认为true
			},
			waiting: {
				autoShow: false
			}
		});
		window.setTimeout(function() {
			var ws = plus.webview.currentWebview();
			ws.close();
		}, 3000);
	}

	function toMain() {
		/*	var mainView = m.openWindow({
				id: 'main',
				"url": '../../main/html/main.html',
				show: {
					 autoShow:false,//页面loaded事件发生后自动显示，默认为true
				},
				waiting: {
					autoShow: false
				}
			});*/
		var mainView = plus.webview.create("../../main/html/main.html", "main", {

		});
		window.setTimeout(function() {
			mainView.show();
			var ws = plus.webview.currentWebview();
			ws.close();
		}, 3000);
	}
	/**
	 * 重写mui.back()，什么都不执行，反之用户返回到入口页；
	 */
	m.back = function() {};
});