import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SimpleApp from './components/SimpleApp';

export default class App extends Component {
  render() {
    return (
      <SimpleApp />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
