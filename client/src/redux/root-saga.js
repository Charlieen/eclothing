import { all, call} from 'redux-saga/effects';
import { shopSagas} from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas} from './cart/cart.sagas';

/**
 * Creates an Effect description that instructs the middleware to run multiple
 * Effects in parallel and wait for all of them to complete. It's quite the
 * corresponding API to standard
 * [`Promise#all`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).
 *
 * #### Example
 *
 * The following example runs two blocking calls in parallel:
 *
 *    import { fetchCustomers, fetchProducts } from './path/to/api'
 *    import { all, call } from `redux-saga/effects`
 *
 *    function* mySaga() {
 *      const [customers, products] = yield all([
 *        call(fetchCustomers),
 *        call(fetchProducts)
 *      ])
 *    }
 */
export default function* rootSaga(){
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ]);
}