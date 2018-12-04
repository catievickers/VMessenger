import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './screens/Home.js' ;
import Message from './screens/Message.js';

import VMessengerLogin from './screens/LoginScreens/VMessenger.js';
import SkypeLogin from './screens/LoginScreens/Skype.js';

import ContactList from './components/ContactList.js';
import AddContact from './components/AddContact.js';



console.disableYellowBox = true;


const RootStack = createStackNavigator(
    {
        Home: Home,
        HomePage: Home,
        VMessenger: VMessengerLogin,
        Skype: SkypeLogin,
        Message: {screen: Message},
        ContactList: ContactList,
        AddContact: AddContact

    },
    {
        initialRouteName: 'Home',
    }
);

const AppRootStack = createAppContainer(RootStack);
class App extends Component {

  render() {
    return (
        
	<AppRootStack />
    );
  }
}

export default App;