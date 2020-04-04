import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CircleScreen } from './screens/circleScreen';
import { PhotoScreen } from './screens/photoScreen';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        style={{marginBottom: 20}}
        title=" Go to Circles "
        onPress={() => navigation.navigate('Circles')}
      />
      <Button
        title=" Go to Photos "
        onPress={() => navigation.navigate('Photos')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Circles" component={CircleScreen} />
        <Stack.Screen name="Photos" component={PhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;