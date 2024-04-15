import React from "react";
import "./Footer.css";
import "../animation.css";
import "../responsive.css";
import { deliImg } from "../../assets";
import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className="main-footer">
      <div className="image-layer"></div>
      <div className="upper-section">
        <div className="container">
          <div className="row clearfix">
            <div className="footer-col info-col col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="content">
                  <div className="logo">
                    <a>
                      <img src={deliImg} />
                    </a>
                  </div>
                  <div class="info">
                    <ul>
                      <li>Restaurant St, Delicious City, London 9578, UK</li>
                      <li>
                        <a href="mailto:booking@domainname.com">
                          booking@domainname.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+88-123-123456">
                          Booking Request : +88-123-123456
                        </a>
                      </li>
                      <li>Open : 09:00 am - 01:00 pm</li>
                    </ul>
                  </div>
                  <div class="separator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="newsletter">
                    <h3>Get News & Offers</h3>
                    <div class="text">
                      Subscribe us & Get
                      <span> 25% Off.</span>
                    </div>
                    <div className="newsletter-form">
                      <form method="post" action="/">
                        <div className="form-group">
                          <span className="alt-icon far fa-envelope">
                            <FaMailBulk />
                          </span>
                          <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required=""
                          />
                          <button
                            className="theme-btn btn-style-one clearfix"
                            type="submit"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">subscribe</span>
                              <span className="text-two">subscribe</span>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-col links-col col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <ul class="links">
                  <li>
                    {" "}
                    <a href="/">Home</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">Menus</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/">About us</a>
                  </li>

                  <li>
                    <Link to="/ourChefs">
                      <a href="#">Our Chefs</a>
                    </Link>
                  </li>

                  <li>
                    {" "}
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-col links-col last col-lg-3 col-md-6 col-sm-12">
              <div
                className="inner wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <ul class="links">
                  <li>
                    {" "}
                    <a href="https://www.facebook.com">facebook</a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.instagram.com">instagram</a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://twitter.com">Twitter</a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.youtube.com">Youtube</a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.google.com/maps">Google map</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
