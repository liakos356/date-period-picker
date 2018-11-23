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
})
,defaults = {
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
	buttonFontColor : 'blue',

		//new props
	minDaysDifference : 1,
	maxDaysDifference : 10,
	minDate : false,
	maxDate : false,
	labelOK : L('ok','OK'),
	labelReset : L('reset','Reset'),
	labelCancel : L('cancel','Cancel'),
	resetDate : momentjs().toDate(),
	dateOnBoot : momentjs().toDate(),
	labelStart : L('start','Start'),
	labelEnd : L('end','End'),
	labelDay : L('day','day'),
	labelDays : L('days','days'),
	labelSameDay : L('sameDay','Same day')
};

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

	if(_start.toDate() > _end.toDate()){

		if(selectedPeriod.type === 'start'){
			newStartDay = momentjs(_start.toDate(),"YYYY-MM-DD");
			newEndDay = momentjs(_start.toDate(),"YYYY-MM-DD").add(args.minDaysDifference,'days');
		}else{
			newStartDay = momentjs(_end.toDate(),"YYYY-MM-DD").subtract(args.minDaysDifference,'days');
			newEndDay = momentjs(_end.toDate(),"YYYY-MM-DD");
		}

		newStartDay = newStartDay.toDate();
		newEndDay = newEndDay.toDate();

		$.divStart.setText(newStartDay);
		$.divEnd.setText(newEndDay);

		// $.duration.text = '1 ' + L('day','day');

		return;
	}

	if(differenceDays > args.maxDaysDifference){

		if(selectedPeriod.type === 'start'){
			newStartDay = momentjs(_start.toDate(),"YYYY-MM-DD");
			newEndDay = momentjs(_start.toDate(),"YYYY-MM-DD").add(args.maxDaysDifference,'days');
		}else{
			newStartDay = momentjs(_end.toDate(),"YYYY-MM-DD").subtract(args.maxDaysDifference,'days');
			newEndDay = momentjs(_end.toDate(),"YYYY-MM-DD");
		}

		newStartDayDate = newStartDay.toDate();
		newEndDayDate = newEndDay.toDate();

		$.divStart.setText(newStartDayDate);
		$.divEnd.setText(newEndDayDate);
		differenceDays = args.maxDaysDifference;

		// differenceDays = newEndDay.diff(newStartDay, 'days')
	}

	if(differenceDays == 0){
		differenceDays = '';
		dayText = args.labelSameDay;
	}
	else if (differenceDays == 1) dayText = args.labelDay;
	else dayText = args.labelDays;

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

	let text
	,_minDateDiff = args.minDaysDifference;

	if ((_minDateDiff == 0)){
		_minDateDiff = '';
		text = args.labelSameDay;	
	}
	else if(_minDateDiff == 1) text = " " + args.labelDay;
	else text = " " + args.labelDays;

	selectedPeriod = $.divEnd;

	$.divStart.setText(momentjs(args.resetDate).subtract(args.minDaysDifference,' '+ text).format());
	$.divEnd.setText(momentjs(args.resetDate).format());
	$.picker.setValue(momentjs(args.resetDate).toDate());

	$.divStart.backgroundColor = args.textBackgroundColor;
	$.divEnd.backgroundColor = args.textBackgroundColor;
	$.divEnd.backgroundColor = args.highlightColor;
	$.duration.text = args.minDaysDifference + ' ' + text;
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



	selectedPeriod = $.divEnd;

})();

function updateUI(){

	let text;

	// if (args.minDaysDifference > 1) text = " " + args.labelDays;
	if (args.minDaysDifference > 1) text = " " + args.labelDays;
	else text = " " + args.labelDay;

	$.duration.text = args.minDaysDifference + text;
	$.divEnd.backgroundColor = args.highlightColor;
	
	$.divStart.setText(momentjs(args.dateOnBoot).subtract(args.minDaysDifference,'day').format());
	$.divEnd.setText(momentjs(args.dateOnBoot).format());

	[$.startText
	,$.startDate
	,$.endText
	,$.endDate
	,$.duration].forEach((label)=>{
		label.setFont({
			fontSize : args.fontSize,
		});
	});

	[$.btnOK
	,$.btnReset 
	,$.btnCancel].forEach((button)=>{
		button.setWidth(args.buttonWidth);
		button.setHeight(args.buttonHeight);
		button.setBackgroundColor(args.buttonBackgroundColor);
		button.setColor(args.buttonFontColor);
		button.setFont(args.buttonFont);
	});

	$.pickerView.backgroundColor = args.backgroundColor;
	$.startText.color = args.startLabelColor;
	$.endText.color = args.endLabelColor;
	$.labelDiv.backgroundColor = args.textBackgroundColor;
	$.divEnd.backgroundColor = args.highlightColor;

	$.btnOK.title = args.labelOK;
	$.btnReset.title = args.labelReset;
	$.btnCancel.title = args.labelCancel;
	$.startText.text = args.labelStart;
	$.endText.text = args.labelEnd;
}

exports._show = (_args = {}) =>{

	for (var prop in defaults) { 
		if (!_args.hasOwnProperty(prop)) _args[prop] = defaults[prop];
	}

	args = _args;

	updateUI();

	$.btnOK.addEventListener("click", ()=>{
		_args.onOK({
			dateStart : $.startDate.date,
			dateEnd : $.endDate.date
		});
	});

	$.btnCancel.addEventListener("click", _args.onCancel);
	$.datePeriodPicker.addEventListener("androidback", _args.onAndroidback);

	if(!_args.allowFuture){
		var today = new Date();
		$.picker.setMaxDate(today);
	}

	if(_args.minDate) $.picker.setMinDate(_args.minDate);
	if(_args.maxDate) $.picker.setMaxDate(_args.maxDate);

	$.datePeriodPicker.open();
}

exports._close = ()=>{
	$.datePeriodPicker.close();
}