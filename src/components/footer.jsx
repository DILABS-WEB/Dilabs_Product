import React from 'react'
import {TfiLocationPin} from 'react-icons/tfi'
import {FiPhoneCall} from 'react-icons/fi'
import {AiFillFacebook,AiOutlineMail,AiOutlineFieldTime,AiFillLinkedin} from 'react-icons/ai'
import {RiChatFollowUpFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const footer = () => {
  return <>
  <footer className="footer p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-4 d-flex flex-column ">
          <h3 className='mb-4 '>Contact Us</h3> 
          <div className="footer-details">    
          <p className='mb-3  fw-b'><b><TfiLocationPin className='fs-2 m-1'/></b><b >Address:</b><b>M/ s DILABS SYSTEMS PVT. LTD.#5AC-418, 1st Floor, 5A Cross, 2nd Stage, Kalyan Nagar, HRBR Layout, Banaswadi, Bangalore-560043, Karnataka, India.</b></p>
          
          <p className='mb-3  fw-b'><b><FiPhoneCall className='fs-2 m-1'/></b><b >Phone:</b><b><a  href="tel:+91 8046601700/796" target="_blank">+91 8046601700/796 </a></b></p>
          
          <p className='mb-3  fw-b'><b><AiOutlineMail className='fs-2 m-1'/></b><b >Email:</b><b><a className='text-decoration-none' href="mailto:info@dilabs.in" target="_blank">info@dilabs.in</a></b></p>
          <p className='mb-3  fw-b'><b><AiOutlineFieldTime className='fs-2 m-1'/></b><b >Hours Open:</b><b>From 9:00 A.m to 6:00 P.m</b></p>
          
          <p className='mb-3  fw-b'><b><RiChatFollowUpFill className='fs-2 m-1'/></b><b >Follow us:</b> </p>
          <div className="col-4 d-flex social-icon mb-3 justify-content-around">
<Link className='fs-2 m-1 ' to="http://www.linkedin.com/company/dilabs-system-private-limited/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></Link>
<Link className='fs-2 m-1 ' to="https://www.facebook.com/Datasol-Innovative-Labs-139313079957084/" target="_blank" rel="noopener noreferrer"><AiFillFacebook/></Link>
          </div>
          </div>
          </div>
          <div className='col-2'>
            <h3 className='mb-4'> About</h3>
            <div className="footer-details d-flex flex-column ">
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>About Us</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>Delivery</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>Privacy policy</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>Tax Policy</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>Fee Policy</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>Terms & Conditions</Link>
            </div>
          </div>
          <div className='col-2'>
            <h3 className='mb-4'> Account</h3>
            <div className="footer-details d-flex flex-column ">
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>Profile</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>View Cart</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>My Orders</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>My Wishlist</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>Help</Link>
              <Link to='https://dilabs.in/about-us/ target="_blank"' className='mb-3'>Coupons</Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="row d-flex justify-content-between">
          <div className="col-9">
            <Link  to="https://abhishekkumar-portfolio.github.io/Portfolio/" target="_blank"><p>&copy;Developed by Abhishek Kumar @ 2023</p></Link>
          </div>
          <div className='col-3 d-flex justify-content-around '>
<Link to='https://privacy-policy.in' target="_blank">Privacy Policy</Link>
<Link to='https://privacy-policy.in' target="_blank">Terms of Use</Link>
<Link to="https://abhishekkumar-portfolio.github.io/Portfolio/" target="_blank">Contact Me</Link>
          </div>
        </div>
      </div>
    </footer>
 
  
  </>;
}

export default footer