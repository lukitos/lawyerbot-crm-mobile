import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
// import ContactListScreen from './ContactListScreen';

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: DetailScreen }
});

export default SimpleApp;
