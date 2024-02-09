import React from 'react'
import './boot.css';
import './StorySection.css';
import{garlic, logo1} from '../assets'

const StorySection = () => {
  return (
    <section className='story-section'>
        <div className='left-bg'>
            <img src={garlic}/>
        </div>
        <div className='story_row'>
            <div className='row clearfix'>
                <div className='text-col col-xl-5 col-lg-5 col-md-12 col-sm-12'>
                    <div className='inner wow fadeInLeft'>
                        <div className='title-box centered'>
                        <div class="subtitle"><h2> Our story </h2></div>
                        <div className="pattern-image">
                         <img src={logo1}/>
                        </div>
                        <span className='text_1'>Every Flavor Tells a Story</span>
                        <div class="text">Lorem Ipsum is simply dummy text of the printingand 
                        typesetting industry lorem Ipsum has been the industrys standard dummy text ever since th
                        e when an unknown printer took a galley of type and scrambled it to make
                         a type specimen book It has survived not only five centuries, but also the leap into.
                         </div>
                         <div class="booking-info">
                            <div class="bk-title">Book Through Call</div>
                            <div class="bk-no"><a href="tel:+80-400-123456">+80 (400) 123 4567</a>
                            </div><div class="link-box">
                                <a class="theme-btn btn-style-two clearfix" href="#"><span class="btn-wrap">
                            <span class="text-one">Read More</span><span class="text-two">Read More</span></span></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StorySection