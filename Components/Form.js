import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import ImagePicker from 'react-native-image-crop-picker';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

class Form extends React.Component {
  constructor(props) {
    super(props);
    let propsColor = props.route.params ? props.route.params.color : 'blue';
    props.navigation.setOptions({
      title: propsColor === 'red' ? 'Vanredne situacija' : 'Komunalni problemi',
    });
    this.state = {
      color: propsColor,
      name: '',
      desc: '',
      position: {
        latitude: 44.5334,
        longitude: 19.223848,
      },
      region: {
        latitude: 44.5334,
        longitude: 19.223848,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      locationEdit: false,
      selectedImage: false,
      fullMap: false,
      styles: StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: 200,
          marginLeft: '10%',
          marginRight: '10%',
          marginTop: '20%',
          // width: 400,
          // justifyContent: 'flex-end',
          alignItems: 'center',
        },
        map: {
          ...StyleSheet.absoluteFillObject,
        },
      }),
    };
  }
  getPosition = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        this.setState({
          position: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      (error) => {
        alert(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  componentDidMount(): void {
    this.getPosition();
  }
  renderImage = () => {
    return (
      <Image
        style={{width: 100, height: 150, marginTop: '5%'}}
        source={{uri: this.state.selectedImage}}
      />
    );
  };
  openGallery = async () => {
    try {
      let img = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      console.log(img);
      this.setState({selectedImage: img.path});
    } catch (e) {
      console.log(e);
    }
  };
  fullMap = () => {
    this.setState({
      fullMap: !this.state.fullMap,
      styles: StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: this.state.fullMap ? 200 : 600,
          marginLeft: '10%',
          marginRight: '10%',
          marginTop: '20%',
          // width: 400,
          // justifyContent: 'flex-end',
          alignItems: 'center',
        },
        map: {
          ...StyleSheet.absoluteFillObject,
        },
      }),
    });
  };
  nameChange = (text) => {
    this.setState({name: text});
  };
  descChange = (text) => {
    this.setState({desc: text});
  };
  onSave = () => {
    this.setState({desc: '', name: '', selectedImage: false});
    this.getPosition();
  };
  renderForm = () => {
    return (
      <View>
        <View
          style={{
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: 250,
            alignItems: 'center',
          }}>
          <Text>Ime i Prezime:</Text>
          <TextInput
            style={{borderWidth: 1, width: '100%'}}
            onChangeText={this.nameChange}
            value={this.state.name}
          />

          <Text>Opis:</Text>
          <TextInput
            style={{borderWidth: 1, width: '100%'}}
            onChangeText={this.descChange}
            value={this.state.desc}
          />
        </View>
        <View
          style={{
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '5%',
            alignItems: 'center',
          }}>
          <Button
            style={{marginTop: '5%'}}
            title="Dodaj sliku"
            color={this.state.color}
            onPress={this.openGallery}
          />
          {this.state.selectedImage ? this.renderImage() : <Text />}
        </View>
        <View
          style={{
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '5%',
            alignItems: 'center',
          }}>
          <Button
            title="Sačuvaj"
            color={this.state.color}
            onPress={this.onSave}
          />
        </View>
      </View>
    );
  };
  setMarker = (e) => {
    if (!this.state.fullMap) {
      return;
    }
    this.setState({
      position: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      },
    });
  };
  renderMap = () => {
    return (
      <View>
        <View style={this.state.styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={this.state.styles.map}
            region={this.state.region}
            onPress={this.setMarker}
            onPoiClick={this.setMarker}>
            <Marker coordinate={this.state.position} />
          </MapView>
        </View>
        <View
          style={{
            marginLeft: '10%',
            marginRight: '10%',
            marginTop: '1%',
            alignItems: 'center',
          }}>
          <Text style={{color: 'grey'}}>
            <FontAwesomeIcon
              color={this.state.locationEdit ? 'black' : 'grey'}
              icon={faLocationArrow}
            />
            Lokacija prijave: {this.state.position.longitude.toPrecision(5)}{' '}
            {this.state.position.latitude.toPrecision(5)}
          </Text>
          <Button
            style={{marginTop: '15%'}}
            color={this.state.color}
            title={
              this.state.fullMap ? 'Sačuvaj izmenu' : 'Promeni lokaciju na mapi'
            }
            onPress={this.fullMap}
          />
        </View>
      </View>
    );
  };
  renderAll = () => {
    return (
      <ScrollView>
        {this.renderMap()}
        {this.renderForm()}
      </ScrollView>
    );
  };
  render() {
    return this.state.fullMap ? this.renderMap() : this.renderAll();
  }
}

export default Form;
