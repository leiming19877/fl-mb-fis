/**
 *固定表格头与最左列
 */
define(function(require, exports, module) {
		var body = document.querySelector("body");
		var fixedTable = document.querySelector(".m-main-table");
		if(!fixedTable){
			return ;
		}
		//表格caption
		var caption = fixedTable.querySelector("caption");
		//表格第一个td
		var tdLeft = fixedTable.querySelector(".td-left");
		//表格头部div
		var divHeader = fixedTable.querySelector(".t-header");
		//表格左边div
		var divLeft = fixedTable.querySelector(".t-left");
		//内容div
		var divContent = fixedTable.querySelector(".t-content");
	
		//calculate height for scroll 
		var height = body.clientHeight - fixedTable.offsetTop-
			 -tdLeft.offsetHeight;
		//if cpation exsit
		if(caption){
			height-=caption.offsetHeight;
		}
		height-=90;
		//fixed div for scroll
		divLeft.style.height = height+"px";
		divContent.style.height = height+"px";
		//follow with move
		divContent.addEventListener("scroll",function(){
			var scrollLeft = this.scrollLeft;
			var scrollTop = this.scrollTop;
			divHeader.scrollLeft = scrollLeft;
			divLeft.scrollTop = scrollTop;
		},false);
});