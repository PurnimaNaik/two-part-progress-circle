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
            <TwoPartProgressCircle />
            <Text style={styles.text}>default</Text>
          </View>

          <View style={styles.progreeCircleContainer}>
            <TwoPartProgressCircle
              categoryOnePercentage={50}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={50}
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
            <Text style={styles.text}>spacer=true</Text>
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
              categoryOnePercentage={50}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={50}
              categoryTwoColor='#0080ED'
              spacer={false}
              spacerValue={2}
              text="100%"
              textColor="black"
              textSize={15}
              textWeight="500"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.text}>spacer=false</Text>
          </View>

          <View style={styles.progreeCircleContainer}>
            <TwoPartProgressCircle
              categoryOnePercentage={0}
              categoryOneColor='#12CC32'
              categoryTwoPercentage={40}
              categoryTwoColor='#0080ED'
              spacer={true}
              spacerValue={2}
              text="4/10"
              textColor="#FF8800"
              textSize={15}
              textWeight="bold"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.text}>Text styles</Text>
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
              categoryOnePercentage={50}
              categoryOneColor="#FF0000"
              categoryTwoPercentage={50}
              categoryTwoColor="#FE4E01"
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
            <Text style={styles.text}>Colors</Text>
          </View>

          <View style={styles.progreeCircleContainer}>
            <TwoPartProgressCircle
              categoryOnePercentage={75}
              categoryOneColor="#9200FF"
              categoryTwoPercentage={25}
              categoryTwoColor="#FF0093"
              spacer={true}
              spacerValue={2}
              text="done!"
              textColor="#00A808"
              textSize={14}
              textWeight="bold"
              circleRadius={60}
              distanceFromEdge={3}
              ringWidth={2}
            />
            <Text style={styles.text}>Percentage combinations</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 55,
    width: Dimensions.get('window').width
  },
  progreeCircleContainer: {
    padding: 0,
    width: 120,
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
