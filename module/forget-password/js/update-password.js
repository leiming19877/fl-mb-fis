define(function(require, module, exports) {
	var m = require("mui");
	var app = require("app");
	var $ = require("zepot");
    var checkDataButton = document.getElementById('checkData');
    var errorButton = document.getElementById('error');
    var randomCode =null;
    var token = null;
    var phone = null;
    var newPassword =null;
    m.plusReady(function() {
	    var self = plus.webview.currentWebview();
		randomCode = self.randomCode;
		token = self.token;
		phone = self.phone;
	});

	    
	m.init({
		statusBarBackground: '#f7f7f7',
		swipeBack:true //启用右滑关闭功能

	});
	function hide(objid){
   		 document.getElementById(objid).style.display="none";
	}
	function show(objid){
	    document.getElementById(objid).style.display="block";
	}


	function checkPasswd(s)  
	{  
		var patrn=/^(\w){6,16}$/;  
		if (!patrn.exec(s)) return false
		return true
	}   

    //密码修改成功跳转到登录界面

	function toLogin(){
		//清空密码
		app.user.password='';
		app.setUser(app.user);
		m.openWindow({
			id: 'login',
			"url": '../../login/html/login.html',
			show: {
				aniShow: 'pop-in'
			},
			waiting: {
				autoShow: false
			}
		});
		window.setTimeout(function(){
			var wvs = plus.webview.all();
            for (var i = 0, len = wvs.length; i < len; i++) {
                if (wvs[i].getURL().indexOf("login.html") != -1) {
                    continue;
                }
                wvs[i].close();
              }
		},1000);
	}

	
	
   function updatePasswordByPhone(phone,password,token){
   		var waiting = plus.nativeUI.showWaiting();
   		m.ajax(app.api_url + 'user/updatePasswordByPhone', {
			data: {
				phone: phone,
				password: password,
				token:token,
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 120000, //超时时间设置为10秒；
			success: function(data) {
				//服务器返回响应，根据响应结果，分析是否登录成功；
				waiting.close();
				if(data.success) {
					toLogin();
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
    checkDataButton.addEventListener('click',function(event) {
    	var code = document.getElementById('code').value;
    	newPassword = document.getElementById('newPassword').value;
			if(code!=randomCode){
				    hide('passwordError');
					show('codeError');
					return false;
				}
			if(!checkPasswd(newPassword)){
					hide('codeError');
					show('passwordError');
					return false;
			}
			hide('codeError');
			hide('passwordError');
			updatePasswordByPhone(phone,newPassword,token);
		}
    )
  



});