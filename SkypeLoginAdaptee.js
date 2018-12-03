import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class SkypeLoginAdaptee extends React.Component{
  static render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Log in with your Skype</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
