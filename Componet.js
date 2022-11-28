import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Componet() {
   //access the productreducer file from the index(reducer floder) file
   const products = useSelector((state)=>state.allProducts.data);
    const dispatch = useDispatch();
  //  const renderList = () =>{
  //     return(
  //       products.map((product,index) => {
  //         const {id, title, image, price, category} = product;
  //       <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={id}>
  //         <Link to = {`/product/${id}`}>
  //       <div className="card p-0 overflow-hidden h-100 shadow" >
  //              <img src={image} className="card-img-top img-fluid" alt=""/>
  //          <div className="card-body text-center">
  //              <h5 className="card-title ">{title}</h5>
  //              <h5 className="card-title">${price}</h5>
  //              <p className="card-text">{category}</p>
  //              {/* <button className="btn btn-success" onClick={()=>addItem(item)}>Add to Cart</button> */}
  //          </div> 
  //       </div>
  //       </Link>
  //      </div>
  //        })
  //     );
  //       }
        // console.log(renderList);
  return (
   <>
  {/* {renderList} */}
  { products?.map((product,index)=>{
     const {id, title, image, price, category} = product;
     return(
      <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={id}>
      <div className="card p-0 overflow-hidden h-100 shadow" >
             <img src={image} className="card-img-top img-fluid" alt=""/>
         <div className="card-body text-center">
             <h5 className="card-title ">{title}</h5>
             <h5 className="card-title">${price}</h5>
             <p className="card-text">{category}</p>
               <button className="btn btn-success" onClick={()=>dispatch({type:"ADD_PRODUCT"})}>Add to Cart</button>
         </div> 
      </div>
     </div>
    )
  })} 
   </>
  )
}
