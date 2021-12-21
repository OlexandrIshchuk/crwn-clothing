import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD34CJo6s2-j8cXGN29aS2MUIMEE9XBUKQ",
    authDomain: "crwn-db-2bacb.firebaseapp.com",
    projectId: "crwn-db-2bacb",
    storageBucket: "crwn-db-2bacb.appspot.com",
    messagingSenderId: "193357306736",
    appId: "1:193357306736:web:6904276e37b454a2dd0db5",
    measurementId: "G-8C34D5C243"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;