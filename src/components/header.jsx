import React from 'react'
import {BiPhoneCall} from  'react-icons/bi';
import {AiOutlineMail}  from 'react-icons/ai';
import {Link} from 'react-router-dom'
import logo from "../assets/image/logo.jpg"






const header = () => {
  return <>
  <header className='header-top-strip p-1 '>
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
     <div className="col-2">
      <Link to='/'><img src={logo} alt="" srcset="" className='img-fluid logo' /></Link>
      
     </div>
     <div className="col-5 d-flex align-items-center justify-content-between">
<Link to={'/'} >HOME</Link>
<Link to={'shop'} >SHOP</Link>
<Link to={'about'} >ABOUT</Link>
<Link to={'contact'} >CONTACT</Link>
     </div>
     <div className="col-5"></div>
      </div>
    </div>
  </header>
  </>;
}

export default header