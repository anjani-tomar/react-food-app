import React from "react";
import "../animation.css";
import "../responsive.css";
import "./News.css";
import { logo1, newmg1, newmg2, newmg3 } from "../../assets";

const News = () => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>recent updates</span>
          </div>
          <div className="pattern-image">
            <img src={logo1} alt="logo" />
          </div>
          <h2> Upcoming Event </h2>
        </div>
        <div className="row justify-content-center clearfix">
          <div className="news-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image-box">
                <div className="date">
                  <span>15/09/2022</span>
                </div>
                <div className="image">
                  <a>
                    <img src={newmg1} />
                  </a>
                </div>
                <div className="over-content">
                  <div className="cat">Food, flavour</div>
                  <h4>
                    <a href="">
                      Flavour so good you’ll try to eat with your eyes.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="news-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image-box">
                <div className="date">
                  <span>1/03/2022</span>
                </div>
                <div className="image">
                  <a>
                    <img src={newmg2} />
                  </a>
                </div>
                <div className="over-content">
                  <div className="cat">Healthy, Food</div>
                  <h4>
                    <a href="">
                      Flavour so good you’ll try to eat with your eyes.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="news-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image-box">
                <div className="date">
                  <span>05/08/2022</span>
                </div>
                <div className="image">
                  <a>
                    <img src={newmg3} />
                  </a>
                </div>
                <div className="over-content">
                  <div className="cat">Recipie</div>
                  <h4>
                    <a href="">
                      Flavour so good you’ll try to eat with your eyes.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="link-box">
          <a className="theme-btn btn-style-two clearfix" href="#">
            <span className="btn-wrap">
              <span className="text-one">View our Blog</span>
              <span className="text-two">View our Blog</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
