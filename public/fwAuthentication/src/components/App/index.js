import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as fromAuthDone from '../../ducks/authDone';
import * as fromAuthenticated from '../../ducks/authenticated';
import initializeFirebase from '../../apis/initializeFirebase';
import Authenticated from './Authenticated';
import Loading from './Loading';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    const { auth, login, logout } = this.props;
    initializeFirebase(
      () => {
        auth();
        login();
      },
      () => {
        auth();
        logout();
      },
    );
  }
  render() {
    const { authDone, authenticated } = this.props;
    if (!authDone) return <Loading />;
    if (!authenticated) return <Login />;
    return <Authenticated />;
  }
}
App.propTypes = {
  auth: PropTypes.func.isRequired,
  authDone: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    authDone: fromAuthDone.getAuthDone(state),
    authenticated: fromAuthenticated.getAuthenticated(state),
  }),
  {
    auth: fromAuthDone.auth,
    login: fromAuthenticated.login,
    logout: fromAuthenticated.logout,
  },
)(App);
