import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from '../ducks/auth';

export default combineReducers({
  auth,
  form: formReducer,
});
