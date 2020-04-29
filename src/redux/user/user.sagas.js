import {take,takeLatest ,put ,all ,call } from 'redux-saga/effects';
import  {UserActionTypes} from './user.types';
import {auth, googleProvider , createUserProfileDocument } from '../../firebase/firebase.util';
import {googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure } from './user.action';


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

        const {user} = yield auth.signInWithEmailAndPassword(emailAndPassword.email,emailAndPassword.password);
        const userRef = yield call(createUserProfileDocument,user);
        const userSnapshot = yield userRef.get();
        
        yield put(emailSignInSuccess({
            id:userSnapshot.id,...userSnapshot.data()
        }));

    } catch (error) {
        yield put(emailSignInFailure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function* onEmailSignInStart(emailAndPassword){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,call(signInWithEmail,emailAndPassword));
}

export function* userSagas(){
   yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ]);
}


