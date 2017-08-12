import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as fromFolders from '../../../ducks/folders';
import Add from './Add';
import Folders from './Folders';
import Frame from './Frame';
import Logout from './Logout';
import Welcome from './Welcome';

const Authenticated = ({ name, folders, removeFolder }) => (
  <Frame>
    <Welcome name={name} />
    <Logout />
    <Add />
    <Folders folders={folders} removeFolder={removeFolder} />
  </Frame>
);
Authenticated.propTypes = {
  folders: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  removeFolder: PropTypes.func.isRequired,
};
export default connect(
  state => ({
    folders: fromFolders.getFolders(state),
  }),
  {
    removeFolder: fromFolders.removeFolder,
  },
)(Authenticated);
