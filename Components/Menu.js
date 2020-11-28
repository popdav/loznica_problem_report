import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

import {faFire, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

// let data = [
//   {
//     id: 7,
//     name: '',
//     municipality: 'LJUBOVIJA',
//     pueblo: 'SAVKOVIĆ',
//     street: 'BOBIJA-RILSKA',
//     stNumber: '10',
//     longitude: 19.57820893, //x
//     latitude: 44.18353901, //y
//     date: '4.11.2020.',
//     desc: 'asdad',
//     img: '',
//   },
//   {
//     id: 9,
//     name: '',
//     municipality: 'MALI ZVORNIK',
//     pueblo: 'BRASINA',
//     street: 'RATARSKA',
//     stNumber: '11',
//     longitude: 19.1555738, //x
//     latitude: 44.44837814, //y
//     date: '4.11.2020.',
//     desc: 'asdad',
//     img: '',
//   },
//   {
//     id: 10,
//     name: '',
//     municipality: 'KRUPANJ',
//     pueblo: 'KRUPANJ',
//     street: 'ANDRIJE HABUŠA',
//     stNumber: '10',
//     longitude: 19.36284673, //x
//     latitude: 44.36768805, //y
//     date: '4.11.2020.',
//     desc: 'asdad',
//     img: '',
//   },
//   {
//     id: 11,
//     name: '',
//     municipality: 'LJUBOVIJA',
//     pueblo: 'TORNIK',
//     street: 'RADOJIČIĆI',
//     stNumber: '2',
//     longitude: 19.57921766, //x
//     latitude: 44.21509614, //y
//     date: '4.11.2020.',
//     desc: 'asdad',
//     img: '',
//   },
//   {
//     id: 12,
//     name: '',
//     municipality: 'LOZNICA',
//     pueblo: 'LOZNICA',
//     street: 'MOKRANJČEVA',
//     stNumber: '1',
//     longitude: 19.23681054, //x
//     latitude: 44.52660758, //y
//     date: '4.11.2020.',
//     desc: 'asdad',
//     img: '',
//   },
// ];

class Menu extends React.Component {
  constructor(props) {
    super(props);
    let propsAdmin = props.route ? props.route.params.admin : false;
    console.log(props.route.params);
    console.log(propsAdmin);
    this.state = {
      admin: propsAdmin,
      data: this.props.data,
    };
  }

  // appendToData = (element) => {
  //   let dataCopy = [...this.state.date];
  //   dataCopy.push(element);
  //   this.setState({data: data});
  // };

  renderAdminCards = () => {
    return (
      <>
        <Card
          title={'Vanredne Situacije - lista'}
          text={'Lista sa prijavama vanrednih situacija'}
          icon={faFire}
          color={'red'}
          data={this.state.data}
          navigation={this.props.navigation}
          navigateTo="List"
        />
        <Card
          title={'Komunalni problemi - lista'}
          text={'Lista sa prijavama komunalnih problema'}
          icon={faCalendarAlt}
          color={'blue'}
          data={this.state.data}
          navigation={this.props.navigation}
          navigateTo="List"
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
            // addToData={this.appendToData}
            navigation={this.props.navigation}
            navigateTo="Form"
          />
          <Card
            title={'Komunalni problemi - prijava'}
            text={'Prijavite komunalni problem'}
            icon={faCalendarAlt}
            color={'blue'}
            // addToData={this.appendToData}
            navigation={this.props.navigation}
            navigateTo="Form"
          />
        </View>
      </ScrollView>
    );
  }
}

export default Menu;
