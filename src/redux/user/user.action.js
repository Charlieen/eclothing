import {UserActionTypes} from './user.types';

export const setCurrentUser = user =>({
    type:UserActionTypes.SET_CURRENT_USER,
    payload:user
})

export const googleSignInStart = ()=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_START
});
export const googleSignInSuccess = user => ({
    type:UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
}) 
export const googleSignInFailure = errorMessage =>({
    type:UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload:errorMessage
})
export const emailSignInStart = (emailAndPassword)=>({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
});
export const emailSignInSuccess = user => ({
    type:UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload:user
}) 
export const emailSignInFailure = errorMessage =>({
    type:UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload:errorMessage
})

export const signOut = ()=>({
    type:UserActionTypes.SIGN_OUT,
    payload:null
})

export const signUpStart = (user)=>({
    type:UserActionTypes.SIGN_UP_START,
    payload:user
})
export const signUpSuccess = (user)=>({
    type:UserActionTypes.SIGN_UP_SUCCESS,
    payload:user
})
export const signUpFailure = (errorMessage)=>({
    type:UserActionTypes.SIGN_UP_FAILURE,
    payload:errorMessage
})
