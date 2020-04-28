import { ShopActionsDIC }from './shop.types';
import firebase,{firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.util';

 const startFetchCollections = () =>({
    type:ShopActionsDIC.FETCH_COLLECTIONS_START

})
 const fetchCollectionsSuccess = (collections) =>({
    type:ShopActionsDIC.FETCH_COLLECTIONS_SUCCESS,
    payload:collections
})
 const fetchCollectionsFailure = (message) =>({
    type:ShopActionsDIC.FETCH_COLLECTIONS_FAILURE,
    payload:message
})


const changeArrayToObject=(shopItems)=> {
     
    const test= shopItems.reduce((result,item) => ({...result,[`${item.routeName}`]:item }),{});

    const test2 = shopItems.reduce((acc,collection)=> {
       acc[collection.title.toLowerCase()]= collection;
       return acc;
    },{})

    console.log(test);
    return test;
 }


export const fetchCollections = () => dispatch => {
        console.log('fetchCollection is running...');
        dispatch(startFetchCollections());

        const collcectionRef = firebase.firestore().collection('collections');
   
        collcectionRef.onSnapshot ( async snapshot => {

          const result = convertCollectionsSnapshotToMap(snapshot);
          const resultObject = changeArrayToObject(result);
          dispatch(fetchCollectionsSuccess(resultObject));
        },
        onError =>{
            console.log(onError.message);
            dispatch(fetchCollectionsFailure(onError.message));
        }
    );
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef =firebase.firestore().collection('collections');
        dispatch(startFetchCollections());

        collectionRef.get()
        .then(snapshot=> {
            const result = convertCollectionsSnapshotToMap(snapshot);
            const resultObject = changeArrayToObject(result);
            dispatch(fetchCollectionsSuccess(resultObject));
        })
        .catch(error=> dispatch(fetchCollectionsFailure(error.message)));
    }
}



