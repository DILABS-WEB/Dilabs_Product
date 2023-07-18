import React from 'react'
import { PRODUCTS } from './products';


const featuredProducts = () => {
  return <>
<div className="row">
{PRODUCTS.slice(0,15).map(product =>(
    <div className="col-3">
        <div key={product.id}>
   <div className="card">
   <img src={product.Image} alt="" className='card-img-top img-fluid'/>
   <div className="card-details"> 
   <span>{product.partnumber}</span>
   <h2>{product.name }</h2>
   <div className="card-footer">
   <p>{product.status}</p>
   <p>{product.price}</p>
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