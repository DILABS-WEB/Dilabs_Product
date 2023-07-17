import React from 'react'
import {BiPhoneCall} from  'react-icons/bi';
import {AiOutlineMail}  from 'react-icons/ai';
import {HiOutlineInboxIn}  from 'react-icons/hi';
import {VscAccount}  from 'react-icons/vsc';
import {CgShoppingCart}  from 'react-icons/cg';
import {Link} from 'react-router-dom'
import logo from "../assets/image/logo.jpg"






const header = () => {
  return <>
  <header className='header-top-strip p-1 px-4 shadow-mc'>
<div className="container-xxl animated-right-left">
  <div className="row align-items-center">
    <div className="col-6 text-white "  >
      <p>Shipping available with Additional charges of $10.</p>
      
    </div>
    <div className="col-6 d-flex justify-content-between " >
    <div >
    <a  className="text-white " href="tel:+91 8046601700/796">Call us: +918046601700/796   </a>
    </div>
    <div >
    
    <a className="text-white animated-x" href="tel:+91 8046601700"><BiPhoneCall className='fs-4 mx-4 text-white'/></a>
    
    <a className="text-white " href="mailto:abhishek@dilabs.in"><AiOutlineMail className='fs-4 mx-4 text-white'/></a>
    
    
    
    </div>
    </div> 
   
  
  </div>
</div>
  </header>
  <header className='header-upper'>
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
<Link to={'/'} >HOME</Link>
<Link to={'shop'} >SHOP</Link>
<Link to={'about'} >ABOUT</Link>
<Link to={'contact'} >CONTACT</Link>
</div>
<div className="nav-links-nav col-3 d-flex align-items-center justify-content-between">
<Link to={'/wishlist'} className='d-flex'> <HiOutlineInboxIn className='fs-3 mx-2'/> 
<p>Wishlist</p>
</Link>
<Link to={'/login'} className='d-flex'> <VscAccount className='fs-3 mx-2'/> 
<p>Account</p>
</Link>
<Link to={'cart'} className='d-flex'> <CgShoppingCart className='fs-3 mx-2'/> 
<p>Cart</p>
</Link>

</div>
</div>
</div>
</header>
  </>;
}

export default header