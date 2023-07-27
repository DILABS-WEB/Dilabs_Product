/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../components/products'
import { PRODUCTS1 } from '../components/products'
import { ShopContext } from '../components/shopcontext'
import CartItem from '../components/cartitems'



const cart = (props) => {
  
    const { getTotalCartAmount,addToCart,cartItems } = useContext(ShopContext);
    const TotalAmount = getTotalCartAmount();
  
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
  <hr className='my-5'/>
    <div className="mt-4 p-3 cart-total d-flex justify-content-between">
     <div className="col-6">
     <button>
          Continue Shopping
        </button>
     </div>
      <div>
      <h3>Total </h3>
        <p className="price mb-2">${TotalAmount} </p>
        <p className="price mb-2">₹{82*TotalAmount} </p>
      </div>
      
      
    </div>
</section>
  </>;
}

export default cart