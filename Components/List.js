import React from 'react';
import {ScrollView, View, Text, Button, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import ListElement from './ListElement';

class List extends React.Component {
  constructor(props) {
    super(props);
    let propsColor = props.route.params ? props.route.params.color : 'blue';
    let propsData = props.route.params ? props.route.params.data : [];

    props.navigation.setOptions({
      title:
        propsColor === 'red'
          ? 'Vanredne situacija - lista'
          : 'Komunalni problemi - lista',
    });

    this.state = {
      data: propsData,
      styles: StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: 300,
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
        latitude: 44.4444,
        longitude: 19.274848,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8,
      },
      position: {
        latitude: 44.5334,
        longitude: 19.223848,
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
            {this.state.data.map((e, i) => {
              return (
                <Marker
                  key={e.id}
                  coordinate={{longitude: e.longitude, latitude: e.latitude}}
                />
              );
            })}
          </MapView>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View>
          {this.renderMap()}
          <View style={{marginTop: 350, marginBottom: 100}}>
            {this.state.data.map((e, i) => {
              return (
                <View key={i}>
                  <ListElement object={e} />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default List;
