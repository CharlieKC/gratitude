import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Box = (props) => {
  return (
    <TouchableOpacity style={{flex:1, width:'100%', height: '100%'}}>
      <View style={{...styles.box, ...props.styles}} />
    </TouchableOpacity>
  );
}


const Grid = () => {
  return (
    <View style={styles.container}>
      {/* <Text>This is the circle screen!</Text> */}
      <View style={styles.grid}>
        <View style={styles.column}>
          <Box styles={{ backgroundColor: "red" }} />
          <Box styles={{ backgroundColor: "blue" }} />
          <Box styles={{ backgroundColor: "yellow" }} />
        </View>
        <View style={styles.column}>
          <Box styles={{ backgroundColor: "red" }} />
          <Box styles={{ backgroundColor: "blue" }} />
          <Box styles={{ backgroundColor: "yellow" }} />
        </View>
        <View style={styles.column}>
          <Box styles={{ backgroundColor: "red" }} />
          <Box styles={{ backgroundColor: "blue" }} />
          <Box styles={{ backgroundColor: "yellow" }} />
        </View>
      </View>
    </View>
  )}



export const CircleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the circle screen!</Text>
      <View style={styles.grid}>
        <View style={styles.column}>
          <Grid />
          <Box styles={{backgroundColor: "blue"}} />
          <Box styles={{backgroundColor: "yellow"}} />
        </View>
        <View style={styles.column}>
          <Box styles={{ backgroundColor: "red"}} />
          <Grid />
          <Box styles={{ backgroundColor: "yellow"}} />
        </View>
        <View style={styles.column}>
          <Box styles={{ backgroundColor: "red"}} />
          <Box styles={{ backgroundColor: "blue"}} />
          <Grid />

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: "black",
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box: {
    flex: 1,
    // height: '20%',
    width: '100%',
    margin: 5,
    // paddingBottom: '80%',
    borderRadius: 100,
  },
});
