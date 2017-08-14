import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }
  handleOpenClick() {
    const { folder, openFolder } = this.props;
    openFolder(folder);
  }
  handleRemoveClick() {
    const { folder, removeFolder } = this.props;
    removeFolder(folder);
  }
  render() {
    const { folder } = this.props;
    return(
      <li>
        <span onClick={this.handleOpenClick}>{folder.name}</span>
        <i style={{ fontSize: '30px', color: 'red' }} className="material-icons" onClick={this.handleRemoveClick}>delete</i>
      </li>
    );
  }
}
Folder.propTypes = {
  folder: PropTypes.object.isRequired,
  openFolder: PropTypes.func.isRequired,
  removeFolder: PropTypes.func.isRequired,
}
export default Folder;