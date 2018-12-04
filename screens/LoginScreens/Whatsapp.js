import React, { Component } from 'react';
import Login from './Login.js';

class WhatsAppLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginType: 'WhatsApp'
    }
  }
  render() {

    const iconURL = require('../../assets/skypeIcon.png');
    return (
      <Login
        loginType = {this.state.loginType}
        iconURL = {iconURL}
      />
    );
  }
}

export default WhatsAppLogin;