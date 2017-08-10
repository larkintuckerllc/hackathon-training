import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../strings';

export default (onAuth, onNotAuth) => {
  firebase.initializeApp(FIREBASE_CONFIG);
  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      onAuth();
    } else {
      onNotAuth();
    }
  });
}
