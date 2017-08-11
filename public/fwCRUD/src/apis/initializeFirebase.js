import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../strings';

export default ({
  login,
  logout,
}) => {
  firebase.initializeApp(FIREBASE_CONFIG);
  const database = firebase.database();
  const foldersRef = database.ref('folders');
  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      login(user.displayName);
      foldersRef.on('child_added', data => {
        const folder = data.val();
        window.console.log(folder);
      });
    }
    else {
      logout();
      foldersRef.off('child_added');
    }
  });
}
