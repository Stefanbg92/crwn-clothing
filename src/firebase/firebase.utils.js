import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCcaU0ZVf1ezwNQ-iN4mqrtxRViUGbsEH8",
    authDomain: "crwn-db-1428f.firebaseapp.com",
    databaseURL: "https://crwn-db-1428f.firebaseio.com",
    projectId: "crwn-db-1428f",
    storageBucket: "crwn-db-1428f.appspot.com",
    messagingSenderId: "224317034199",
    appId: "1:224317034199:web:020301dbb55c25c76fea92"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }
            )
        } catch (error){
            console.log('error', error.message);
        }
    }
    return userRef;
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;