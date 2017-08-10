import React from 'react';
import logout from '../../apis/logout';

const Authenticated = () => (
  <button
    onClick={logout}
  >Logout</button>
);
export default Authenticated;
