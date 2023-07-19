import React from 'react'
import b1 from '../assets/image/blog/blog-1.jpg'
import b2 from '../assets/image/blog/blog-2.jpg'
import b3 from '../assets/image/blog/blog-3.jpg'
import b4 from '../assets/image/blog/blog-4.jpg'


const blogs = () => {
  return <>
   <div className="col-3">
    <div className="card p-3">
        <img src={b1} alt="" className='card-img-top img-fluid mb-3 p-5' />
        <div className="card-body">
            <p className='mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas vero itaque quod a corporis et. Tenetur natus sequi cum..</p>
            <button className='button-blog'>
                Learn More
            </button>
        </div>
    </div>
   </div>
   <div className="col-3">
    <div className="card p-3">
        <img src={b2} alt="" className='card-img-top img-fluid mb-3 p-5' />
        <div className="card-body">
            <p className='mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas vero itaque quod a corporis et. Tenetur natus sequi cum..</p>
            <button className='button-blog'>
                Learn More
            </button>
        </div>
    </div>
   </div>
   <div className="col-3">
    <div className="card p-3">
        <img src={b3} alt="" className='card-img-top img-fluid mb-3 p-5' />
        <div className="card-body">
            <p className='mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas vero itaque quod a corporis et. Tenetur natus sequi cum..</p>
            <button className='button-blog'>
                Learn More
            </button>
        </div>
    </div>
   </div>
   <div className="col-3">
    <div className="card p-3">
        <img src={b4} alt="" className='card-img-top img-fluid mb-3 p-5' />
        <div className="card-body">
            <p className='mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas vero itaque quod a corporis et. Tenetur natus sequi cum..</p>
            <button className='button-blog'>
                Learn More
            </button>
        </div>
    </div>
   </div>
  </>;
}

export default blogs