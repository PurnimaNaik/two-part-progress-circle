# Two Part Progress Circle

#### IOS and android compatible, react native progress bar to show two part progress of any process.
<p float="left">
<img alt="ios screenshot" src="https://github.com/PurnimaNaik/two-part-progress-circle/blob/master/src/Images/iOS_Screenshot.png" width="40%">
<img alt="android screenshot" src="https://github.com/PurnimaNaik/two-part-progress-circle/blob/master/src/Images/Android_Screenshot.png" width="40%">
</p>

## Features
- Custom colors
- Spacer option between ring arcs
- Custom size/radius
- Custom ring width
- Custom ring distance from edge
- Custom text styles
- No other dependency other than react native

## Prerequisites
`react-native`

## Installation
`npm i two-part-progress-circle`

([npmjs.com/two-part-progress-circle](https://www.npmjs.com/package/two-part-progress-circle))

## Usage
```
import TwoPartProgressCircle from './src/TwoPartProgressCircle';

//default
 <TwoPartProgressCircle /> 

//all props
 <TwoPartProgressCircle
    categoryOnePercentage={55}
    categoryOneColor='#12CC32'
    categoryTwoPercentage={20}
    categoryTwoColor='#0080ED'
    spacer={true}
    spacerValue={2}
    text="75%"
    textColor="black"
    textSize={15}
    textWeight="500"
    circleRadius={60}
    distanceFromEdge={3}
    ringWidth={2}
 /> 
```

## Props

Name | Description | Type |Default |
--- | --- | --- | --- |
categoryOnePercentage | percentage of first category | Number | 20 | 
categoryTwoPercentage | percentage of first category | Number | 50 | 
categoryOneColor | color of first category arc | String | #12CC32 | 
categoryTwoColor | color of second category arc | String | #0080ED | 
circleRadius | size of the progress circle | Number | 60 | 
distanceFromEdge | gap between the progress ring and background circle | Number | 3 | 
ringWidth | thickness of progress ring | Number | 2 | 
spacer | presence or absence of gap between the arcs | Boolean | true | 
spacerValue | amount of gap between the arcs | Number | 2 | 
text | text to display at the center of the circle | String | 70% | 
textSize | size of text | Number | 15 | 
textColor | color of text | String | black | 
textWeight | font weight of text | String | 500 | 


## Author
[Purnima Naik](https://purnimanaik.github.io)

## Implementation Details
[Example](https://github.com/PurnimaNaik/two-part-progress-circle/blob/master/App.js)

## License
MIT
