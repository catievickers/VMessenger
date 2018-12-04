import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import {SkypeLoginAdaptee} from './SkypeLoginAdaptee';
import {NativeLoginAdaptee} from './NativeLoginAdaptee';


export default class LoginAdapter extends React.Component {
	constructor(props){
		super(props);
		this.state = {text1:"", text2:""};
	}
  render() {
	  const messagingService = this.props.navigation.getParam('messagingService', 'default'); //messagingService will determine which adaptee we are coming from
	  const iconURL = this.props.navigation.getParam('image', 'default'); //iconURL will determine the file path of the image depending on the messagingService
	  return (
	   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Log in with your {messagingService}</Text>
				<Image
          source={iconURL}
        />
				<TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
		autoCorrect={false}
		textContentType='username'
		placeholder='Username'
        onChange={(text1) => this.setState({text1})}
        value={this.state.text1}
      />
	  
	  <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
		autoCorrect={false}
		textContentType = 'password'
		placeholder='Password'
        onChange={(text2) => this.setState({text2})}
        value={this.state.text2}
      />
	  
                <Button title="Log in" onPress= "login()" />
            </View>
			);
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