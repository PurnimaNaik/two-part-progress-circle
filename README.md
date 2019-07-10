# two-part-progress-circle
React native progress bar for iOS and android, to show two part progress of any process.

## Features:-
Custom colors
Spacer option between ring arcs
Custom size/radius
Custom ring width
Custom ring distance from edge
Custom text styles
No other dependency other than react native

## Prerequisites
react-native

## Installation:-
npm i two-part-progress-circle

##Usage:-
```
import TwoPartProgressCircle from './src/TwoPartProgressCircle';

<TwoPartProgressCircle /> //-->default

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
 /> //--> all props
```

##Props

##Author
Purnima Naik

##Implementation Details


##LicenseMIT
