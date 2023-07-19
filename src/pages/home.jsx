import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero' 
import FeaturedProducts from '../components/featuredProducts'
import NewArrival from '../components/newArrival'
import Blogs from '../components/blogs'

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
   
    <FeaturedProducts/>
  </div>

</div>
  </section>
  <section className='repair'>
    <div className="container-xxl">
      <div className="row">
        <div className="repair-details text-center d-flex  flex-column align-items-center p-3">
        <span className='text-white mt-4'>PRODUCT SOLUTIONS</span>
       <h2 className='text-warning mt-3'>We Provide All Kind of Of Military & Avionics Applications</h2>
        <div className="mt-3">
          <Link to={'shop'} className='button-repair'>Explore Now</Link>
        </div>
        </div>
      </div>
    </div>
  </section>
  <section className="new-products p-5">
<div className="container-xxl">
  <div className="row">
    <div className="text-center">
      <h1>Our New Product</h1>
      <p>Avionics & Military Display Solutions </p>
    </div>
   
    <NewArrival/>
  </div>

</div>
  </section>
<section className="blogs p-3 mb-2">
  <div className="container-xxl">
    <div className="row">
    <div className="text-center mb-4">
      <h1>What Our Customer Say </h1>
      <p>We Support You In Thin Air </p>
    </div>
      <Blogs/>
    </div>
  </div>
</section>
  </>;
}

export default home