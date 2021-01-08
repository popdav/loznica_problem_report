import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: 150,
          marginLeft: '10%',
          marginRight: '10%',
          marginTop: '5%',
          alignItems: 'center',
        },
        map: {
          ...StyleSheet.absoluteFillObject,
        },
      }),
      region: {
        latitude: this.props.object.latitude,
        longitude: this.props.object.longitude,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0021,
      },
      position: {
        latitude: this.props.object.latitude,
        longitude: this.props.object.longitude,
      },
    };
  }
  renderMap = () => {
    return (
      <View>
        <View style={this.state.styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={this.state.styles.map}
            region={this.state.region}
            // onPress={this.setMarker}
            // onPoiClick={this.setMarker}
          >
            <Marker coordinate={this.state.position} />
          </MapView>
        </View>
      </View>
    );
  };

  renderImage = () => {
    return (
      <Image
        style={{width: 60, height: 80, marginTop: 0}}
        source={{uri: this.props.object.img}}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          marginTop: '5%',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '75%',
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <View
            style={{
              marginTop: '5%',
              marginLeft: '5%',
              marginRight: '5%',
              marginBottom: '5%',
            }}>
            {this.renderMap()}
          </View>
          <View style={{marginTop: 160, marginLeft: '5%', marginRight: '5%'}}>
            <Text>Id: {this.props.object.id}</Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>Ime i prezime: {this.props.object.name}</Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>Opština: {this.props.object.municipality}</Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>Naselje: {this.props.object.pueblo}</Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>Ulica: {this.props.object.street}</Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>Broj: {this.props.object.stNumber}</Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>Opis: {this.props.object.desc}</Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>
              Slika:{'\n'}
              {this.props.object.img !== '' ? this.renderImage() : <Text />}
            </Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>X: {this.props.object.longitude}</Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>Y: {this.props.object.latitude}</Text>
          </View>
          <View style={{margin: '5%'}}>
            <Text>Datum: {this.props.object.date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ListElement;
