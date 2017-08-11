import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../strings';

export default (login, logout) => {
  firebase.initializeApp(FIREBASE_CONFIG);
  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) { login(user.displayName); }
    else { logout(); }
  });
}
