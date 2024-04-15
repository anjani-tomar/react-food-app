import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";
import "./Header.css";
import "../animation.css";
import "../responsive.css";
import ToggleButton from "./ToggleButton";
import { deliImg } from "../../assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [show, setShow] = useState(true); 

  useEffect(() => { 
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(prevScrollY <currentScrollY || currentScrollY> 250); 
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div
      className={`main-header fixed-header ${
        show ? "header-up" : "header-down"
      }`}
    >
      <div className="header-top">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="top-left clearfix">
              <ul className="top-info clearfix">
                <li>
                  <FaMapMarkerAlt /> Restaurant St, Delicious City, London 9578,
                  UK <span className="after"></span>
                </li>
                <li>
                  <FaClock /> Daily : 8.00 am to 10.00 pm
                </li>
              </ul>
            </div>
            <div className="top-right clearfix">
              <ul className="top-info clearfix">
                <li className="contect">
                  <FaPhoneAlt /> +1194 556 8748<span className="after"></span>
                </li>
                <li className="mail">
                  <FaMailBulk /> booking@restaurant.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-upper header-fixed">
        <div className="auto-container">
          <div className="main-box d-flex justify-content-between align-items-center flex-wrap">
            <ToggleButton />
            <div className="logo-box">
              <div className="logo">
                <a title="Delici - Restaurants React Template" href="">
                  <img src={deliImg} alt="Delici Logo" />
                </a>
              </div>
            </div>
            <div className="link link-btn">
              <Link to="/News">
                <a className="theme-btn btn-style-one clearfix" href="">
                  <span className="btn-wrap">
                    <span className="text-one">find a table</span>
                    <span className="text-two">find a table</span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
