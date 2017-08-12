import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from '../ducks/auth';
import folders from '../ducks/folders';

export default combineReducers({
  auth,
  folders,
  form: formReducer,
});
