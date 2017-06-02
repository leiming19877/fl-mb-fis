define(function(require, module, exports) {
	var m = require("mui");
	var app = require("app");
	//设置权限数组数据
	/*m.getJSON(app.api_url + "/api/car/user/getUserForMb?_t=" + new Date().getTime(), {
		token: app.token
	}, function(data) {
		if(data) {
			app.setUser({
				'userId': data.id,
				'userName': data.userName,
				'userCompanyId': (data.company ? data.company.id : ''), //fl系统用户公司id
				'userCompanyName': (data.company ? data.company.companyName : ''), //fl系统用户公司名字
				'userDepId': (data.sysDep ? data.sysDep.id : ''), //fl系统用户部门id
				'userDepName': (data.sysDep ? data.sysDep.depName : ''), //fl系统用户部门名字
			});
		}
	});*/
	//设置字典数据
	m.getJSON(app.api_url + "/api/car/dict/getListAllDicts?_t=" + new Date().getTime(),
		function(data) {
			if(data) {
				var rs = [];
				for(var i = 0; i < data.length; i++) {
					rs.push({
						'label': data[i].label,
						'value': data[i].value,
						'type': data[i].type
					});
				}
				app.setDictListData(rs);
			}
		});
	//设置权限数组数据
	m.getJSON(app.api_url + "/api/car/user/getPrivilegeList?_t=" + new Date().getTime(), {
		token: app.token
	}, function(data) {
		if(data) {
			var rs = [];
			for(var i = 0; i < data.length; i++) {
				rs.push({
					'name': data[i].resName,
					'permission': data[i].resValue
				});
			}
			app.setUser({
				'privilegeList': rs
			});
		}
	});

	//	// 监听下载任务状态 
	function onStateChanged(download, status) {
		if(download.state == 4 && status == 200) {
			// 下载完成 
			plus.nativeUI.confirm("有新版本更新安装。", function(event) {
				var index = event.index;
				if(index === 0) {
					plus.runtime.install(apk_path); // 安装下载的apk文件
				}
			}, "提示", ['确定', '取消']);
		}
	}

	// 创建下载任务
	function createDownloadAndInstall(url) {
		//		var dtask = plus.downloader.createDownload(app.api_url + url);
		//		dtask.addEventListener("statechanged", onStateChanged, false);
		//		dtask.start();
		var dtask = plus.downloader.createDownload(app.api_url + url, {}, function(d, status) {
			if(status == 200) { // 下载成功
				apk_path = d.filename;
				dtask.addEventListener("statechanged", onStateChanged, false);
			} else { //下载失败
				//alert( "Download failed: " + status ); 
			}
		});
		dtask.start();
	}

	function downloadAndInstall() {
		m.getJSON(app.api_url + "/api/car/appUpdate/checkUpdate?_t=" + new Date().getTime(), {
			version: plus.runtime.version
		}, function(data) {
			if(data.isUpdate) {
				if(m.os.plus && m.os.android) {
					plus.nativeUI.confirm("有新版本更新安装。", function(event) {
						var index = event.index;
						if(index === 0) {
							var dtask = plus.downloader.createDownload(app.api_url + data.downloadUrl, {}, function(d, status) {
								if(status == 200) { // 下载成功
									var path = d.filename;
									plus.runtime.install(path); // 安装下载的apk文件
								} else { //下载失败
									//alert( "Download failed: " + status ); 
								}
							});
							dtask.start();
						}
					}, "提示", ['确定', '取消']);
				} else if(m.os.plus && m.os.iphone) {
					plus.nativeUI.confirm("App Store应用市场有新版可以更新。", function(event) {
						var index = event.index;
						if(index === 0) {
							plus.runtime.openURL(data.downloadUrl);
						}
					}, "提示", ['确定', '取消']);
				}
			}
		});
	}
	
	m.plusReady(function(){
		if(app.isCheckUpdate){
			//升级包检测
			window.setTimeout(function(){
				downloadAndInstall();
			},20000);
		}	
	});
})