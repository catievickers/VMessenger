import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import LoginAdapter from './LoginAdapter.js';
import LoginInterface from './LoginInterface.js';

const RootStack = createStackNavigator(
    {
        Login: LoginAdapter,
		Home: LoginInterface,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppRootStack = createAppContainer(RootStack);
class App extends React.Component {

  render() {
    return (
	<AppRootStack />
    );
  }
}

export default App;