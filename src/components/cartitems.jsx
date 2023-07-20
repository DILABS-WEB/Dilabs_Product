import React,{useContext} from 'react'
import ShopContext from '../components/shopcontext';
const cartitems = (props) => {
    const{id,name,Image,partnumber,price} = props.data;
    const {viewProductDetails,addToCart,cartItems}=useContext(ShopContext);
  return <>
  
  </>;
}

export default cartitems