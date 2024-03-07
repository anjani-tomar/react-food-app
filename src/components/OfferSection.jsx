import React from 'react'
import './OfferSection.css';
import './boot.css';
import './animation.css';
import './responsive.css';

import {bouncingImg1, bouncingImg2, logo1, logo2, mg1, mg2, mg3} from '../assets';

const OfferSection = () => {
  return (
    <section className='we-offer-section'>
        <div className="left-bot-bg">
        <img src={bouncingImg1}/>
        </div>
        <div className="right-top-bg">
            <img src={bouncingImg2}/>
            </div>
            <div className='container'>
                <div className='title-box centered'>
                <div class="subtitle"><span>Flavors for royalty</span></div>
                <div class="pattern-image">
                    <img src={logo1}/>
                    </div>
                    <span className='text2'>We Offer Top Notch</span>
                    <div class="text">Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry lorem Ipsum has been the industrys standard 
                    dummy text ever.
                    </div>
                </div>
                <div className='row justify-content-center clearfix'>
                    <div className='offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                        <div className='inner-box wow fadeInUp' >
                            <div className='image'>
                                <img src={mg3}/>
                            </div>
                            <h2>Breakfast</h2>
                            <div class="more-link"><a href="#">view menu</a></div>
                            
                        </div>
                    </div>
                    <div className='offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                        <div className='inner-box wow fadeInUp' >
                            <div className='image'>
                                <img src={mg2}/>
                            </div>
                            <h2>Appetizers</h2>
                            <div class="more-link"><a href="#">view menu</a></div>
                            
                        </div>
                    </div>
                    <div className='offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                        <div className='inner-box wow fadeInUp' >
                            <div className='image'>
                                <img src={mg1}/>
                            </div>
                            <h2>Drinks</h2>
                            <div class="more-link"><a href="#">view menu</a></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
  )
}

export default OfferSection