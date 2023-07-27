import React, { useContext} from 'react'
import { ShopContext } from '../components/shopcontext'
import {BiPhoneCall} from  'react-icons/bi';
import {AiOutlineMail}  from 'react-icons/ai';
import {HiOutlineInboxIn}  from 'react-icons/hi';
import {VscAccount}  from 'react-icons/vsc';
import {CgShoppingCart}  from 'react-icons/cg';
import {Link, useLocation} from 'react-router-dom'
import logo from "../assets/image/Dilabs.png"






const header = () => {
  const {getTotalCartProducts} = useContext(ShopContext);
  const totalProducts =getTotalCartProducts();
  const location =useLocation();
  return <>
  <header className='header-top-strip p-1 px-4 shadow-md'>
<div className="container-xxl animated-right-left">
  <div className="row align-items-center">
    <div className="col-6 text-dark "  >
      <p>Shipping available with Additional charges of $10.</p>
      
    </div>
    <div className="col-6 d-flex justify-content-between " >
    <div >
    <a  className="r" href="tel:+91 8046601700/796">Call us: +91-80-46601700/796  </a>
    </div>
    <div  >
    
    <a className="r animated-x" href="tel:+91 8046601700"><BiPhoneCall className='fs-4 mx-4 '/></a>
    
    <a className="r " href="mailto:abhishek@dilabs.in"><AiOutlineMail className='fs-4 mx-4 '/></a>
    
    
    
    </div>
    </div> 
   
  
  </div>
</div>
  </header>
  <header className='header-upper px-3 sticky-top '>
    <div className="container-xxl">
      <div className="row">
     <div className="col-2 m-auto text-center">
      <Link to='/'><img src={logo} alt="" srcset="" className='img-fluid logo' /></Link>
      
     </div>
     <div className="col-3 d-flex align-items-center mt-3">
     <div className="input-group mb-3">
     <span className="input-group-text" id="basic-addon1">All</span>
  <input type="text" className="form-control p-2" placeholder="Enter Part No./ Keyword" aria-label="Recipient's username" aria-describedby="basic-addon2"/>

    <button className="input-group-button" id="basic-addon2">Search</button>
 
</div>
</div>
<div className="nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
<Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'} >Home</Link>
<Link to={'shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'} >Shop</Link>
<Link to={'about'} className={location.pathname === '/about' ? 'active' : 'inactive'} >About</Link>
<Link to={'contact'} className={location.pathname === '/contact' ? 'active' : 'inactive'} >Contact</Link>
</div>
<div className="nav-links-nav col-3 d-flex align-items-center justify-content-between">

<Link to={'wishlist'} className={location.pathname === '/wishlist' ?  'inactive':'active' }> <div className="d-flex"> <span><HiOutlineInboxIn className='fs-3 mx-2'/> 
</span>
<p>Wishlist</p>
</div>
</Link>

<Link to={'login'} className={location.pathname === '/login' ?  'inactive':'active'}>  <div className='d-flex'> <span><VscAccount className='fs-3 mx-2'/> </span> 
<p>Account</p>
</div>
</Link>
<Link to={'cart'} className={location.pathname === '/cart' ?  'inactive':'active'}>  <div className='d-flex'> <span><CgShoppingCart className='fs-3 mx-2'/> </span> 
<p>Cart <span className="text-danger">
{totalProducts > 0 && `(${totalProducts})` }</span></p>
</div>
</Link>

</div>
</div>
</div>
</header>
  </>;
}

export default header