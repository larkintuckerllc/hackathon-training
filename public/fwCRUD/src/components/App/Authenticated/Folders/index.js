import React from 'react';
import { PropTypes } from 'prop-types';
import Folder from './Folder';

const Folders = ({ folders, removeFolder }) => (
  <ul>
    {folders.map(folder => (
      <Folder
        folder={folder}
        key={folder.id}
        removeFolder={removeFolder}
      />
    ))}
  </ul>
);
Folders.propTypes = {
  folders: PropTypes.array.isRequired,
  removeFolder: PropTypes.func.isRequired,
}
export default Folders;
