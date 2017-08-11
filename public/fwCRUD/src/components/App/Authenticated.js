import React from 'react';
import logout from '../../apis/logout';

const Authenticated = ({ name }) => (
  <div>
    <div>Welcome {name}</div>
    <div>
      <button
        onClick={logout}
      >Logout</button>
    </div>
  </div>
);
export default Authenticated;
