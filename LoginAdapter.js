import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SkypeLoginAdaptee} from './SkypeLoginAdaptee';
import {NativeLoginAdaptee} from './NativeLoginAdaptee';


export default class LoginAdapter extends React.Component {
  render() {
	  const loginType = this.props.navigation.getParam('loginType', 'default'); //loginType will determine which adaptee we want to use
	   console.log("log in type:" + loginType);
  if(loginType == 'Native'){
	  //return NativeLoginAdaptee render()
  }   
else if(loginType == 'Skype'){
	//return SkypeLoginAdaptee render()
}
  }
  
  
  login(){
	  Alert.alert('Login Success', 'Login was successful using ' + this.loginType, [{text:'OK', onPress: ()=>console.log('OK pressed')}]);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});