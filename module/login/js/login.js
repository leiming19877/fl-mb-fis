define(function(require, module, exports) {
	var m = require("mui");
	var app = require("app");
	//require("./login-canvas.js");
	var accountInput = document.getElementById('account');
	var passwordInput = document.getElementById('password');
	var loginButton = document.getElementById('login');
	var forgetPasswordButton = document.getElementById('forgetPassword');
	m.init({
		statusBarBackground: '#f7f7f7'
	});
	m.plusReady(function() {
		var ws = plus.webview.currentWebview();
		if(app.user) {
			accountInput.value = app.user.userName;
			passwordInput.value = app.user.password;
		}
		
		plus.screen.lockOrientation("portrait-primary");
		// close splash
		setTimeout(function() {
			//关闭 splash
			plus.navigator.closeSplashscreen();
		}, 600);

		var backButtonPress = 0;
		m.back = function(event) {
			backButtonPress++;
			if(backButtonPress > 1) {
				plus.runtime.quit();
			} else {
				plus.nativeUI.toast('再按一次退出应用');
			}
			setTimeout(function() {
				backButtonPress = 0;
			}, 1000);
			return false;
		};
	});

	function toMain() {
		var waiting = plus.nativeUI.showWaiting(null,{
			'back':'transmit'
		});
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
		var mainView = plus.webview.create("../../main/html/main.html","main",{
		
		});
		window.setTimeout(function(){
			waiting.close();
			mainView.show();
			var ws = plus.webview.currentWebview();
			ws.close();
		},3000);
	}
	
	
	function toForgetPassword() {
		m.openWindow({
			id: 'forget-password',
			"url": '../../forget-password/html/forget-password.html',
			show: {

			},
			waiting: {
				autoShow: true
			}
		});

	}



	function login() {
		var clientInfo = plus.push.getClientInfo();
		var pushClientId = clientInfo.clientid;
		var deviceId = plus.device.uuid;
		var waiting = plus.nativeUI.showWaiting();
		m.ajax(app.api_url + '/api/login', {
			data: {
				'userName': accountInput.value,
				'password': passwordInput.value,
				'pushClientId':pushClientId,
				'deviceId':deviceId,
				'deviceType':'app'
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				//服务器返回响应，根据响应结果，分析是否登录成功；
				waiting.close();
				if(data.success) {
					app.setToken(data.token);
					app.setUser({
						userName: accountInput.value,
						password: passwordInput.value,
						autoLogin:true
					});
					toMain();
				} else {
					m.toast(data.msg);
				}
			},
			error: function(xhr, type, errorThrown) {
				waiting.close();
				m.toast("网络异常，请重新试试");
			}
		});
	}

	loginButton.addEventListener('click', function(event) {
		login();
	});
	/*forgetPasswordButton.addEventListener('click', function(event) {
		toForgetPassword();
	});*/
	//在android 平台需要，初始化body 样式高度和宽度，不然就会拉伸
	(function(){
		document.body.style.height = document.body.clientHeight+"px";
		document.body.style.width = document.body.clientWidth+"px";
	})();
});