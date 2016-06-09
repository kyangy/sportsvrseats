'use strict'

import React, { Component, PropTypes } from 'react'
import * as Actions from '../../redux/actions/users'
import { connect } from 'react-redux'

import SignUpForm from './signup-form'

class SignUp extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add(name, email, password) {
    this.props.dispatch(Actions.addUserRequest({ name, email, password }));
  }

  render() {
    return (
      <div>
        <div className="container">
          <SignUpForm addUser={this.add} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    users: store.users,
  };
}

export default connect(mapStateToProps)(SignUp);
