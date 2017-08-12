import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../strings';

firebase.initializeApp(FIREBASE_CONFIG);
const database = firebase.database();
export const foldersRef = database.ref('folders');
export const connectToStore = ({
  addFolderSuccess,
  login,
  logout,
}) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      login(user.displayName);
      foldersRef.on('child_added', data => {
        addFolderSuccess({
          id: data.key,
          ...(data.val()),
        });
      });
    }
    else {
      logout();
      foldersRef.off('child_added');
    }
  });
}
