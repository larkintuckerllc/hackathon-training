import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromFolders from '../../../ducks/folders';
import * as fromFolderOpen from '../../../ducks/folderOpen';
import Add from './Add';
import Folder from './Folder';
import Folders from './Folders';
import Frame from './Frame';
import Logout from './Logout';
import Welcome from './Welcome';

// FOR PRODUCTION NEED TO LOCK FOLDERS WHEN EDITTING
const Authenticated = ({ name, folders, isFolderOpen, openFolder, removeFolder }) => (
  <Frame>
    <Welcome name={name} />
    <Logout />
    {isFolderOpen ?
    <div>
      <Folder />
    </div> :
    <div>
      <Add />
      <Folders
        folders={folders}
        openFolder={openFolder}
        removeFolder={removeFolder}
      />
    </div>}
  </Frame>
);
Authenticated.propTypes = {
  folders: PropTypes.array.isRequired,
  isFolderOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  openFolder: PropTypes.func.isRequired,
  removeFolder: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    folders: fromFolders.getFolders(state),
    isFolderOpen: fromFolderOpen.getIsFolderOpen(state),
  }),
  {
    openFolder: fromFolderOpen.openFolder,
    removeFolder: fromFolders.removeFolder,
  },
)(Authenticated);
