import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialCarousel.css'; // Import your CSS file
import './boot.css';
import {img4} from '../assets'

// Custom Next Arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-next" onClick={onClick} style={{ width: '100px' }}></button>
  );
};

// Custom Prev Arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-prev" onClick={onClick} style={{ width: '100px' }}></button>
  );
};

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <div className='img_1'>
          <img src={"https://mediacity.co.in/delici/static/media/slider-3.e1ecb94135ee27af4d51.jpg"} alt="" />
          <div className="text-overlay">
           <h2>Delightful Experience</h2>
           <div className="pattern-image">
            <img src="https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg" alt="mySvgImage"/>
            </div>
            <div className='text1'>Flavors Inspired by<br/>the Seasons</div>
            <p>Come with family & feel the joy of mouthwatering food</p>
            <div className="link link-btn">
            <a className="theme-btn btn-style-one clearfix" href=""
            ><span className="btn-wrap"><span class="text-one">View our menu</span>
            <span className="text-two">View our menu</span></span></a>
            </div>
          </div>
          <div className="book-btn"><a class="theme-btn" href="/delici">
        <span className="icon"  style={{ transform: 'rotate(90deg)' }}>
         <img src={img4}/>  </span><span class="txt">book a table</span></a>
         </div>
        </div>
        <div className='img_2'>
          <img src={"https://mediacity.co.in/delici/static/media/slider-1.427b3237a3c8fa6857c0.jpg"} alt="" />
          <div className="text-overlay">
           <h2>Delightful Experience</h2>
           <div className="pattern-image">
            <img src="https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg" alt="mySvgImage"/>
            </div>
         
            <div className='text1'>Flavors Inspired by<br/>the Seasons</div>
            <p>Come with family & feel the joy of mouthwatering food</p>
            <div className="link link-btn">
            <a className="theme-btn btn-style-one clearfix" href=""
            ><span className="btn-wrap"><span class="text-one">View our menu</span>
            <span className="text-two">View our menu</span></span></a>
            </div>
          </div>
          <div className="book-btn"><a class="theme-btn" href="/delici">
        <span className="icon"  style={{ transform: 'rotate(90deg)' }}>
         <img src={img4}/>  </span><span class="txt">book a table</span></a>
         </div>
        </div>
        <div className='img_3'>
          <img src={"https://mediacity.co.in/delici/static/media/slider-2.9451ac56da49c59fb729.jpg"} alt="" />
          <div className="text-overlay">
           <h2>Delightful Experience</h2>
           <div className="pattern-image">
            <img src="https://mediacity.co.in/delici/static/media/separator.fc5405c5995258e079d7072ed26a6975.svg" alt="mySvgImage"/>
            </div>
      <div className='next' onClick={nextSlide}>
      <div className='right__icon'>
        <FaAngleRight/>
      </div>
          </div>
          <div className="book-btn"><a class="theme-btn" href="/delici">
        <span className="icon"  style={{ transform: 'rotate(90deg)' }}>
         <img src={img4}/>  </span><span class="txt">book a table</span></a>
         </div>
        </div>  
    </div>
  );
};

export default TestimonialCarousel;
