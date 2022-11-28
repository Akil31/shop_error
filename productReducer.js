// THAT PASS THE VALUE TO THE STORES 
// diplay in redux devtools in chrome 
// that connected with the action_type
import React from 'react'
import { actionType } from '../content/action_type';
import {productList} from '../data/productList';

// const initialState = {
//     products: [
//         {
//             "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
//             "price": 109.95,
//          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 }
//         }
        
//     ],
// };

export const productReducer = (state =productList,action) => {
    switch (action.type) {
        case actionType.ADD_PRODUCTS:
            return { ...state, 
                products: action.payload };
        default:
            return state;
    }
};

export const selectedProductReducer=(state ={},  action) =>{
    switch (action.type) {
        case actionType.GET_ALL_PRODUCTS:
            return {...state, ...action.payload};
        default:
            return state
    }
};




