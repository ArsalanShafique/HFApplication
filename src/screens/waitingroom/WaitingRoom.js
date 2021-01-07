import React, {Component} from 'react';
import {View as V, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export class WaitingRoom extends Component {
  render() {
    return (
      <V
        style={{
          flex: 1,
          backgroundColor: 'pink',
        }}></V>
    );
  }
}
