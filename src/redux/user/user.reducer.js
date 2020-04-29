import {UserActionTypes} from './user.types';


const INITIAL_STATE ={
    currentUser:null,
    error:null,
    isLogin:false
}

const userReducer = ( state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SING_IN_SUCCESS:
        return {
            ...state,
            currentUser:action.payload,
            isLogin:false,
            error:null
        }
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.EMAIL_SING_IN_FAILURE:
        return {
            ...state,
            error:action.payload,
            isLogin:false
        }
        case UserActionTypes.GOOGLE_SIGN_IN_START:
        case UserActionTypes.EMAIL_SING_IN_START:
        return {
            ...state,
            isLogin:true
        }

    
        default:
            return state;
    }
}

export default userReducer;
