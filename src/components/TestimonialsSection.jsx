import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TestimonialsSection.css';
import './animation.css';
import './responsive.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation'; 
import {  author_1, author_2, author_3 } from '../assets';
import SwiperCore from 'swiper'; 
SwiperCore.use([Navigation , Pagination]);

const TestimonialsSection = () => {
  return (
    <section className='testimonials-section'>
      <div className='image-layer'></div>
        <div className='container'>   
        <div className="tstmonl-sec1">
          <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              className="mySwiper"
              loop={true}
            >
            <SwiperSlide> 
            <div className="quotes">”</div>
                <p>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.!</p>
                 
              </SwiperSlide>
              <SwiperSlide> 
              <div className="quotes">”</div>
              <p>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.!</p>
                
              </SwiperSlide>
              <SwiperSlide>
              <div className="quotes">”</div> 
              <p>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.!</p>
                
              </SwiperSlide>
              <SwiperSlide>
              <div className="quotes">”</div> 
              <p>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.!</p>
              </SwiperSlide>
              <SwiperSlide>
              <div className="quotes">”</div> 
              <p>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.!</p>
              
              </SwiperSlide>
              <SwiperSlide> 
              <div className="quotes">”</div>
              <p>I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.!</p>
               </SwiperSlide>
            </Swiper> 
          
         </div>   
         <div class="separator">
            <span></span><span></span><span></span>
        </div>
          <div className="tstmonl-sec">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true} 
              className="mySwiper"
              loop={true}
            >
              <SwiperSlide> 
                <img src={author_1} alt="menu"/>
              </SwiperSlide>
              <SwiperSlide> 
                <img src={author_2} alt="menu"/>
                 
              </SwiperSlide>
              <SwiperSlide> 
                <img src={author_3} alt="menu"/>
                 
              </SwiperSlide>
              <SwiperSlide> 
                <img src={author_1} alt="menu"/>
                 
              </SwiperSlide>
              <SwiperSlide> 
                <img src={author_2} alt="menu"/>
                 
              </SwiperSlide>
              <SwiperSlide> 
                <img src={author_3} alt="menu"/>
              </SwiperSlide>
            </Swiper> 
         </div> 
      </div>
    </section>
  )
}

export default TestimonialsSection