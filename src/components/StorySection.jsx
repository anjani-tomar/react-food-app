import React from 'react'
import './boot.css';
import './StorySection.css';
import './animation.css';
import './responsive.css';
import{circleimg, garlic, img5, img6, logo1} from '../assets'

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
                        <span className='text2'>Every Flavor Tells a Story</span>
                        <div class="text">Lorem Ipsum is simply dummy text of the printingand 
                        typesetting industry lorem Ipsum has been the industrys standard dummy text ever since th
                        e when an unknown printer took a galley of type and scrambled it to make
                         a type specimen book It has survived not only five centuries, but also the leap into.
                         </div>
                         <div className="booking-info">
                            <div className="bk-title ">Book Through Call</div>
                            <div className="bk-no"><a href="#">+80 (400) 123 4567</a>
                            </div>
                            <div className="link-box">
                                <a className="theme-btn btn-style-two clearfix" href="#"><span class="btn-wrap">
                            <span className="text-one">Read More</span>
                            <span className="text-two">Read More</span></span></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='image-col col-xl-5 col-lg-5 col-md-12 col-sm-12'>
                    <div className='inner wow fadeInRight'data-wow-duration="1500ms"data-wow-delay="0ms">
                        <div className='round-stamp'>
                            <div className='round-stamp-circle'>
                                <img src={circleimg}/>
                                <div className='circle-text'>
                                    <div className='circle-text2'>
                                        <span className='circle-since'>since</span><br/>
                                        <span className='circle-date'>1995</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='images parallax-scene-1'>
                            <div className='image'data-depth="0.15">
                                <img src={img5}/>
                            </div>
                            <div className='image'data-depth="0.15">
                                <img src={img6}/>
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