import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import {config} from '../api/firebase';



firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
    console.log(userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(!snapShot.exists);

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        console.log(displayName,email,createdAt);

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error creating user', error.message);
            }
    }

    console.log('userRef ',userRef);
    console.log('snapShot ',snapShot);
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const  signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

  