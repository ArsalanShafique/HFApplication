/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View as V, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export class Dashboard extends Component {
  render() {
    return (
      <V
        style={{
          flex: 1,
          //   backgroundColor: 'gray',
        }}>
        <V
          style={{
            height: hp('10%'),
            width: '100%',
            backgroundColor: '#5C47C4',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: hp('3%'),
              color: 'white',
            }}>
            Dashboard
          </Text>
        </V>
        <V
          style={{
            height: hp('3%'),
          }}></V>
        <V
          style={{
            height: hp('70%'),
            width: '100%',
            // backgroundColor: 'red',
            alignItems: 'center',
          }}>
          <V
            style={{
              height: hp('15%'),
              width: '80%',
              //   backgroundColor: 'green',
              borderWidth: hp('0.2%'),
              borderColor: '#5C47C4',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('GetAppointment');
              }}
              style={{
                height: hp('10%'),
                width: '100%',
                backgroundColor: 'red',
              }}></TouchableOpacity>
            <V
              style={{
                height: hp('5%'),
                width: '100%',
                alignItems: 'center',
              }}>
              <Text>Go to Appointment</Text>
            </V>
          </V>
          <V
            style={{
              height: hp('2%'),
            }}></V>
          <V
            style={{
              height: hp('15%'),
              width: '80%',

              borderWidth: hp('0.2%'),
              borderColor: '#5C47C4',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('GoToCart');
              }}
              style={{
                height: hp('10%'),
                width: '100%',
                backgroundColor: 'red',
              }}></TouchableOpacity>
            <V
              style={{
                height: hp('5%'),
                width: '100%',
                alignItems: 'center',
              }}>
              <Text>Go to Cart</Text>
            </V>
          </V>
          <V
            style={{
              height: hp('2%'),
            }}></V>
          <V
            style={{
              height: hp('15%'),
              width: '80%',

              borderWidth: hp('0.2%'),
              borderColor: '#5C47C4',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('WaitingRoom');
              }}
              style={{
                height: hp('10%'),
                width: '100%',
                backgroundColor: 'red',
              }}></TouchableOpacity>
            <V
              style={{
                height: hp('5%'),
                width: '100%',
                alignItems: 'center',
              }}>
              <Text>Waiting Room</Text>
            </V>
          </V>
        </V>
      </V>
    );
  }
}
