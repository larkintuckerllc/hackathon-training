import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  compose,
  pure,
  setDisplayName,
  setPropTypes,
} from 'recompose';
import * as fromAuthenticated from '../../ducks/authenticated';

const enhance = compose(
  connect(
    state => ({
      authenticated: fromAuthenticated.getAuthenticated(state),
    }),
    {
      setAuthenticated: fromAuthenticated.setAuthenticated,
    },
  ),
  pure,
  setPropTypes({
    authenticated: PropTypes.bool.isRequired,
    setAuthenticated: PropTypes.func.isRequired,
  }),
  setDisplayName('App'),
)
const App = enhance(({ authenticated }) => (
  authenticated ? <div>Authenticated</div> : <div>NOT Authenticated</div>
));
export default App;
