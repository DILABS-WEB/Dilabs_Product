import React from 'react'
import { useContext } from 'react';
import Shopcontext from './shopcontext';


const cartitems = (props) => {
    const{id,name,Image,partnumber,price} = props.data;
   
  return <>
  <section className="cart-item p-5">
<div className="container-xxl">
    <div  className="row">
        <table>
            <thead>
                <th>Product Image</th>
                <th>Product Details</th>
                <th>Edit</th>
                <th>Coupons</th>
            </thead>
            <tbody>
                <tr>
                   <td>
                    <img src={Image} alt="..."   className='img-fluid' />
                    </td> 
                    <td>
                        <p>{partnumber}</p>
                        <p>{name}</p>
                        <p>{price}</p>

                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  </section>
  </>;
}

export default cartitems