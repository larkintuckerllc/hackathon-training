import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authDone from '../ducks/authDone';
import authenticated from '../ducks/authenticated';

export default combineReducers({
  authDone,
  authenticated,
  form: formReducer,
});
