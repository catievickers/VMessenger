import React, { Component } from 'react';
import Login from './Login.js';

class VMessengerLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginType: 'VMessenger'
        };
    }
    render() {
        const iconURL = require('../../assets/VMessengerIcon.png');
        return (
            <Login
                loginType={this.state.loginType}
                iconURL={iconURL}
            />
        );
    }
}
export default VMessengerLogin;