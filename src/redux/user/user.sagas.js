import {take,takeLatest ,put ,all ,call } from 'redux-saga/effects';
import  {UserActionTypes} from './user.types';
import {auth, googleProvider , createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.util';
import { signInSuccess,
         signInFailure, 
         setCurrentUser ,
         signUpStart,
         signOutSuccess,
         signOutFailure,
      signUpSuccess,
      signUpFailure,
      checkUserSession
    } from './user.action';

import { emptyCartStart }from '../cart/cart.actions';    

    export function* getSnapShotFromUserAuth(userAuth){
        try{
          const userRef = yield call(createUserProfileDocument,userAuth);
          const userSnapshot = yield userRef.get();
          yield put(signInSuccess({
               id:userSnapshot.id, ...userSnapshot.data()}));
        } catch (error) {
           yield put(signInFailure(error));
        }
    }

export function* signInWithGoogle () {
    try {   
        googleProvider.setCustomParameters({ prompt: 'select_account'});
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user);
    } catch (error) {
       yield put(signInFailure(error))
    }
}


export function* signInWithEmail(emailAndPassword){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(emailAndPassword.payload.email,emailAndPassword.payload.password);
        yield getSnapShotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
    }       
}

export function* signOut(){
    try {
        yield auth.signOut();
      yield  put(signOutSuccess());
      yield put(emptyCartStart());
    } catch (error) {
      yield  put(signOutFailure(error))
    }

    
}


export function* signUp(user){
    
    debugger;
    console.log(user);
    const{email,password} = user.payload;
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
        console.log(user);
        const userRef = yield call(createUserProfileDocument,user);
        const userSnapshot = yield userRef.get();
        yield put(signUpSuccess({
            id:userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (error) {
        console.log(error.message);
        put(signUpFailure(error));
    }
}

export function* isUserAuthenticated(){

     try {
        const userAuth =  yield getCurrentUser();
        if(!userAuth)return;
        yield getSnapShotFromUserAuth(userAuth);
     } catch (error) {
        put(signInFailure(error));
     }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* onSignOut(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut);
}
export function* onSignUp(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp);
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated);
}

export function* userSagas(){
   yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOut),
        call(onSignUp),
        call(onCheckUserSession)
    ]);
}


