import React, { useState } from "react";
import "./TestimonialCarousel.css"; // Assuming you have a separate CSS file
import { img4, logo1 } from "../../assets";
import "../responsive.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
const TestimonialCarousel = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const prevSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === 0 ? 2 : prevSlideNumber - 1
    );
  };

  const nextSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === 2 ? 0 : prevSlideNumber + 1
    );
  };

  return (
    <div className="main">
      <div className="slider" id="slider">
        <div className={slideNumber === 0 ? "slides current" : "slides"}>
          <div className="title-box centered">
            <div class="subtitle">
              <span>delightful experience</span>
            </div>
            <div class="pattern-image">
              <img src={logo1} />
            </div>
            <h1>
              Flavors Inspired by <br />
              the Seasons
            </h1>
            <div class="text">
              Come with family & feel the joy of mouthwatering food
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
        <div className={slideNumber === 1 ? "slides current" : "slides"}>
          <div className="title-box centered">
            <div class="subtitle">
              <span>delightful experience</span>
            </div>
            <div class="pattern-image">
              <img src={logo1} />
            </div>
            <h1>
              Flavors Inspired by <br />
              the Seasons
            </h1>
            <div class="text">
              Come with family & feel the joy of mouthwatering food
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
        <div className={slideNumber === 2 ? "slides current" : "slides"}>
          <div className="title-box centered">
            <div class="subtitle">
              <span>delightful experience</span>
            </div>
            <div class="pattern-image">
              <img src={logo1} />
            </div>
            <h1>
              Flavors Inspired by <br />
              the Seasons
            </h1>
            <div class="text">
              Come with family & feel the joy of mouthwatering food
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
      <div className="prev " onClick={prevSlide}>
        <div className="left__icon">
          <FaAngleLeft />
        </div>
      </div>
      <div className="next" onClick={nextSlide}>
        <div className="right__icon">
          <FaAngleRight />
        </div>
      </div>

      <div className="book-btn">
        <a class="theme-btn" href="#">
          <span className="icon">
            <img src={img4} />{" "}
          </span>
          <span class="txt">book a table</span>
        </a>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
