import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

//login screen
class LoginInterface extends React.Component {
	render() {
		return ( 
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Choose a Messaging Service</Text>
                <Button title="VMessenger" onPress={() => this.props.navigation.navigate('Login',{loginType: 'Native'})} />
                <Button title="Skype" onPress={() => this.props.navigation.navigate('Login',{loginType: 'Skype'})} />
            </View>
			);
	}

}
export default LoginInterface;
