import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SpecialOffer.css';
import './animation.css';
import './responsive.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation'; // Import navigation styles
import { logo1, menu_img_1, menu_img_2, menu_img_3, menu_img_4 } from '../assets';
import SwiperCore from 'swiper'; // Import Swiper core and required modules
SwiperCore.use([Navigation , Pagination]); // Initialize Swiper core modules
const SpecialOffer = () => {
  return (
    <section className='special-offer'>
      <div className='outer-container'>
        <div className='auto-container-1'> 
          <div className="title-box centered">
            <div className="subtitle">
              <span>Special Offer</span>
            </div>
            <div className="pattern-image">
              <img src={logo1} alt="logo"/>
            </div>
            <h2>Delicious Menu</h2>
          </div>
          <div className="menu">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={true} // Enable navigation
              className="mySwiper"
              loop={true}
            >
              <SwiperSlide className='mg'>
                <div className='inner-box'>
                  <div className='image'><a href='#'><img src={menu_img_1} alt="menu"/></a></div>
                  <h4><a href="#">Greek Salad</a></h4>
                  <div className='text desc'>Tomatoes, green bell pepper, sliced cucumber onion, olives...</div>
                  <div className="price">$95.00</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='inner-box'>
                  <div className='image'><a href='#'><img src={menu_img_3} alt="menu"/></a></div>
                  <h4><a href="#">Opu Fish</a></h4>
                  <div className='text desc'>Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$65.00</div>
                </div> 
              </SwiperSlide>
              <SwiperSlide className='mg'>
                 <div className='inner-box'>
                  <div className='image'><a href='#'><img src={menu_img_2} alt="menu"/></a></div>
                  <h4><a href="#">Butternut Pumpkin</a></h4>
                  <div className='text desc'>Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$20.00</div>
                </div> 
              </SwiperSlide>
              <SwiperSlide >
              <div className='inner-box'>
                  <div className='image'><a href='#'><img src={menu_img_4} alt="menu"/></a></div>
                  <h4><a href="#">Tokusen Wagyu</a></h4>
                  <div className='text desc'>Tomatoes, green bell pepper, sliced cucumber onion, olives...</div>
                  <div className="price">$45.00</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='mg'>
              <div className='inner-box'>
                  <div className='image'><a href='#'><img src={menu_img_1} alt="menu"/></a></div>
                  <h4><a href="#">Greek Salad</a></h4>
                  <div className='text desc'>Tomatoes, green bell pepper, sliced cucumber onion, olives...</div>
                  <div className="price">$95.00</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                 <div className='inner-box'>
                  <div className='image'><a href='#'><img src={menu_img_2} alt="menu"/></a></div>
                  <h4><a href="#">Tokusen Wagyu</a></h4>
                  <div className='text desc'>Tomatoes, green bell pepper, sliced cucumber onion, olives...</div>
                  <div className="price">$45.00</div>
                </div> 
              </SwiperSlide>
              <SwiperSlide className='mg'> 
                <div className='inner-box'>
                  <div className='image'><a href='#'><img src={menu_img_3} alt="menu"/></a></div>
                  <h4><a href="#">Opu Fish</a></h4>
                  <div className='text desc'>Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$65.00</div>
                </div> 
              </SwiperSlide>
              <SwiperSlide> 
                <div className='inner-box'>
                  <div className='image'><a href='#'><img src={menu_img_4} alt="menu"/></a></div>
                  <h4><a href="#">Tokusen Wagyu</a></h4>
                  <div className='text desc'>Tomatoes, green bell pepper, sliced cucumber onion, olives...</div>
                  <div className="price">$45.00</div>
                </div> 
              </SwiperSlide>
            </Swiper> 
          </div> 
            <div className="link-box">
              <a className="theme-btn btn-style-two clearfix" href="#">
               <span className="btn-wrap">
                <span className="text-one">View our menu</span>
                <span className="text-two">View our menu</span>
               </span>
              </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;









