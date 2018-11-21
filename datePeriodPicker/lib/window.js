exports.createWindow = function(args){
	if(OS_ANDROID){
		console.log('————>09:42<————');
		return Ti.UI.createView(args);
	}else{
		console.log('————>09:43<————');
		return Ti.UI.createWindow(args);
	}
}