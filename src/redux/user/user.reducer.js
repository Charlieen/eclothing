import {UserActionTypes} from './user.types';


const INITIAL_STATE ={
    currentUser:null,
    error:null,
    isLogin:false
}

const userReducer = ( state = INITIAL_STATE, action)=>{
    debugger;
    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_OUT:
        case UserActionTypes.SIGN_UP_SUCCESS:
        return {
            ...state,
            currentUser:action.payload,
            isLogin:false,
            error:null
        }
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        return {
            ...state,
            error:action.payload,
            isLogin:false
        }
        case UserActionTypes.GOOGLE_SIGN_IN_START:
        case UserActionTypes.EMAIL_SIGN_IN_START:
        return {
            ...state,
            isLogin:true
        }

    
        default:
            return state;
    }
}

export default userReducer;
