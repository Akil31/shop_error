import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {axios} from 'react';
import Componet from './Componet'
import { useEffect } from 'react'
import { addProducts } from '../action/productAction';
// import {productReducer} from '../reducer/productReducer';

export default function List() {
  // Access the state any for {componet}
  //get in reducer->index data 
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    //data view on Network 
    const response = await fetch("https://fakestoreapi.com/products")

    // that going to action type and access the action then go to productReducer
    //store the data
    dispatch(addProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products:", products);

  return (
    <div className='container'>
      <Componet />
    </div>
  )
}

