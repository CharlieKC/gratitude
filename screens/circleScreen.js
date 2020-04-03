import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Box = (props) => {
  return (
    <View style={{...styles.box, ...props.styles}} />
  );
}

export const CircleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the circle screen!</Text>
      <View style={styles.grid}>
        <View style={styles.column}>
          <Box styles={{ backgroundColor: "red"}} />
          <Box styles={{backgroundColor: "blue"}} />
          <Box styles={{backgroundColor: "yellow"}} />
        </View>
        <View style={styles.column}>
          <Box styles={{ backgroundColor: "red"}} />
          <Box styles={{ backgroundColor: "blue"}} />
          <Box styles={{ backgroundColor: "yellow"}} />
        </View>
        <View style={styles.column}>
          <Box styles={{ backgroundColor: "red"}} />
          <Box styles={{ backgroundColor: "blue"}} />
          <Box styles={{ backgroundColor: "yellow"}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-around',
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
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
