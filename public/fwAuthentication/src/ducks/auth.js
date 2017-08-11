import { combineReducers } from 'redux';
import { createAction,  handleActions } from 'redux-actions';
import { ACTION_PREFIX } from '../strings';

export const login = createAction(`${ACTION_PREFIX}LOGIN`);
export const logout = createAction(`${ACTION_PREFIX}LOGOUT`);
const authenticated = handleActions({
  [login]() { return true; },
  [logout]() { return false; },
}, false);
const authenticating = handleActions({
  [login]() { return false; },
  [logout]() { return false; },
}, true);
export default combineReducers({
  authenticated,
  authenticating,
});
export const getAuthenticated = state => state.auth.authenticated;
export const getAuthenticating = state => state.auth.authenticating;
