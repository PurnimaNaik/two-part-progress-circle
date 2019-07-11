import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import TwoPartProgressCircle from './src/TwoPartProgressCircle';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Two Part Progress Circle</Text>
          <Text style={styles.subHeader}>Examples</Text>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.progreeCircleContainer}>
          <TwoPartProgressCircle
              categoryOnePercentage={50}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={12.5}
              categoryTwoColor='#0080ED'
              spacer={true}
              spacerValue={2}
              text="25/40"
              textColor="black"
              textSize={15}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.texti}>In progress</Text>
            <Text style={styles.text}>A-ve signup:20</Text>
            <Text style={styles.text}>O-ve signup:5</Text>
            <Text style={styles.text}>total signup:25</Text>
          </View>

          <View style={styles.progreeCircleContainer}>
            <TwoPartProgressCircle
              categoryOnePercentage={75}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={25}
              categoryTwoColor='#0080ED'
              spacer={true}
              spacerValue={2}
              text="40/40"
              textColor="black"
              textSize={15}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.texti}>Study Limit reached</Text>
            <Text style={styles.text}>A-ve signup:30</Text>
            <Text style={styles.text}>O-ve signup:10</Text>
            <Text style={styles.text}>total signup:40</Text>
          </View>

          <View style={styles.progreeCircleContainer}>
            <TwoPartProgressCircle
              categoryOnePercentage={50}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={50}
              categoryTwoColor='#0080ED'
              spacer={true}
              spacerValue={5}
              text="100%"
              textColor="black"
              textSize={15}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.text}>spacerValue=5</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.progreeCircleContainer}>
          <TwoPartProgressCircle
              categoryOnePercentage={20}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={4}
              categoryTwoColor='#0080ED'
              spacer={true}
              spacerValue={2}
              text="120/500"
              textColor="black"
              textSize={10}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.texti}>In progress</Text>
            <Text style={styles.text}>Monitors delivered:100</Text>
            <Text style={styles.text}>Keyboards delivered:20</Text>
            <Text style={styles.text}>total units delivered:120</Text>
          </View>

          <View style={styles.progreeCircleContainer}>
          <TwoPartProgressCircle
              categoryOnePercentage={50}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={50}
              categoryTwoColor='#0080ED'
              spacer={true}
              spacerValue={2}
              text="500/500"
              textColor="black"
              textSize={10}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.texti}>Delivery complete</Text>
            <Text style={styles.text}>Monitors delivered:250</Text>
            <Text style={styles.text}>Keyboards delivered:250</Text>
            <Text style={styles.text}>total units delivered:500</Text>
          </View>
          <View style={styles.progreeCircleContainer}>
            <TwoPartProgressCircle
              categoryOnePercentage={100}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={0}
              categoryTwoColor='#0080ED'
              spacer={true}
              spacerValue={2}
              text="100%"
              textColor="black"
              textSize={15}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.text}>100% circle</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.progreeCircleContainer}>
          <TwoPartProgressCircle
              categoryOnePercentage={20}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={20}
              categoryTwoColor='#0080ED'
              spacer={true}
              spacerValue={2}
              text="2|2|6"
              textColor="black"
              textSize={12}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.texti}>Store A</Text>
            <Text style={styles.text}>Active:2</Text>
            <Text style={styles.text}>Idle:2</Text>
            <Text style={styles.text}>Closed:6</Text>
            <Text style={styles.text}>Total:10</Text>
          </View>

          <View style={styles.progreeCircleContainer}>
          <TwoPartProgressCircle
              categoryOnePercentage={20}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={70}
              categoryTwoColor='#0080ED'
              spacer={true}
              spacerValue={2}
              text="2|7|1"
              textColor="black"
              textSize={12}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.texti}>Store B</Text>
            <Text style={styles.text}>Active:2</Text>
            <Text style={styles.text}>Idle:7</Text>
            <Text style={styles.text}>Closed:1</Text>
            <Text style={styles.text}>Total:10</Text>
          </View>
          <View style={styles.progreeCircleContainer}>
            <TwoPartProgressCircle
              categoryOnePercentage={30}
              categoryOneColor="#003FFF"
              categoryTwoPercentage={60}
              categoryTwoColor="#FFC200"
              spacer={true}
              spacerValue={2}
              text="3|6"
              textColor="black"
              textSize={15}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.text}>Percentage combinations</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.largeProgreeCircleContainer}>
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
              circleRadius={80}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.text}>circleRadius=80</Text>
          </View>

          <View style={styles.largeProgreeCircleContainer}>
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
              circleRadius={80}
              distanceFromEdge={10}
              ringWidth={2}
            />
            <Text style={styles.text}>distanceFromEdge=10</Text>
          </View>
          <View style={styles.largeProgreeCircleContainer}>
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
              circleRadius={80}
              distanceFromEdge={3}
              ringWidth={5}
            />
            <Text style={styles.text}>ringWidth=5</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7'
    
  },
  rowContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 55,
    width: Dimensions.get('window').width
  },
  progreeCircleContainer: {
    padding: 0,
    width: 165,
    alignItems: 'center',
    justifyContent: 'center'
  },
  largeProgreeCircleContainer: {
    padding: 0,
    width: 125,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 11,
    textAlign: 'center'
  },
  texti: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight:'bold',
  },
  headerContainer:{
    paddingBottom:50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom:10,
    color:'black'
  },
  subHeader:{
    fontSize: 20,
  }
});
