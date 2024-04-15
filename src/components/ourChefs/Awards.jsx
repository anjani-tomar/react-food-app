import React from "react";
import "./Awards.css";
import "../animation.css";
import "../responsive.css";

import { bgchef, chefsign, logo1, mainchef } from "../../assets";

const Awards = () => {
  return (
    <section className="chef-section">
      <div className="right-bg">
        <img src={bgchef} />
      </div>
      <div className="container">
        <div className="row clearfix">
          <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              className="inner wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image">
                <img src={mainchef} />
              </div>
            </div>
          </div>
          <div className="content-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div
              class="inner clearfix wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div class="content-box">
                <div class="title-box">
                  <div class="subtitle">
                    <span>35 year of experience</span>
                  </div>
                  <div class="pattern-image">
                    <img src={logo1} />
                  </div>
                  <h2>Award Winning Chef</h2>
                  <div class="text">
                    Lorem Ipsum is simply dummy text of the printingand
                    typesetting industry lorem Ipsum has been the industrys
                    standard dummy text ever since the when an unknown printer
                    took a galley of type.
                  </div>
                </div>
                <div class="info">
                  <div class="signature">
                    <img src={chefsign} />
                  </div>
                  <div class="author">Henry - EXCUTIVE CHEF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
