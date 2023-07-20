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
  <section className="pagination p-3">
  <div className="container-xxl">
    <div className="row ">
    <div className="col-12 d-flex align-items-center justify-content-center">
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
    </div>
  </div>
  </section>
  </>;
}

export default shop