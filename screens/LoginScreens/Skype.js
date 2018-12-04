import React, { Component } from 'react';
import Login from './Login.js';


class SkypeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginType: 'Skype'
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

export default SkypeLogin;