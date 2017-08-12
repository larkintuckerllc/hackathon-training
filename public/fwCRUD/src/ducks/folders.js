import { combineReducers } from 'redux';
import { createAction,  handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { ACTION_PREFIX } from '../strings';
import * as fromFolders from '../apis/folders';


const addFolderRequest = createAction(`${ACTION_PREFIX}ADD_FOLDER_REQUEST`);
export const addFolderSuccess = createAction(`${ACTION_PREFIX}ADD_FOLDER_SUCCESS`);
export const addFolder = (folder) => (dispatch) => {
  dispatch(addFolderRequest(folder));
  fromFolders.addFolder(folder);
};
const removeFolderRequest = createAction(`${ACTION_PREFIX}REMOVE_FOLDER_REQUEST`);
export const removeFolderSuccess = createAction(`${ACTION_PREFIX}REMOVE_FOLDER_SUCCESS`);
export const removeFolder = (folder) => (dispatch) => {
  dispatch(removeFolderRequest(folder));
};
const byId = handleActions({
  [addFolderSuccess](state, action) {
    const entry = {};
    entry[action.payload.id] = action.payload;
    return {
      ...state,
      ...entry,
    };
  }
}, {});
const ids = handleActions({
  [addFolderSuccess](state, action) {
    return [...state, action.payload.id];
  }
}, []);
export default combineReducers({
  byId,
  ids,
});
const getFoldersIds = state => state.folders.ids;
const getFoldersById = state => state.folders.byId;
export const getFolders = createSelector(
  [getFoldersIds, getFoldersById],
  (foldersIds, foldersById) => foldersIds.map(id => foldersById[id]),
);
