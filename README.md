# date-period-picker
Alloy widget to easily pick a date range

### Overview
This is a widget for the Alloy MVC framework of Appcelerator's Titanium platform.

The widget provides a simple date range picker that can be easily styled and configured. It returns an object with the start and end dates that the user selected

## Screenshots

![iOS](https://github.com/liakos356/date-period-picker/blob/master/datePeriodPicker/screenshots/ios.PNG?raw=true) ![Android](https://github.com/liakos356/date-period-picker/blob/master/datePeriodPicker/screenshots/android.png?raw=true)

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

| Name                  | Value         | Description |
| ------                | ------        | ------      |
| highlightColor        | string        | ----        |
| maxMonths             | int           | ----        |
| textBackgroundColor   | string        | ----        |
| startLabelColor       | string        | ----        |
| endLabelColor         | string        | ----        |
| fontSize              | int           | ----        |
| buttonWidth           | string OR int | ----        |
| buttonHeight          | string OR int | ----        |
| buttonBackgroundColor | string        | ----        |
| backgroundColor       | string        | ----        |
| buttonFont            | string        | ----        |
| buttonFontColor       | string        | ----        |

##### Methods

| Name                  | Value         | Description |
| ------                | ------        | ----        |
| onAndroidback         | function      | ----        |
| onOK                  | function      | ----        |
| onCancel              | function      | ----        |
