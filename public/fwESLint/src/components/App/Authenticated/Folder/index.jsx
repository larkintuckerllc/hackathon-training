import React from 'react';
import PropTypes from 'prop-types';
import Update from './Update';

const Folder = ({ closeFolder }) => (
  <div>
    <button onClick={closeFolder}>Back</button>
    <Update
      closeFolder={closeFolder}
    />
  </div>
);
Folder.propTypes = {
  closeFolder: PropTypes.func.isRequired,
};
export default Folder;
