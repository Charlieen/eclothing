import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import shopReducer from './shop/shop.reducer';

export default combineReducers({
    user: userReducer,
    shop:shopReducer,
})