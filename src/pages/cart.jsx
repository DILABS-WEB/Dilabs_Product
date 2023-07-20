import React, { useContext } from 'react'
import { PRODUCTS, PRODUCTS1 } from '../components/products';
import CartItems from '../components/cartitems';
import ShopContext from '../components/shopcontext';


const cart = () => {
    const [cartItems] = useContext(ShopContext);
  return <>
    <div className="row">
    {[...PRODUCTS, ...PRODUCTS1].map((product)=>{
if (cartItems[product.id] !== 0){
  return <CartItems key={product.id} data={product}/>
}
})}
  </div>
  </>
 
}

export default cart