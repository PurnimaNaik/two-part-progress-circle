'use strict';

import { View, Text } from 'react-native';
import React from 'react';
import ProgressCircle from 'react-native-progress-circle'

var stationCount;
var availableSectorMeasure;
var inUseSectorMeasureStartString;
var inUseSectorMeasure;
var offlineSectorMeasureStartString;
var offlineSectorMeasure;
var markerStyle;
var total;
var available;
var inUse;

var availablePercentage;
var inUsePercentage;
var offlinePercentage;

export const CustomPinComponent = React.memo(props => {
  const type = props.type;
    total = 7;
    available = 1;
    inUse = 1;

    const offline = total - (available + inUse);

    availablePercentage=((100*available)/total);
    inUsePercentage=((100*inUse)/total);
    offlinePercentage=(100*offline/total)

    const singleSpacer = 0.28;
    var spacer, spacerCount;

    if (total == available || total == inUse || total == offline) {
      spacer = 0;
      spacerCount = 0;
    } else if (available > 0 && inUse > 0 && offline > 0) {
      spacer = singleSpacer * 3;
      spacerCount = 3;
    } else {
      spacer = singleSpacer * 2;
      spacerCount = 2;
    }

    const totalAndGaps = total + spacer;
    const availableSectorMeasure1 = (available * totalAndGaps) / total;
    const inUseSectorMeasure1 = (inUse * totalAndGaps) / total;
    const offlineSectorMeasure1 = (offline * totalAndGaps) / total;


    const eachGapSectorMeasure1 = spacerCount != 0 ? spacer / spacerCount : 0;
    availableSectorMeasure = (360 * availableSectorMeasure1) / total;
    inUseSectorMeasure = (360 * inUseSectorMeasure1) / total;
    offlineSectorMeasure = (360 * offlineSectorMeasure1) / total;

    const inUseSectorMeasureStart = availableSectorMeasure + singleSpacer;
    const offlineSectorMeasureStart =
      inUseSectorMeasureStart + inUseSectorMeasure + singleSpacer;

    inUseSectorMeasureStartString = inUseSectorMeasureStart + 'deg';
    offlineSectorMeasureStartString = offlineSectorMeasureStart + 'deg';


  return (
    <View style={styles.clusterContainer}>
      {type == 'cluster' ? (
        <Text>{stationCount}</Text>
      ) : (
        <View style={styles.markerContainer}>
          <View
            style={[
              styles.progressCircleOfflineContainer,
              { transform: [{ rotateZ: offlineSectorMeasureStartString }], opacity: 0.5, },
            ]}
          >
            <ProgressCircle
              percent={0}
              radius={30}
              borderWidth={2}
              color='grey'
              // shadowColor='#D4D4D4'
              shadowColor='grey'
              bgColor="#fff"
            >
            </ProgressCircle>
          </View>


          <View style={styles.progressCircleAvailableContainer}>
            <ProgressCircle
              percent={availablePercentage}
              radius={30}
              borderWidth={2}
              color='green'
              shadowColor="white"
              bgColor="#fff"
            >
            </ProgressCircle>
          </View>


          <View
            style={[
              styles.progressCircleInUseContainer,
              { transform: [{ rotateZ: inUseSectorMeasureStartString }], opacity: 0.5, },
            ]}
          >
              <ProgressCircle
              percent={inUsePercentage}
              radius={30}
              borderWidth={2}
              color='blue'
              shadowColor='#C9C9C9'
              bgColor="#fff"
            >
            </ProgressCircle>
          </View>

          <View style={styles.innerCircle} />
          <Text>{total}</Text>
        </View>
      )}
    </View>
  );
});

const styles = {

  progressContainer:{
    backgroundColor: 'pink',
    flexDirection: 'row'
    
  },

  progressCircleAvailableContainer: {
    position: 'absolute',
    transform: [{ rotateZ: '0deg' }],
  },
  progressCircleInUseContainer: {
    position: 'absolute',
    // transform: [{ rotateZ: '0deg' }],
  },
  progressCircleOfflineContainer: {
    position: 'absolute',
  },
  markerContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    borderRadius: 43,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  clusterContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    borderRadius: 43,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
  clusterText: {
    textAlign: 'center',
  },
  innerCircle: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 26,
    width: 26,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
};


// export const CustomPin;
