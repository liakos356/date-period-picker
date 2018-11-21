# date-period-picker
Alloy widget to easily pick a date range

### Overview
This is a widget for the Alloy MVC framework of Appcelerator's Titanium platform.

The widget provides a simple date range picker that can be easily styled and configured. It returns an object with the start and end dates that the user selected. It utilizes the amazing moment.js library, which is highly configurable. 
By default, the dates are never overlapped and have a minimun of 1 day difference and a maximum of 6 months.


## Screenshots

![iOS](https://github.com/liakos356/date-period-picker/blob/master/screenshots/ios.PNG?raw=true) ![Android](https://github.com/liakos356/date-period-picker/blob/master/screenshots/android.png?raw=true)

### Features

## Use it

### Global instance

#### alloy.js

	var datePicker = Alloy.createWidget('datePeriodPicker'});
	
	Alloy.Globals.datePicker = datePicker._show; 
	
	
##### index.js

	Alloy.Globals.datePicker({
		highlightColor : 'red',
		maxMonths : 6,
		onOK : (e)=>{
			console.log(e.dateStart);
			console.log(e.dateEnd);
		},
		onCancel : ()=>{
			console.log('You pressed cancel')
		},
		onAndroidback : ()=>{
			console.log('obviously you have android')
		}
	});
	
### Local instances

#### index.js

	Alloy.createWidget('datePeriodPicker')._show({
		onOK : (e)=>{
			console.log(e.dateStart);
			console.log(e.dateEnd);
		},
		onCancel : ()=>{
			console.log('You pressed cancel')
		},
		onAndroidback : ()=>{
			console.log('obviously you have android')
		}
	});

### API

##### Properties


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

| Name                  | Type          | Description | Default value    |
| ------                | ------        | ------      | ------           |
| highlightColor        | string        | ----        | "gray"           |
| maxMonths             | int           | ----        | 6                |
| textBackgroundColor   | string        | ----        | "#F5F5F6"        |
| startLabelColor       | string        | ----        | "green"          |
| endLabelColor         | string        | ----        | "red"            |
| fontSize              | int           | ----        | 16               |
| buttonWidth           | string OR int | ----        | Titanium.UI.SIZE |
| buttonHeight          | string OR int | ----        | Titanium.UI.SIZE |
| buttonBackgroundColor | string        | ----        | 'transparent'    |
| backgroundColor       | string        | ----        | "white"          |
| buttonFont            | font object   | ----        | {fontSize : 16}  |
| buttonFontColor       | string        | ----        | "blue"           |

##### Methods

| Name          | Type     | Return value |
| ------        | ------   | ------       |
| onAndroidback | function | null         |
| onOK          | function | object       |
| onCancel      | function | null         |