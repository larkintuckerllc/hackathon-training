import { createAction,  handleActions } from 'redux-actions';
import { ACTION_PREFIX } from '../strings';

export const login = createAction(`${ACTION_PREFIX}LOGIN`);
export const logout = createAction(`${ACTION_PREFIX}LOGOUT`);
export default handleActions({
  [login]() { return true; },
  [logout]() { return false; },
}, false);
export const getAuthenticated = state => state.authenticated;
