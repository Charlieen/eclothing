import {takeLatest,put,call,all} from 'redux-saga/effects';
import CartActionTypes from './cart.types';
import { UserActionTypes }  from '../user/user.types';
import { emptyCartSuccess } from './cart.actions';


export function* emptyCartSaga(){
    yield put(emptyCartSuccess());
}

export function* onEmptyCart(){
   yield takeLatest(CartActionTypes.EMPTY_CART_START,emptyCartSaga)
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, emptyCartSaga);
}

export function* cartSagas(){
  yield  all([
        call(onEmptyCart),
        call(onSignOutSuccess)
    ]);
}

