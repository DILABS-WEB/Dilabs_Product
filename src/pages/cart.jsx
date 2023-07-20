/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../components/products'
import { PRODUCTS1 } from '../components/products'
import { ShopContext } from '../components/shopcontext'
import CartItem from '../components/cartitems'



const cart = () => {
    const { viewProductDetails,addToCart,cartItems } = useContext(ShopContext);

  
  return <>
  <section className="cart">

    <div className="p-3">
    {[...PRODUCTS, ...PRODUCTS1].map((product) => {
        if (cartItems[product.id] != 0) {
            return <CartItem key={product.id} data={product} />;
        }
        })}
        
    
    
    </div>
  </section>
  </>;
}

export default cart