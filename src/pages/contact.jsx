/* eslint-disable no-unused-vars */
import React from 'react'

const contact = () => {
  return <>
   <section className="contact-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
      <div className="col-12 text-center">
            <h1 className=" text">Reach Out to Us</h1>
            <p className=' text fs-3'>We are only a step away from you</p>
        </div>
      </div>
    </div>
  </section>
  <div className="contact-wrapper-details p-5">
    <div className="container-xxl">
      <div className="row text-center align-items-center">
        <div className="col-lg-6 col-md-12 p-3">
          <div className="map card m-auto embed-responsive embed-responsive-16by9">
           
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1601323858013!2d77.63479417161896!3d13.025472685639336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1724ceb5a601%3A0x81da607718d55157!2sDilabs%20Systems%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1690454842318!5m2!1sen!2sin"  height="370px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
            <div className="card p-5">
                <h2 className='footer-title mb-3'><b>Contact Us</b></h2>
                  <p className='mb-2'><b>Address:</b> 5AC-418, 1st Floor, 2nd Stage, Ward 27, 5A Cross Road, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043</p>
                  <p className='mb-2'><b>Phone:</b>  <a className='footer-tel' href="tel:+918046601700">Call us at +91-8046601700</a></p>
                  <p className='mb-4'><b>Hours:</b>  From 9 a.m To 6 p.m</p>
                  <p>Dilabs System Pvt Ltd (DILABS) was incorporated in 2002 with the prime vision of making a significant contribution to the Avionics Industry.</p>
                  <p> DILABS is an AS9100 Rev D and CEMILAC Certified Company, which is symbolic of the company’s uncompromised focus on quality and demonstrates its steady fast devotion to what it envisions.</p>
            </div>
          </div>
      </div>
    </div>
  </div>

  <div className="contact-message p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
        <div className="card p-5">
        <h2 className='text-center mb-4'>Leave Us A message</h2>
        <div className=" d-flex align-items-center justify-content-center">
        <div className="row g-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
              </div>
              <div className='col-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                   
              </div>
              <div className="col-12">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Type in your message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='col-12 text-center gap-2'>
                <button id='button-link' type="submit">Submit</button>
                </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </>;
}

export default contact