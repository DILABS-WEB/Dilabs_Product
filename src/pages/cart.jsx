/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../components/products'
import { PRODUCTS1 } from '../components/products'
import { ShopContext } from '../components/shopcontext'
import CartItem from '../components/cartitems'



const cart = (props) => {
  
    const { viewProductDetails,addToCart,cartItems } = useContext(ShopContext);

  
  return <>
   <section className='cart-item p-5'>
    <div className="container-xxl">
  <div  className="row">
  <table>
          <thead className='mb-3'>
                <th className='col-3'>Product Image</th>
                <th className='col-3'>Product Details</th>
                <th className='col-3'>Edit</th>
                <th className='col-3'>Coupons</th>
        </thead>
       
        {[...PRODUCTS, ...PRODUCTS1].map((product) => {
    
    if (cartItems[product.id] != 0) {
        return <CartItem key={product.id} data={product} />;
    }
    })}
       
     </table>
  
    
        
    
    
  
  </div>

  </div>

</section>
  </>;
}

export default cart