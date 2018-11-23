let args = $.args
,momentjs = require(WPATH('moment'))
,selectedPeriod = -1
,animationDuration = 300
,matrixBig = Ti.UI.create2DMatrix().scale(1.2,1.2)
,matrixSmall = Ti.UI.create2DMatrix().scale(1,1)
,animationZoom = Ti.UI.createAnimation({
	opacity : 1,
	duration : animationDuration,
	transform : matrixSmall
});

function doChange(e){
	selectedPeriod.setText(e.value);
	calculateDays($.startDate.date, $.endDate.date);
}

function doSelect(){

	$.divStart.backgroundColor = args.textBackgroundColor;
	$.divEnd.backgroundColor = args.textBackgroundColor;

	this.backgroundColor = args.highlightColor;
	selectedPeriod = this;
}

function calculateDays(start,end){

	let _start = momentjs(start)
	,_end = momentjs(end)
	,newStartDay
	,newEndDay
	,dayText
	,differenceDays = _end.diff(_start, 'days')
	,differenceMonths = _end.diff(_start, 'months');

	if(_start.toDate() >= _end.toDate()){

		if(selectedPeriod.type === 'start'){
			newStartDay = momentjs(_start.toDate(),"YYYY-MM-DD");
			newEndDay = momentjs(_start.toDate(),"YYYY-MM-DD").add(1,'days');
		}else{
			newStartDay = momentjs(_end.toDate(),"YYYY-MM-DD").subtract(1,'days');
			newEndDay = momentjs(_end.toDate(),"YYYY-MM-DD");
		}

		newStartDay = newStartDay.toDate();
		newEndDay = newEndDay.toDate();

		$.divStart.setText(newStartDay);
		$.divEnd.setText(newEndDay);
		$.duration.text = '1 ' + L('day','day');

		return;
	}

	if(differenceMonths > args.maxMonths){

		if(selectedPeriod.type === 'start'){
			newStartDay = momentjs(_start.toDate(),"YYYY-MM-DD");
			newEndDay = momentjs(_start.toDate(),"YYYY-MM-DD").add(6,'months');
		}else{
			newStartDay = momentjs(_end.toDate(),"YYYY-MM-DD").subtract(6,'months');
			newEndDay = momentjs(_end.toDate(),"YYYY-MM-DD");
		}

		newStartDayDate = newStartDay.toDate();
		newEndDayDate = newEndDay.toDate();

		$.divStart.setText(newStartDayDate);
		$.divEnd.setText(newEndDayDate);

		differenceDays = newEndDay.diff(newStartDay, 'days')
	}

	if(differenceDays == 1) dayText = L('day','day');
	else dayText = L('days','days');

	$.duration.text = differenceDays + ' ' + dayText;
}

function closeView(){
	$.backgroundView.animate(Ti.UI.createAnimation({
		duration : animationDuration,
		opacity : 0,red
	}),function(){
		$.datePeriodPicker.close({
			animated : false,
		});    
	});
}

function doReset(){

	selectedPeriod = $.divEnd;
	$.divStart.setText(momentjs().subtract(1,'days').format());
	$.divEnd.setText(momentjs().format());
	$.picker.setValue(momentjs().toDate());

	$.divStart.backgroundColor = args.textBackgroundColor;
	$.divEnd.backgroundColor = args.textBackgroundColor;
	$.divEnd.backgroundColor = args.highlightColor;
	$.duration.text = '1 ' + L('day','day');
}

function doOpen(){

	if(OS_ANDROID) $.datePeriodPicker.activity.actionBar.hide();

	$.backgroundView.animate(Ti.UI.createAnimation({
		opacity : 1,
		duration : animationDuration,
	}));

	$.pickerView.animate(animationZoom);
};

(()=> { //constructor

	$.divStart.setText = (value)=>{
		$.startDate.date = value;
		$.startDate.setText(momentjs(value).format('MMMM Do YYYY'));
	};

	$.divEnd.setText = (value)=>{
		$.endDate.date = value;
		$.endDate.setText(momentjs(value).format('MMMM Do YYYY'));
	};

	$.pickerView.zIndex = 1;
	$.pickerView.opacity = 0;
	$.pickerView.transform = matrixBig;

	$.duration.text = '1' + L('day','day');
	$.divStart.setText(momentjs().subtract(1,'days').format());
	$.divEnd.backgroundColor = args.highlightColor;
	$.divEnd.setText(momentjs().format());
	selectedPeriod = $.divEnd;


})();

exports._show = (_args = {}) =>{

	let defaults = {
		onAndroidback : ()=>{
			$.datePeriodPicker.close();
		},
		onOK : (e)=>{
			console.log('————>27:35<————');
		},
		onCancel : ()=>{
			console.log('cancelled');
			$.datePeriodPicker.close();
		},
		highlightColor : 'gray',
		maxMonths : 6,
		textBackgroundColor : "#F5F5F6",
		startLabelColor : 'green',
		endLabelColor : 'red',
		fontSize : 16,
		buttonWidth : Titanium.UI.SIZE,
		buttonHeight : Titanium.UI.SIZE,
		buttonBackgroundColor : 'transparent',
		backgroundColor : 'white',
		buttonFont : {
			fontSize : 16
		},
		buttonFontColor : 'blue'
	};

	for (var prop in defaults) { 
		if (!_args.hasOwnProperty(prop)) _args[prop] = defaults[prop];
	}

	args = _args;

	[$.startText
	,$.startDate
	,$.endText
	,$.endDate
	,$.duration].forEach((label)=>{
		label.setFont({
			fontSize : _args.fontSize,
		});
	});

	[$.btnOK
	,$.btnReset
	,$.btnCancel].forEach((button)=>{
		button.setWidth(_args.buttonWidth);
		button.setHeight(_args.buttonHeight);
		button.setBackgroundColor(_args.buttonBackgroundColor);
		button.setColor(_args.buttonFontColor);
		button.setFont(_args.buttonFont);
	});

	$.btnOK.addEventListener("click", ()=>{
		_args.onOK({
			dateStart : $.startDate.date,
			dateEnd : $.endDate.date
		});
	});
	$.btnCancel.addEventListener("click", _args.onCancel);
	$.datePeriodPicker.addEventListener("androidback", _args.onAndroidback);

	$.pickerView.backgroundColor = _args.backgroundColor;
	$.startText.color = _args.startLabelColor;
	$.endText.color = _args.endLabelColor;
	$.labelDiv.backgroundColor = _args.textBackgroundColor;
	$.divEnd.backgroundColor = _args.highlightColor;

	$.datePeriodPicker.open();
}

exports._close = ()=>{
	$.datePeriodPicker.close();
}