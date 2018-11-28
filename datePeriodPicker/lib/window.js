exports.createWindow = function(args){
	if(OS_ANDROID){
		return Ti.UI.createView(args);
	}else{
		return Ti.UI.createWindow(args);
	}
}