import React from 'react'
import "./animation.css";
import "./responsive.css";
import './FeaturedLinks.css';
import { slidermg, slidermg2, slidermg3 } from '../assets';
const FeaturedLinks = () => {
  return (
    <section className='featured-links'>
      <div className='outer-container'>
        <div className='row clearfix'>
          <div className='link-block col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
            <div className="text-block">
              <div className="bl-inner">
                <div className="content">
                  <div className="subtitle">best menu</div>
                   <h3>Special Dishes</h3>
                    <div className="text">Lorem Ipsum is simply dummy printing.</div>
                     <div className="link">
                      <a className="theme-btn" href="#">
                       <span>view menu</span>
                      </a>
                     </div>
                </div>
              </div>
            </div>
              <div className="image-box">
                <div className="image-layer"> <img src={slidermg}/></div>
              </div>
          </div>
          </div>
          <div className='link-block alternate col-xl-4 col-lg-4 col-md-6 col-sm-12'>
            <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
              <div className='image-box'>
                <div className='image-layer'><img src={slidermg3}/></div>
              </div>
              <div className="text-block">
                <div className="bl-inner">
                  <div className="content">
                    <div className="subtitle">Latest</div>
                    <h3>Upcoming Events</h3>
                    <div className="text">Simply dummy printing and setting.</div>
                    <div className="link">
                      <a className="theme-btn" href="/delici/menutwo"><span>join event</span></a>
                    </div>
                  </div>
                </div>
              </div>              
            </div>
          </div>
          <div className='link-block col-xl-4 col-lg-4 col-md-6 col-sm-12'>
          <div className="inner wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
            <div className="text-block">
              <div className="bl-inner">
                <div className="content">
                  <div className="subtitle">selected</div>
                   <h3>Chef Choice</h3>
                    <div className="text">Dummy printing lorem Ipsum simply.</div>
                     <div className="link">
                      <a className="theme-btn" href="#">
                       <span>view menu</span>
                      </a>
                     </div>
                </div>
              </div>
            </div>
              <div className="image-box">
                <div className="image-layer"><img src={slidermg2}/> </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedLinks