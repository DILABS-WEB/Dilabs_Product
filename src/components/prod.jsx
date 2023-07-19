import React from 'react'
import {ShopContext} from './shopcontext';
 


const prod = (props) => {
    const{id,name,Image,partnumber,price} = props.data;
  return <>
  <div key={id} className="col-3">
    <div className="card">
        <img src={Image} alt="..."  className='img-fluid card-img-top'/>
       <div className="card-details">
<h2>{name}</h2>
       </div>
    </div>
  </div>
  </>;
}

export default prod