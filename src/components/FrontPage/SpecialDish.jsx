import React from "react";
import "./SpecialDish.css";
import "../animation.css";
import "../responsive.css";
import { bg4, dish, img7, logo1, mg8 } from "../../assets";
const specialDish = () => {
  return (
    <section className="special-dish">
      <div className="bottom-image">
        <img src={img7} />
      </div>
      <div className="outer-container">
        <div className="row clearfix">
          <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              class="inner wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div class="image-layer"></div>
              <div class="image">
                <img src={mg8} />
              </div>
            </div>
          </div>
          <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="right-bg">
              <img src={bg4} />
            </div>
            <div
              className="inner wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div class="title-box">
                <span class="badge-icon">
                  <img src={dish} />
                </span>
                <div class="subtitle">
                  <span>Special dish</span>
                </div>
                <div class="pattern-image">
                  <img src={logo1} />
                </div>
                <h2>Lobster Tortellini</h2>
                <div class="text">
                  Lorem Ipsum is simply dummy text of the printingand
                  typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type.
                </div>
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
  );
};

export default specialDish;
