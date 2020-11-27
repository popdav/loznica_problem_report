import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

import {faFire, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    let propsAdmin = props.route ? props.route.params.admin : false;
    console.log(props.route.params);
    console.log(propsAdmin);
    this.state = {
      admin: propsAdmin,
    };
  }

  renderAdminCards = () => {
    return (
      <>
        <Card
          title={'Vanredne Situacije - lista'}
          text={'Lista sa prijavama vanrednih situacija'}
          icon={faFire}
          color={'red'}
          navigation={this.props.navigation}
          navigateTo="Form"
        />
        <Card
          title={'Komunalni problemi - lista'}
          text={'Lista sa prijavama komunalnih problema'}
          icon={faCalendarAlt}
          color={'blue'}
          navigation={this.props.navigation}
          navigateTo="Form"
        />
      </>
    );
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{marginBottom: '20%', marginLeft: '10%', marginRight: '10%'}}>
          {this.state.admin ? this.renderAdminCards() : <View />}
          <Card
            title={'Vanredne Situacije - prijava'}
            text={'Prijavite vanrednu situaciju'}
            icon={faFire}
            color={'red'}
            navigation={this.props.navigation}
            navigateTo="Form"
          />
          <Card
            title={'Komunalni problemi - prijava'}
            text={'Prijavite komunalni problem'}
            icon={faCalendarAlt}
            color={'blue'}
            navigation={this.props.navigation}
            navigateTo="Form"
          />
        </View>
      </ScrollView>
    );
  }
}

export default Menu;
