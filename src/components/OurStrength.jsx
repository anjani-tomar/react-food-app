import React from 'react';
import './animation.css';
import './responsive.css';
import './OurStrength.css'
import { bg7, bg8, logo1, mg4, mg5, mg6, mg7 } from '../assets';

const OurStrength = () => {
  return (
    <section className='why-us'>
    <div className='left-bg'><img src={bg8}/></div>
    <div className='right-bg'><img src={bg7}/></div>
    <div className='container'>
    <div className="title-box centered">
            <div className="subtitle">
              <span>Why Choose Us</span>
            </div>
            <div className="pattern-image">
              <img src={logo1} alt="logo"/>
            </div>
            <h2>Our Strength</h2>
    </div>
    <div className='row clearfix'>
        <div className='why-block col-xl-3 col-lg-6 col-md-6 col-sm-12'>
           <div class="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
            <div class="icon-box">
                <img src={mg4} alt=""/></div><h4>Hygienic Food</h4>
           <div class="text">Lorem Ipsum is simply dummy printing and typesetting.</div></div>
        </div>
        <div className='why-block col-xl-3 col-lg-6 col-md-6 col-sm-12'>
           <div class="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
            <div class="icon-box">
                <img src={mg5} alt=""/></div><h4>Hygienic Food</h4>
           <div class="text">Lorem Ipsum is simply dummy printing and typesetting.</div></div>
        </div>
        <div className='why-block col-xl-3 col-lg-6 col-md-6 col-sm-12'>
           <div class="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
            <div class="icon-box">
                <img src={mg6} alt=""/></div><h4>Hygienic Food</h4>
           <div class="text">Lorem Ipsum is simply dummy printing and typesetting.</div></div>
        </div>
        <div className='why-block col-xl-3 col-lg-6 col-md-6 col-sm-12'>
           <div class="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
            <div class="icon-box">
                <img src={mg7} alt=""/></div><h4>Hygienic Food</h4>
           <div class="text">Lorem Ipsum is simply dummy printing and typesetting.</div></div>
        </div>
    </div>
    </div>
    </section>
  )
}

export default OurStrength