import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('x9gA2fdjlhYBFLlHCTIt').collection('cartItems')
.doc('8MUxaTRtawRxpBTvO616');
firestore.doc('/users/x9gA2fdjlhYBFLlHCTIt/cartItems/8MUxaTRtawRxpBTvO616');
firestore.collection('/users/x9gA2fdjlhYBFLlHCTIt/cartItems');


