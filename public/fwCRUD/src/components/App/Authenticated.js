import React from 'react';
import { connect } from 'react-redux';
import logout from '../../apis/logout';
import * as fromFolders from '../../ducks/folders';
import Add from './Add';

const Authenticated = ({ name, folders }) => (
  <div>
    <div>Welcome {name}</div>
    <div>
      <button
        onClick={logout}
      >Logout</button>
    </div>
    <Add />
    <ul>
      {folders.map(o => (
        <li key={o.id}>{o.name}</li>
      ))}
    </ul>
  </div>
);
export default connect(
  state => ({
    folders: fromFolders.getFolders(state),
  }),
  null,
)(Authenticated);
