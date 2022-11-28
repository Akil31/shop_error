// MULTIPLE REDUSER {COMBINEREDUCES}
// pass different boject value to reduce the single value for reducting to send the createstore
import {combineReducers} from 'redux';
import {productReducer, selectedProductReducer} from './productReducer';

const reducers = combineReducers({
    //that get data in productreducer file
    allProducts : productReducer,
    // product: selectedProductReducer
});
export default reducers;