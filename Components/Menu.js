import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

import {faFire, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

class Menu extends React.Component {
  render() {
    return (
      <View style={{marginLeft: '10%', marginRight: '10%'}}>
        <ScrollView>
          <Card
            title={'Vanredne Situacije - prijava'}
            text={'Prijavite vanrednu situaciju'}
            icon={faFire}
            color={'red'}
            navigation={this.props.navigation}
          />
          <Card
            title={'Komunalni problemi - prijava'}
            text={'Prijavite komunalni problem'}
            icon={faCalendarAlt}
            color={'blue'}
            navigation={this.props.navigation}
          />

        </ScrollView>
      </View>
    );
  }
}

export default Menu;
