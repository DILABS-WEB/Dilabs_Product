import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero' 

const home = () => {
  return <>
  <section className="banner">
    <div className="container-xxl">
      <div className="row">
        <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-between ">
          <span className='shadow-lg p-3 text-white'>Get the Avionics Product!!</span>
          <h1>Super Deal With Dilabs</h1>
          <h2 className='text-primary'>On all Products</h2>
          <Link to={'shop'} className='button-link mb-3'>Order Now</Link>
        </div>
      </div>
    </div>
  </section>
  <Hero/>

  <section className="featured-products p-5">
<div className="container-xxl">
  <div className="row">
    <div className="text-center">
      <h1>Our Featured Product</h1>
      <p>Inertial Navigation System </p>
    </div>
  </div>

</div>
  </section>
  </>;
}

export default home