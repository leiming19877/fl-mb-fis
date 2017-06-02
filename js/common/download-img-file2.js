define(function(require) {
	var app = require("app");
	var md5 = require("md5");
	var debug = false;

	/**
	 * 下载图片文件
	 * @param {Object} url 图片url
	 * @param {Object} callback 回调函数
	 */
	function downloadImgFile(url, callback) {
		return _downloadImgFile(url).then(function(path) {
			debugger;
			if(path) {
				callback(path);
			}
		}).catch(function(fileName) {
			debugger;
			return removeFile(fileName);
		}).then(function(fileName) {
			debugger;
			if(fileName) {
				return downloadFile(url, fileName);
			}
		}).then(function(path) {
			debugger;
			if(path) {
				callback(path);
			}
		}).catch(function(err) {
			debugger;
			console.log(err);
		});
	}
	/**
	 * 下载图片文件
	 * @param {Object} url 图片url
	 */
	function _downloadImgFile(url) {
		return new Promise(function(resolve, reject) {
			if(!url) {
				resolve("");
			}
			var fileMd5 = md5(url);
			var fileName = '_downloads/image/' + fileMd5 + '.jpg'; // 缓存本地图片url
			var absoluteImagePath = plus.io.convertLocalFileSystemURL(fileName); // 平台绝对路径

			// new tempImg 用于判断图片文件是否存在
			var tempImg = new Image();
			tempImg.onload = function() {
				if(debug) {
					console.log('存在本地缓存图片文件' + fileName + '，直接显示');
				}
				resolve(absoluteImagePath);
				//reject(fileName);
			};
			tempImg.onerror = function() {
				if(debug) {
					console.log('不存在本地缓存图片文件');
					// 1.2 下载图片缓存到本地
					console.log('开始下载图片' + url + ' 缓存到本地: ' + fileName);
				}
				reject(fileName);

			};
			tempImg.src = absoluteImagePath;
		});

	}

	function removeFile(fileName) {
		return new Promise(function(resolve, reject) {
			plus.io.resolveLocalFileSystemURL(fileName, function(entry) {
				if(debug) {
					console.log("删除文件" + fileName + "，重新下载此文件。");
				}
				entry.remove(); //删除已存在的文件
				resolve(fileName);
			}, function(error) {
				debugger;
				resolve(fileName);
			});
		});
	}

	function downloadFile(url, fileName) {
		return new Promise(function(resolve, reject) {
			var downloadTask = plus.downloader.createDownload(url, {
				'filename': fileName,
				'retry': 0 //不重新进行重试下次
			}, function(download, status) {
				if(status === 200) {
					filePath = plus.io.convertLocalFileSystemURL(download.filename);
					resolve(filePath);
				} else {

					// 下载失败,删除本地临时文件
					if(debug) {
						console.log(fileName + '下载失败,status' + status);
					}
					plus.nativeUI.toast(url + "图片下载失败");
					reject(new Error(url + "图片下载失败"));
				}
			});
			downloadTask.addEventListener("statechanged", function(download, status) {
				//debugger;
				//console.log("downloadedSize:"+download.downloadedSize);
				//console.log("totalSize:"+download.totalSize);

			}, false);
			downloadTask.start();
		});

	}
	return {
		'downloadImgFile': downloadImgFile
	}
});