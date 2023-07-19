import React from 'react'
import {ShopContext} from './shopcontext';
import ReactStars from "react-rating-stars-component";


const prod = (props) => {
    const{id,name,Image,partnumber,price} = props.data;
  return <>
  <div key={id} className="col-3">
    <div className="card">
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
    
    <p className='price'>{price}</p>
   
<div className='d-flex align-items-center'>
<button>View Details</button>
       <button>Add To Cart</button>
</div>
      
       </div>
    </div>
  </div>
  </>;
}

export default prod