import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          marginTop: '15%',
          borderWidth: 1,
          borderColor: 'lightgrey',
          height: 150,
        }}
        onPress={() =>
          this.props.navigation.navigate(this.props.navigateTo, {
            color: this.props.color,
            data: this.props.data,
            // addToData: this.props.addToData,
          })
        }>
        <View
          style={{
            backgroundColor: this.props.color,
          }}>
          <Text
            style={{
              marginLeft: '5%',
              marginTop: '1%',
              marginBottom: '1%',
              color: 'white',
            }}>
            <FontAwesomeIcon color="white" icon={this.props.icon} />{' '}
            {this.props.title}
          </Text>
        </View>
        <Text style={{marginLeft: '5%', marginTop: '5%'}}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Card;
