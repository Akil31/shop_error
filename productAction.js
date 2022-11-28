// CREATE ACTIONS FROM DEPENT ON ACTION_TYPES,THAT USE FOR ACTION PROCESS 

import {actionType} from '../content/action_type'


// ADD NEW PRODUCTS
export const addProducts = (products) =>{
    return{
        type : actionType.ADD_PRODUCTS,
        payload : products,
    }
};

// DELETE ALL PRODUCTS
export const removeProducts = (product) =>{
    return{
        type : actionType.REMOVE_ALL,
        payload : product,
    }
};

// .GET ALL PROUCTS WITH DETAILS
export const getAllProducts = (product) =>{
    return{
        type : actionType.GET_ALL_PRODUCTS,
        payload : product
    }
};

