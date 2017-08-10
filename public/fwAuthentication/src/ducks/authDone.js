import { createAction,  handleActions } from 'redux-actions';
import { ACTION_PREFIX } from '../strings';

export const auth = createAction(`${ACTION_PREFIX}AUTH_DONE`);
export default handleActions({
  [auth]() { return true; },
}, false);
export const getAuthDone = state => state.authDone;
