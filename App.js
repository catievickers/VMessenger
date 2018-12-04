import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import LoginAdapter from './LoginAdapter.js';
import Client from './Client.js';
import NativeLoginAdaptee from './NativeLoginAdaptee';
import SkypeLoginAdaptee from './SkypeLoginAdaptee';

const RootStack = createStackNavigator(
    {
        Login: LoginAdapter,
		Home: Client,
		Native: NativeLoginAdaptee,
		Skype: SkypeLoginAdaptee,
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