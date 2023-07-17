import React from 'react'
import {TfiLocationPin} from 'react-icons/tfi'
import {FiPhoneCall} from 'react-icons/fi'
import {AiFillFacebook,AiOutlineMail,AiOutlineFieldTime,AiFillLinkedin} from 'react-icons/ai'
import {RiChatFollowUpFill} from 'react-icons/ri'


const footer = () => {
  return <>
  <div className="footer p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="col-4 d-flex flex-column ">
          <h2 className='mb-5 text-light'>Contact Us</h2> 
          <div className="footer-details">    
          <p className='mb-3  fw-b'><b><TfiLocationPin className='fs-2 m-1'/></b><b >Address:</b><b>M/ s DILABS SYSTEMS PVT. LTD.#5AC-418, 1st Floor, 5A Cross, 2nd Stage, Kalyan Nagar, HRBR Layout, Banaswadi, Bangalore-560043, Karnataka, India.</b></p>
          
          <p className='mb-3  fw-b'><b><FiPhoneCall className='fs-2 m-1'/></b><b >Phone:</b><b><a  href="tel:+91 8046601700/796">+91 80 46601700 – 796. </a></b></p>
          
          <p className='mb-3  fw-b'><b><AiOutlineMail className='fs-2 m-1'/></b><b >Email:</b><b><a className='text-decoration-none' href="mailto:info@dilabs.in">info@dilabs.in</a></b></p>
          <p className='mb-3  fw-b'><b><AiOutlineFieldTime className='fs-2 m-1'/></b><b >Hours Open:</b><b>From 9:00 A.m to 6:00 P.m</b></p>
          
          <p className='mb-3  fw-b'><b><RiChatFollowUpFill className='fs-2 m-1'/></b><b >Follow us:</b> </p>
          <div className="social-icon justify-content-around">
<a className='fs-2 m-1 text-light' href="http://www.linkedin.com/company/dilabs-system-private-limited/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
<a className='fs-2 m-1 text-light' href="https://www.facebook.com/Datasol-Innovative-Labs-139313079957084/" target="_blank" rel="noopener noreferrer"><AiFillFacebook/></a>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
 
  
  </>;
}

export default footer