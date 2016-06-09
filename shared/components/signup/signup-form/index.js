'use strict'

import React, { Component, PropTypes } from 'react'

class SignUpForm extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    const userName = this.refs.name;
    const userEmail = this.refs.email;
    const userPassword = this.refs.password;
    if (userName.value && userEmail.value && userPassword.value) {
      this.props.addUser(userName.value, userEmail.value, userPassword.value);
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" ref="name"/>
        <input type="text" placeholder="Email" ref="email"/>
        <input type="password" placeholder="Password" ref="password"/>
        <button href="#" onClick={this.addUser}>Sign Up!</button>
      </div>
    )
  }
}

export default SignUpForm;
