import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import {config} from '../api/firebase';


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
  //  console.log(userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();



   // console.log(!snapShot.exists);

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

      //  console.log(displayName,email,createdAt);

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

   // console.log('userRef ',userRef);
   // console.log('snapShot ',snapShot);
    return userRef;
}

export const changeArrayToObject=(shopItems)=> {
     
    const test= shopItems.reduce((result,item) => ({...result,[`${item.routeName}`]:item }),{});

    const test2 = shopItems.reduce((acc,collection)=> {
       acc[collection.title.toLowerCase()]= collection;
       return acc;
    },{})

    console.log(test);
    return test;
 }

export  const convertCollectionsSnapshotToMap = collections => { 

    const transformedCollection = collections.docs.map(doc=>{
        const {title,items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    });
    return transformedCollection;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{

    const collectionRef = firestore.collection(collectionKey);
    // collectionRef.add(objectsToAdd);
    const batch  = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
    })
   return await batch.commit();
   
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});

export const  signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);



export default firebase;

  