import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pass: '',
      admin: false,
    };
  }
  handleUserChange = (text) => {
    this.setState({username: text});
  };

  handlePassChange = (text) => {
    this.setState({pass: text});
  };

  clickAsGuest = () => {
    console.log('click');
    this.props.navigation.navigate('First', {admin: false});
  };

  clickLogin = () => {
    if (this.state.username === 'admin' && this.state.pass === 'admin') {
      this.props.navigation.navigate('First', {
        admin: true,
      });
      this.setState({admin: true});
    } else {
      Alert.alert(
        'Prijava',
        'Loše korisničko ime ili šifra',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    }
  };

  render() {
    return (
      <View
        style={{
          // marginLeft: '10%',
          // marginRight: '10%',
          marginTop: 200,
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
          <View style={{backgroundColor: '#00bfff', minHeight: '6%'}}>
            <Text style={{color: 'white', marginLeft: '5%'}}>Prijava</Text>
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>Korisničko ime:</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
              }}
              onChangeText={(text) => this.handleUserChange(text)}
              // value={value}
            />
          </View>
          <View style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%'}}>
            <Text>Šifra: </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
              }}
              secureTextEntry={true}
              onChangeText={(text) => this.handlePassChange(text)}
              // value={value}
            />
          </View>
          <View
            style={{
              marginTop: '5%',
              marginLeft: '5%',
              marginRight: '5%',
              marginBottom: '5%',
              // flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Button title="OK" color="#00bfff" onPress={this.clickLogin} />
            <TouchableOpacity
              title=""
              color="#00000"
              onPress={this.clickAsGuest}>
              <Text style={{color: '#00bfff'}}>Prijava kao gost</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
