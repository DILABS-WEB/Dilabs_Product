import React from 'react'
import {Shopcontext} from './shopcontext'
 

const{id,name,image,partnumber,price,status} = props.data;
const prod = () => {
  return <>
  <div key={id} className="col-3">
    <div className="card">
        <img src={image} alt=""  className='img-fluid card-img-top'/>
       <div className="card-details">
        
       </div>
    </div>
  </div>
  </>;
}

export default prod