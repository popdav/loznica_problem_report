import React from 'react';
import {View, Text} from 'react-native';
class Bar extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#00bfff', minHeight: '6%'}}>
        <Text style={{marginLeft: '10%', marginTop: '3%', color: 'white'}}>
          Prijava građana
        </Text>
      </View>
    );
  }
}

export default Bar;
