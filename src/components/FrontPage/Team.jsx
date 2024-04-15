import React from "react";
import "../animation.css";
import "../responsive.css";
import "./Team.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import {
  bgteam1,
  bgteam2,
  logo1,
  teamimg1,
  teamimg2,
  teamimg3,
} from "../../assets";

const Team = () => {
  return (
    <section className="team-section">
      <div className="left-bg">
        <img src={bgteam1} />
      </div>
      <div className="right-bg">
        <img src={bgteam2} />
      </div>
      <div className="container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>experienced team</span>
          </div>
          <div className="pattern-image">
            <img src={logo1} alt="logo" />
          </div>
          <h2>Meet Our Chef</h2>
        </div>
        <div className="row justify-content-center clearfix">
          <div className="team-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image">
                <img src={teamimg1} />
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <ul className="social-box">
                      <li>
                        <a>
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaDribbble />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>Willium Joe</h3>
              <div className="designation">Master chef</div>
              <div className="text desc">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </div>
            </div>
          </div>
          <div className="team-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image">
                <img src={teamimg2} />
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <ul className="social-box">
                      <li>
                        <a>
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaDribbble />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>Willium Joe</h3>
              <div className="designation">Master chef</div>
              <div className="text desc">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </div>
            </div>
          </div>
          <div className="team-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="0ms"
            >
              <div className="image">
                <img src={teamimg3} />
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <ul className="social-box">
                      <li>
                        <a>
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaDribbble />
                        </a>
                      </li>
                      <li>
                        <a>
                          <FaLinkedinIn />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <h3>Willium Joe</h3>
              <div className="designation">Master chef</div>
              <div className="text desc">
                Lorem Ipsum is simply dummy printing and typeset industry lorem
                Ipsum has been the industrys.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
