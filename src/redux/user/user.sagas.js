import {take,takeLatest ,put ,all ,call } from 'redux-saga/effects';
import  {UserActionTypes} from './user.types';
import {auth, googleProvider , createUserProfileDocument } from '../../firebase/firebase.util';
import {googleSignInSuccess,
     googleSignInFailure, 
     emailSignInSuccess,
      emailSignInFailure ,
      setCurrentUser ,
      signUpStart,
      signUpSuccess,
      signUpFailure
    } from './user.action';


export function* signInWithGoogle () {
    try {   
        googleProvider.setCustomParameters({ prompt: 'select_account'});
       const { user } = yield auth.signInWithPopup(googleProvider);
       const userRef = yield call(createUserProfileDocument,user);
       const userSnapshot = yield userRef.get();

      yield put(googleSignInSuccess({
           id:userSnapshot.id, ...userSnapshot.data()
       }));

    } catch (error) {
       yield put(googleSignInFailure(error))
    }
}

// event.preventDefault();
// const {email,password} = this.state;
// auth.signInWithEmailAndPassword(email,password)
// .then(()=>{
//     this.setState({email:'',password:''});
//     this.props.history.push('/');
// })
// .catch(e=>console.log(e));

export function* signInWithEmail(emailAndPassword){

    try {
        console.log('signInWithEmail....');
        //debugger;
        const {user:{email,displayName,uid}} = yield auth.signInWithEmailAndPassword(emailAndPassword.payload.email,emailAndPassword.payload.password);
        console.log(uid);
        const userRef = yield call(createUserProfileDocument,{email,displayName,uid});
        const userSnapshot = yield userRef.get();
        
        yield put(emailSignInSuccess({
            id:userSnapshot.id,...userSnapshot.data()
        }));

    } catch (error) {
        yield put(emailSignInFailure(error));
    }
}
export function* signOut(){
    yield auth.signOut();
    yield put(setCurrentUser(null));
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

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* onSignOut(){
    yield takeLatest(UserActionTypes.SIGN_OUT,signOut);
}
export function* onSignUp(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp);
}

export function* userSagas(){
   yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOut),
        call(onSignUp)
    ]);
}


