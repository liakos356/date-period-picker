# date-period-picker
Alloy widget to easily pick a date range

### Overview
This is a widget for the Alloy MVC framework of Appcelerator's Titanium platform.

The widget provides a simple date range picker that can be easily styled and configured. It returns an object with the start and end dates that the user selected

### Screenshots

![iOS](https://raw.githubusercontent.com/liakos356/date-period-picker/master/datePeriodPicker/screenshots/ios.png?raw=true) ![Android](https://raw.githubusercontent.com/liakos356/date-period-picker/master/datePeriodPicker/screenshots/android.png)

### Features

### Quick start

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
