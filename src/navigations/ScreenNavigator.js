/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dashboard} from '../screens/dashboard';
import {GetAppointment} from '../screens/getappointment';
import {GoToCart} from '../screens/gotocart';
import {WaitingRoom} from '../screens/waitingroom';
const Stack = createStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetAppointment"
          component={GetAppointment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GoToCart"
          component={GoToCart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WaitingRoom"
          component={WaitingRoom}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
