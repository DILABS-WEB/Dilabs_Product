import React from 'react'
import { PRODUCTS } from './products';


const featuredProducts = () => {
  return <>
<div className="row mt-4">
{PRODUCTS.slice(0,15).map(product =>(
    <div className="col-3 mb-3">
        <div key={product.id}>
   <div className="card h-100 m-auto p-3 ">
   <img src={product.Image} alt="" className='card-img-top img-fluid m-auto p-3'/>
   <div className="card-details"> 
  <div className="title">
  <span>{product.partnumber}</span>
   <h5>{product.name }</h5>
  </div>
   <div className="card-footer text-center ">
   <p className='mb-3'> {product.status}</p>
   <p className='text-danger'>{product.price}</p>
   </div>
   
   </div>
  
   
   </div>
</div>
    </div>
))}
</div>
  
  </>;
}

export default featuredProducts