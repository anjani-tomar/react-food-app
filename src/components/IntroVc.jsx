import React from 'react'
import './IntroVc.css';
import {  FaPlay } from "react-icons/fa";
import { logo1, video } from '../assets';
// import { useRef } from 'react';
import './animation.css';
import './responsive.css';
const IntroVc = () => {
  //  // Reference to the video element
  //  const videoRef = useRef(null);

  //  // Function to play the video
  //  const playVideo = () => {
  //    videoRef.current.play();
  //  };
 
  //  // Function to pause the video
  //  const pauseVideo = () => {
  //    videoRef.current.pause();
  //  };
  return (
    <section className='intro-section'>
      <div className='image-layer'></div>
      <div className='container'>
        <div className='content-box'>
        <div className="title-box centered">
          <div className="subtitle">
            <span>amazing experience</span>
          </div>
          <div className="pattern-image">
            <img src={logo1} alt="logo" />
          </div>
          <h2>Watch Our Video</h2>
        </div>
        <div className='play-btn'>
          <a href='https://youtu.be/ZETY_l3GVQg' className='lightbox-image theme-btn'>
            <span>
              <FaPlay className='playCircle'/>
              <i className='ripple'></i>
            </span>
          </a>
        </div>
       
        <div class="separator">
            <span></span><span></span><span></span>
        </div>
        <h3>
          A modern restaurant with a menu that will make your mouth water.
        </h3>
        <div className="auth-title">
          Willium Joe - Master chef
        </div>
      </div>
      <div className='fact-counter'>
        <div className="row clearfix">
        <div className="fact-block col-lg-3 col-md-6 col-sm-12">
          <div className="inner clearfix">
          <div className="fact-count"> 
            <div className="count-box">
              <span className="count-text">150</span>
              <i>+</i>
            </div>
          </div>
          <div className="fact-title">
            daily <br/>order
          </div>
        </div>
        </div>
        <div className="fact-block col-lg-3 col-md-6 col-sm-12">
          <div className="inner clearfix">
          <div className="fact-count"> 
            <div className="count-box">
              <span className="count-text">90</span>
              <i>+</i>
            </div>
          </div>
          <div className="fact-title">
          Special  <br/>Dishes
          </div>
        </div>
        </div>
        <div className="fact-block col-lg-3 col-md-6 col-sm-12">
          <div className="inner clearfix">
          <div className="fact-count"> 
            <div className="count-box">
              <span className="count-text">50</span>
              <i>+</i>
            </div>
          </div>
          <div className="fact-title">
            Expert  <br/>Chef
          </div>
        </div>
        </div>
        <div className="fact-block col-lg-3 col-md-6 col-sm-12">
          <div className="inner clearfix">
          <div className="fact-count"> 
            <div className="count-box">
              <span className="count-text">10</span>
              <i>+</i>
            </div>
          </div>
          <div className="fact-title">
            Awords <br/>Won
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>


    </section>
  )
}

export default IntroVc