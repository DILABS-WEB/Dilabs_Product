import React from 'react'
import {BiPhoneCall} from  'react-icons/bi';
import {AiOutlineMail}  from 'react-icons/ai'

const header = () => {
  return <>
  <header className='header-top-strip p-2 bg-primary'>
<div className="container-xxl animated-right-left">
  <div className="row">
    <div className="col-6 text-white animated-right-left"  >
      <p>Shipping available with Additional charges of $10.</p>
      
    </div>
    <div className="col-6 d-flex justify-content-between " >
    <div >
    <a  className="text-white " href="tel:+91 8046601700/796"> Call us: +918046601700/796  </a>
    </div>
    <div >
    
    <a className="text-white animated-x" href="tel:+91 8046601700"><BiPhoneCall className='fs-4 mx-4 text-white'/></a>
    
    <a className="text-white " href="mailto:abhishek@dilabs.in"><AiOutlineMail className='fs-4 mx-4 text-white'/></a>
    
    
    
    </div>
    </div> 
   
  
  </div>
</div>
  </header>
  </>;
}

export default header