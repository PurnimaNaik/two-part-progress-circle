# two-part-progress-circle
iOS and android compatible, react native progress bar to show two part progress of any process.

![iOS example](https://github.com/PurnimaNaik/two-part-progress-circle/blob/master/src/Images/iOS_Screenshot.png)
![android example](https://github.com/PurnimaNaik/two-part-progress-circle/blob/master/src/Images/Android_Screenshot.png)

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

## Author
Purnima Naik

## Implementation Details


## License
MIT
