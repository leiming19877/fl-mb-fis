define(function(require, exports, module) {
	var debug = true;//是否开启调试
	//api 调用地址
	var api_url="http://10.124.23.154:8080/front-web";//dev 环境
	//var api_url="http://ztcar-t.zmd.com.cn";//test环境
	//var api_url="http://ztcar-s.zmd.com.cn";//stage环境
	//var api_url="http://ztcar.zmd.com.cn";//prod环境
	//当前用户token
	var token = '';
	var isCheckUpdate = true;//是否检测app版本
	var user = {
		userName:'',//用户名(手机号)
		password:'',//密码
		autoLogin:true,//是否自动登录
		userId:'',//系统用户id
		userName:'',//系统用户名字
		userCompanyId:'',//系统用户公司id
		userCompanyName:'',//系统用户公司名字
		userDepId:'',//系统用户部门id
		userDepName:'',//系统用户部门名字
		privilegeList:[],//权限集合,
		//是否有privilegeName权限
		isPrivilege:function(privilegeName){
			for(var i=0;i<this.privilegeList.length;i++){
				if(privilegeName === this.privilegeList[i].permission){
					return true;
				}
			}
			return false;
		}
	};
	//系统字典表数据列表
	var dictList = [];
	
	try{
		var tmp = null;
		tmp = window.localStorage.getItem("token");
		token = (tmp === null?'':tmp);
		tmp = JSON.parse(window.localStorage.getItem("user")); 
		for(var p in tmp){
			user[p] = tmp[p];
		}
	}catch(e){
		
	}
	
	
	function setToken(token){
		this.token = token;
		window.localStorage.setItem("token",token);
	}
	/**
	 * 设置当前用户
	 * @param {Object} user
	 */
	function setUser(user){
		for(var p in user){
			this.user[p] = user[p];
		}
		window.localStorage.setItem("user",JSON.stringify(this.user));
	}
	
	
	/**
	 * 设置fl字典数据列表
	 * @param {Array} dictListData
	 */
	function setDictListData(dictListData){
		this.dictList  = dictListData;
		window.localStorage.setItem("dictListData",JSON.stringify(dictListData));
	}
	
	/**
	 * 获取 字典对应type 对应value 的显示值
	 * @param {String} type
	 * @param {String} value
	 */
	function getDictDataLabel(type, value) {
		//如果没有字典数据,就从本地读取一次
		if(dictList.length === 0){
			var tmp = null;
			try{
				tmp = JSON.parse(window.localStorage.getItem("dictListData"));
				dictList = (tmp === null?[{label:'',value:'',type:''}]:tmp);
			}catch(e){
				
			}
		}
		var label = ""
		for(var i = 0; i < dictList.length; i++) {
			if(dictList[i].type == type && dictList[i].value == value) {
				label = dictList[i].label;
				break;
			}
		}
		return label;
	}
	
	/**
	 * 获取 字典对应type 
	 * @param {String} type
	 */
	function getDictDataLabelList(type) {
		//如果没有字典数据,就从本地读取一次
		if(dictList.length === 0){
			var tmp = null;
			try{
				tmp = JSON.parse(window.localStorage.getItem("dictListData"));
				dictList = (tmp === null?[{label:'',value:'',type:''}]:tmp);
			}catch(e){
				
			}
		}
		var list = [];
		for(var i = 0; i < dictList.length; i++) {
			if(dictList[i].type == type) {
				list.push(dictList[i]);
			}
		}
		return list;
	}
	return {
		'debug':debug,
		'isCheckUpdate':isCheckUpdate,
		'api_url':api_url,
		'token':token,
		'user':user,
		'setToken':setToken,
		'setUser':setUser,
		'setDictListData':setDictListData,
		'getDictDataLabel':getDictDataLabel,
		'getDictDataLabelList':getDictDataLabelList
	}
});