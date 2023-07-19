import React, { useContext } from 'react'
import {ShopContext} from './shopcontext';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const prod = (props) => {
    const{id,name,Image,partnumber,price} = props.data;
    const {viewProductDetails,addToCart,cartItems}=useContext(ShopContext);
    const cartitemCount=cartItems[id];
  return <>
  <div key={id} className="col-3">
    <div className="card mb-4">
        <img src={Image} alt="..."  className='img-fluid card-img-top'/>
       <div className="card-details p-4">
        <span>{partnumber}</span>
<h5 className='my-3'>{name}</h5>
 <ReactStars
    count={5}
    size={24}
    edit={false}
    value={4}
    activeColor="#cca27e"
    />
    
    <p className='price mb-3'>{price}</p>
   
<div className='d-flex align-items-center justify-content-around mb-2'>
<div className="col-6">
<Link className='view-button' onClick={()=>(viewProductDetails(id))}>View Details</Link>
</div>

<div className="col-6">
<button className='add-button' onClick={()=>(addToCart(id))}>Add To Cart{cartitemCount>0 && `(${cartitemCount})` }</button>
</div>
       
</div>
      
       </div>
    </div>
  </div>
  </>;
}

export default prod