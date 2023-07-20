import React,{useContext} from 'react'
import ShopContext from '../components/shopcontext';
const cartitems = (props) => {
    const{id,name,Image,partnumber,price} = props.data;
    const {viewProductDetails,addToCart,cartItems}=useContext(ShopContext);
  return <>
  <section className="cart-item p-5">
<div className="container-xxl">
    <div key={id} className="row">
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
                    <img src={Image} alt="" className='img-fluid' />
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