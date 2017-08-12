import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { folder, removeFolder } = this.props;
    removeFolder(folder);
  }
  render() {
    const { folder } = this.props;
    return(
      <li>
        {folder.name} [ <span onClick={this.handleClick}>X</span> ]
      </li>
    );
  }
}
Folder.propTypes = {
  folder: PropTypes.object.isRequired,
  removeFolder: PropTypes.func.isRequired,
}
export default Folder;
