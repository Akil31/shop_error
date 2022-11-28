import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {getAllProducts} from '../action/productAction';

export default function Details() {
    const product = useSelector((state)=>state.product)
    const {productId} = useParams();
    console.log(product);
    const {id, title, image, price, desc} = product
    const dispatch =useDispatch();

    const fetchApi = async ()  =>{
        const response = await 
        fetch (`https://fakestoreapi.com/products/${productId}`)
        // .catch((err)=>{
        //     console.log("Err", err)
        // });
        dispatch(getAllProducts(response.data))
    }
     useEffect(()=>{
        if (productId && productId !== "") 
        fetchApi();
     },[])
    return(
        <>
         <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={id}>
        <div class="card p-0 overflow-hidden h-100 shadow" >
               <img src={image} class="card-img-top img-fluid" alt=""/>
           <div class="card-body text-center">
               <h5 class="card-title ">{title}</h5>
               <h5 class="card-title">$ {price}</h5>
               <p class="card-text">{desc}</p>
               {/* <button class="btn btn-success" onClick={()=>addItem(item)}>Add to Cart</button> */}
           </div>
        </div>
       </div>
        </>
    )

// const fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(json=>console.log(json));
//   return (
//     <div>productDetails</div>
//   )

}
