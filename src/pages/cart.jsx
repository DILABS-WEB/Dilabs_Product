/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../components/products'
import { PRODUCTS1 } from '../components/products'
import { ShopContext } from '../components/shopcontext'
import CartItem from '../components/cartitems'
import { Link, Navigate } from 'react-router-dom'
import checkout from './checkout'




const cart = (props) => {
  
    const { getTotalCartAmount,getTotalCartProducts,clearCart,cartItems } = useContext(ShopContext);
    const TotalAmount = getTotalCartAmount();
    const totalProducts =getTotalCartProducts();

    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
      if (window.innerWidth < 576) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  
    window.addEventListener("resize", handleResize)
  

  return <>
   {TotalAmount > 0 ?
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
       <div className='mb-3 text-center p-3'>
              <Link onClick={() => clearCart(id)}>Clear Cart</Link>
                </div>
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
      <p>Total Products: <span className="price my-2">{totalProducts}</span> </p>
        <p className="price mb-2">${TotalAmount} </p>
        <p className="price mb-4">₹{82*TotalAmount} </p>
        <button
              onClick={() => navigate("/checkout")}
              className="mt-5"
            >
              {isMobile ? "Check Out" : "Proceed to Checkout"}
            </button>
      </div>
      
      
    </div>
</section>
   :
   <section className='p-3'>
    <div className="container-xxl">
      <div className="text-center">
        <h3>Your Cart Is Empty</h3>
        <p>Click here to <Link to={'/shop'}>add items</Link> 
        </p>
      </div>
    </div>
   </section>
   }
  </>;
}

export default cart