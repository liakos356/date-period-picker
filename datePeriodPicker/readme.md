# date-period-picker
Alloy widget to easily pick a date range

### Overview
This is a widget for the Alloy MVC framework of Appcelerator's Titanium platform.

The widget provides a simple date range picker that can be easily styled and configured. It returns an object with the start and end dates that the user selected

### Screenshots

## Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/datePeriodPicker)

Install via [gitTio](http://gitt.io/component/datePeriodPicker):

	$ gittio install datePeriodPicker

Or download the zip file and extract it to your app's `app/widgets/datePeriodPicker` folder and add the dependency to your `config.json`:

	{
		..
		"dependencies": {
		    "datePeriodPicker": "*"
		    ..
		  }
	}

![iOS](https://raw.githubusercontent.com/liakos356/date-period-picker/master/datePeriodPicker/screenshots/ios.PNG?raw=true) ![Android](https://raw.githubusercontent.com/liakos356/date-period-picker/master/datePeriodPicker/screenshots/android.png)

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

| Name                  | Type   | Default value      | Description |
| ------                | ------ | ------             | ------      |
| highlightColor        | ----   | 'gray'             | ----        |
| textBackgroundColor   | ----   | "#F5F5F6"          | ----        |
| startLabelColor       | ----   | 'green'            | ----        |
| endLabelColor         | ----   | 'red'              | ----        |
| fontSize              | ----   | 16                 | ----        |
| buttonWidth           | ----   | Titanium.UI.SIZE   | ----        |
| buttonHeight          | ----   | Titanium.UI.SIZE   | ----        |
| buttonBackgroundColor | ----   | 'transparent'      | ----        |
| backgroundColor       | ----   | 'white',           | ----        |
| buttonFont            | ----   | object Font        | ----        |
| labelsFont            | ----   | 'white'            | ----        |
| pickerFont            | ----   | object Font        | ----        |
| buttonFontColor       | ----   | 'blue'             | ----        |
| minDaysDifference     | ----   | 1,                 | ----        |
| maxDaysDifference     | ----   | 10,                | ----        |
| minDate               | ----   | false              | ----        |
| maxDate               | ----   | false              | ----        |
| labelOK               | ----   | 'OK'               | ----        |
| labelReset            | ----   | 'Reset'            | ----        |
| labelCancel           | ----   | 'cancel'           | ----        |
| resetDate             | ----   | object Date(today) | ----        |
| dateOnBoot            | ----   | object Date(today) | ----        |
| labelStart            | ----   | 'Start'            | ----        |
| labelEnd              | ----   | 'End'              | ----        |
| labelDay              | ----   | 'day'              | ----        |
| labelDays             | ----   | 'days'             | ----        |
| labelSameDay          | ----   | 'Same day'         | ----        |

##### Methods

| Name          | Type     | Return value |
| ------        | ------   | ------       |
| onAndroidback | function | null         |
| onOK          | function | object       |
| onCancel      | function | null         |
