import React from 'react';
import {View, PermissionsAndroid} from 'react-native';
import Menu from './Menu';
import Bar from './Bar';
import Form from './Form';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Bar />
      <Menu navigation={navigation} />
    </View>
  );
}

class App extends React.Component {
  componentDidMount(): void {
    this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location permission',
          message: 'This app needs your location to work',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Menu"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              // headerShown: false,
              title: 'Prijava',
            }}
            name="Form"
            component={Form}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
