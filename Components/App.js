import React from 'react';
import {View, PermissionsAndroid} from 'react-native';
import Menu from './Menu';
import Bar from './Bar';
import Form from './Form';
import Login from './Login';
import List from './List';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
let data = [
  {
    id: 7,
    name: '',
    municipality: 'LJUBOVIJA',
    pueblo: 'SAVKOVIĆ',
    street: 'BOBIJA-RILSKA',
    stNumber: '10',
    longitude: 19.57820893, //x
    latitude: 44.18353901, //y
    date: '4.11.2020.',
    desc: 'asdad',
    img: '',
  },
  {
    id: 9,
    name: '',
    municipality: 'MALI ZVORNIK',
    pueblo: 'BRASINA',
    street: 'RATARSKA',
    stNumber: '11',
    longitude: 19.1555738, //x
    latitude: 44.44837814, //y
    date: '4.11.2020.',
    desc: 'asdad',
    img: '',
  },
  {
    id: 10,
    name: '',
    municipality: 'KRUPANJ',
    pueblo: 'KRUPANJ',
    street: 'ANDRIJE HABUŠA',
    stNumber: '10',
    longitude: 19.36284673, //x
    latitude: 44.36768805, //y
    date: '4.11.2020.',
    desc: 'asdad',
    img: '',
  },
  {
    id: 11,
    name: '',
    municipality: 'LJUBOVIJA',
    pueblo: 'TORNIK',
    street: 'RADOJIČIĆI',
    stNumber: '2',
    longitude: 19.57921766, //x
    latitude: 44.21509614, //y
    date: '4.11.2020.',
    desc: 'asdad',
    img: '',
  },
  {
    id: 12,
    name: '',
    municipality: 'LOZNICA',
    pueblo: 'LOZNICA',
    street: 'MOKRANJČEVA',
    stNumber: '1',
    longitude: 19.23681054, //x
    latitude: 44.52660758, //y
    date: '4.11.2020.',
    desc: 'asdad',
    img: '',
  },
];

let appendToData = (element) => {
  data.push(element);
};

function LoginScreen({navigation, route}) {
  return (
    <View>
      <Bar />
      <Login navigation={navigation} route={route} />
    </View>
  );
}

function HomeScreen({navigation, route}) {
  return (
    <View>
      <Bar />
      <Menu navigation={navigation} route={route} data={data} />
    </View>
  );
}

function FormScreen({navigation, route}) {
  return (
    <Form
      navigation={navigation}
      route={route}
      data={data}
      addToData={appendToData}
    />
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
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="First"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              title: 'Prijava',
            }}
            name="Form"
            component={FormScreen}
          />
          <Stack.Screen
            options={{
              title: 'Lista',
            }}
            name="List"
            component={List}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
