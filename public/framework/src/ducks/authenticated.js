import { createAction,  handleAction } from 'redux-actions';
import { ACTION_PREFIX } from '../strings';

export const setAuthenticated = createAction(`${ACTION_PREFIX}SET_AUTHENTICATED`);
export default handleAction(
  setAuthenticated,
  (state, action) => action.payload,
  false,
);
export const getAuthenticated = state => state.authenticated;
