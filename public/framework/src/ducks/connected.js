
import { createAction,  handleAction } from 'redux-actions';
import { ACTION_PREFIX } from '../strings';

export const setConnected = createAction(`${ACTION_PREFIX}SET_CONNECTED`);
export default handleAction(
  setConnected,
  (state, action) => action.payload,
  false,
);
export const getConnected = state => state.connected;
