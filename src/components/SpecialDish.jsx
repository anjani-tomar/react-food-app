import React from 'react'
import './SpecialDish.css';
import './animation.css';
import './responsive.css';
import { bg4, img7, logo1, mg8 } from '../assets'
const specialDish = () => {
  return (
    <section className='special-dish'>
        <div className="bottom-image">
          <img src={img7}/>
        </div>
        <div className='outer-container'>
            <div className='row clearfix'>
                <div className='image-col col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div class="inner wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="0ms">
                    <div class="image-layer"></div>
                    <div class="image"><img src={mg8}/></div>
                
                </div>
                       
                </div>
                <div className='content-col col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className="right-bg">
                    <img src={bg4}/>
                    </div>
                    <div className='inner wow fadeInRight'data-wow-duration="1500ms"data-wow-delay="0ms">
                        <div class="title-box">
                            <span class="badge-icon">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAApCAYAAAAmukmKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM1MDdBN0UxNTc2NDExRURBM0RGQkE2NDgzMzc3NEUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM1MDdBN0UyNTc2NDExRURBM0RGQkE2NDgzMzc3NEUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzUwN0E3REY1NzY0MTFFREEzREZCQTY0ODMzNzc0RTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzUwN0E3RTA1NzY0MTFFREEzREZCQTY0ODMzNzc0RTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vwxULAAABrUlEQVR42mJ8cnTCfwY6AiYGOgNGPl6eYe7DYR+HoxaOUAvnrDrEsGrbafpY+OnLd6CFhxlWb6eThSCfgSy9evsZWb5kIsd3MECOL1kIKXj8/B3DkxfvwfTOw1fAlsIAyJcNkzYyaKlIMchKCjHISAiCabIsBBneN28X2CJCQYwMQBYWJbkxuNvqkBakIA2hniYkBxlIDy7LCMZhSpgd2LXEApBakB6KEg2xlhJjGdGpNMzLlIGPhxOnPCjeiLGMaAsfP3+PkjqxpWRCiYskC6/eforCB/kW3cfHz9+lTj4EAVA+RE69oPj69OUHMNvshFuELwRIthAUXJaGyuB4AtEwMLc9EWwhqDBHdhTFbRpQiaKtKkWxGqLjkBiDiFEzWuOPWjhqIdUsvAbEnlB8jZYWvgHibCDWB+IdUKwPFXtDTQt/AXEvEKsC8TQg/oMk9wcqpgpV84tSC9eDSi0gLgHiD3jUfYCq0YbqIdlCUNw4AXEQEN8hIdjvQPU4AvF5YixEjqf9FCTGA0Bsii1+mZDioh9HPJEL/mKLXyak1FZEIJ7IBbD4NQTZBRBgAPuLrAfbsoDQAAAAAElFTkSuQmCC" alt="" title=""/>
                            </span><div class="subtitle"><span>Special dish</span></div>
                            <div class="pattern-image">
                                <img src={logo1}/>
                                </div><h2>Lobster Tortellini</h2><div class="text">Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.</div>
                        </div>
                        <div class="price">
                            <span class="old">$40.00</span> 
                            <span class="new">$20.00</span>
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
            </div>
        </div>
   
    </section>
  )
}

export default specialDish