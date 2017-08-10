import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authenticated from '../ducks/authenticated';
import connected from '../ducks/connected';

export default combineReducers({
  authenticated,
  connected,
  form: formReducer,
});
