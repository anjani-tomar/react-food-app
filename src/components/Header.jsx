import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import './Header.css';
import './boot.css';
import './animation.css';
import './responsive.css';
import { useState, useEffect } from 'react';
import ToggleButton from './ToggleButton';
import { deliImg } from '../assets';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false)
  const controlNavbar = () => {
      if (window.scrollY > 250 ) {
          setShow(true)
      }else{
        setShow(false)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])
  return (
      <div className='main-header fixed-header header-down'>
        <div className={`header-top active ${show && 'hidden'}`}>
          <div className='auto-container'>
            <div className='inner clearfix'>
              <div className='top-left clearfix'>
                <ul className='top-info clearfix'>
                  <li><FaMapMarkerAlt /> Restaurant St, Delicious City, London 9578, UK <span className='after'></span></li>
                  <li><FaClock /> Daily : 8.00 am to 10.00 pm</li>
                </ul>
              </div>
              <div className='top-right clearfix'>
                <ul className='top-info clearfix'>
                  <li className='contect'><FaPhoneAlt /> +1194 556 8748<span className='after'></span></li>
                  <li className='mail'><FaMailBulk /> booking@restaurant.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='header-upper header-fixed'>
          <div className='auto-container'>
            <div className='main-box d-flex justify-content-between align-items-center flex-wrap'>
              <ToggleButton />
              <div class="logo-box">
                <div class="logo">
                <a title="Delici - Restaurants React Template" href="">
                 <img src={deliImg}/>
                </a>
                </div>
              </div>
             <div class="link link-btn">
              <Link to="/News">
              <a class="theme-btn btn-style-one clearfix" href="">
               <span class="btn-wrap">
                <span class="text-one">find a table</span>
                <span class="text-two">find a table</span>
               </span>
              </a>
              </Link>
             </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Header;
