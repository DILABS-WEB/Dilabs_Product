import React from 'react'
import Shopitems from '../components/shopitems'

const shop = () => {
  return <>
   <section className='shop-banner1 p-2'>
    <div className="container-xxl">
      <div className="row justify-content-center align-items-center ">
        <div className="banner1-details text-center p-5">
       <div>
       <h1 className='text-danger mt-3'>We Provide All Kind of Of Military & Avionics Applications</h1>
       </div>
       <div>
        <h3 className='text-light'>Make Your Order </h3>
       </div>
        
        </div>
      </div>
    </div>
  </section>
  <section className='shop-products p-5'>
  <div className="container-xxl">
    <div className="row">
    <Shopitems/>
    </div>
  </div>

  </section>
  
  </>;
}

export default shop