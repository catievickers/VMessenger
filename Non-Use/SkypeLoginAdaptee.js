import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import LoginAdapter from './LoginAdapter';

class SkypeLoginAdaptee extends Component {
  constructor(props) {
    super(props);
    this.renderConfig();
  }

  renderConfig() {
    const iconURL = require('./assets/skypeIcon.png');
    const service = 'Skype';
    this.props.navigation.navigate('Login', { messagingService: service, image: iconURL });
  }
  render() {
    return null;
  }
}

export default SkypeLoginAdaptee;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
