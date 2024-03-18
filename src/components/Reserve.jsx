import React from "react";
import "./Reserve.css";
import { useState } from "react";
import "./animation.css";
import "./responsive.css";
import { FaAngleDown, FaCalendarAlt, FaClock, FaUserAlt } from "react-icons/fa";
const Reserve = () => {
  return (
    <section className="reserve-section">
      <div className="container">
        <div className="outer-box">
          <div className="row clearfix">
            <div className="reserv-col col-lg-8 col-md-12 col-sm-12">
              <div className="inner">
                <div className="title">
                  <h2>Online Reservation</h2>
                  <div class="request-info">
                    Booking request
                    <a href="#"> +88-123-123456 </a>
                    or fill out the order form
                  </div>
                </div>
                <div className="default-form reservation-form">
                  <form method="post " action="/">
                    <div className="row clearfix">
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            autoComplete="off"
                            name="fieldname"
                            placeholder="Your Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <div className="field-inner">
                          <input
                            type="text"
                            autoComplete="off"
                            name="fieldname"
                            placeholder="Your Number"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="form-group col-lg-4 col-md-4 col-sm-6">
                        <div className="field-inner">
                        
                          <div className="opt1">
                            <div className="alt-icon fa fa-user">
                              <FaUserAlt />
                            </div>
                            <select className="l-icon">
                              <option>1 person</option>
                              <option>2 person</option>
                              <option>3 person</option>
                              <option>4 person</option>
                              <option>5 person</option>
                            </select>
                          </div>    
                         
                        </div>
                      </div>
                      <div className="form-group col-lg-4 col-md-4 col-sm-6">
                        <div className="field-inner">
                          <div className="opt1">
                            <div className="alt-icon fa fa-user">
                              <FaCalendarAlt />
                              <FaAngleDown className="angle-down"/>
                            </div>
                            <input
                              class="l-icon datepicker"
                              type="text"
                              name="fieldname"
                              placeholder="     DD-MM-YYYY"
                              required=""
                              readonly=""
                            />
                          </div>
                           
                        </div>
                      </div>
                      <div className="form-group col-lg-4 col-md-4 col-sm-6">
                        <div className="field-inner">
                        <div className="opt1">
                            <div className="alt-icon fa fa-user">
                             < FaClock/>
                            </div>
                            <select class="l-icon">
                              <option>08 : 00 am</option>
                              <option>09 : 00 am</option>
                              <option>10 : 00 am</option>
                              <option>11 : 00 am</option>
                              <option>12 : 00 pm</option>
                              <option>01 : 00 pm</option>
                              <option>02 : 00 pm</option>
                              <option>03 : 00 pm</option>
                              <option>04 : 00 pm</option>
                              <option>05 : 00 pm</option>
                              <option>06 : 00 pm</option>
                              <option>07 : 00 pm</option>
                              <option>08 : 00 pm</option>
                              <option>09 : 00 pm</option>
                              <option>10 : 00 pm</option>
                            </select>
                            </div>
                        </div>
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <div className="field-inner">
                          <textarea
                            autoComplete="off"
                            name="fieldname"
                            placeholder="Message"
                            required=""
                          ></textarea>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <div className="link-box">
                        <a
                          className="theme-btn btn-style-two clearfix"
                          href="#"
                        >
                          <span className="btn-wrap">
                            <span className="text-one">View our menu</span>
                            <span className="text-two">View our menu</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="info-col col-lg-4 col-md-12 col-sm-12">
              <div className="inner">
                <div className="title">
                  {" "}
                  <h2>Contact Us</h2>
                </div>
                <div className="data">
                  <div className="booking-info">
                    <div className="bk-title">Booking request</div>
                    <div className="bk-no">
                      <a href="#">+88-123-123456</a>
                    </div>
                  </div>
                  <div class="separator">
                    <span></span>
                  </div>
                  <ul className="info">
                    <li>
                      <strong>Location</strong>
                      <br />
                      Restaurant St, Delicious City, London 9578, UK
                    </li>
                    <li>
                      <strong>Lunch Time</strong>
                      <br />
                      Monday to Sunday <br />
                      11.00 am - 2.30pm
                    </li>
                    <li>
                      <strong>Dinner Time</strong>
                      <br />
                      Monday to Sunday <br />
                      05.00 pm - 10.00pm
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
