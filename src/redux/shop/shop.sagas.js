import { takeEvery,takeLatest ,call,put } from 'redux-saga/effects';
import {ShopActionsDIC}  from './shop.types';
import {fetchCollectionsSuccess,fetchCollectionsFailure }from './shop.actions';
import firebase,{convertCollectionsSnapshotToMap , changeArrayToObject } from '../../firebase/firebase.util';

export function* fetchCollectionsAsync(){
  try {
    const collectionRef = firebase.firestore().collection('collections');
    const snapshot = yield collectionRef.get();
    const result = yield call(convertCollectionsSnapshotToMap,snapshot);
    const collectionMap = yield call(changeArrayToObject,result);
    yield put(fetchCollectionsSuccess(collectionMap));
  
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }

}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionsDIC.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}