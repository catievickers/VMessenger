import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import LoginAdapter from './LoginAdapter';

class NativeLoginAdaptee extends React.Component {
  constructor(props) {
	  super(props);
	  const service = 'VMessenger';
	  const iconURL = require('./assets/VMessengerIcon.png');
    this.props.navigation.navigate('Login',{messagingService: service, image: iconURL });
  }
  
  render(){
	  return null;
  }
}
export default NativeLoginAdaptee;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
