import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as fromAuth from '../../ducks/auth';
import initializeFirebase from '../../apis/initializeFirebase';
import Authenticated from './Authenticated';
import Loading from './Loading';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    const { login, logout } = this.props;
    initializeFirebase(login, logout);
  }
  render() {
    const { authenticated, authenticating } = this.props;
    if (authenticating) return <Loading />;
    if (!authenticated) return <Login />;
    return <Authenticated />;
  }
}
App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  authenticating: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    authenticated: fromAuth.getAuthenticated(state),
    authenticating: fromAuth.getAuthenticating(state),
  }),
  {
    login: fromAuth.login,
    logout: fromAuth.logout,
  },
)(App);
