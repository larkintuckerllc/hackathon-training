import React from 'react';
import { PropTypes } from 'prop-types';

const Frame = ({ children }) => (
  <div>
    {children}
  </div>
);
Frame.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Frame;
