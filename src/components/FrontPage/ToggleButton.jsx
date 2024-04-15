import React, { useState } from "react";
import { FaAngleDown, FaWindowClose } from "react-icons/fa";
import { deliImg } from "../../assets";
import "../responsive.css";
import "./ToggleButton.css";
import { Link } from "react-router-dom";

function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [homedropdownOpen, setHomeDropdownOpen] = useState(false);
  const [menudropdownOpen, setMenuDropdownOpen] = useState(false);
  const [pagedropdownOpen, setPageDropdownOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false); 
  };

  const handleHomeDropdownToggle = () => {
    setHomeDropdownOpen(!homedropdownOpen);
    setMenuDropdownOpen(false);
    setPageDropdownOpen(false);
  };
  const handleMenuDropdownToggle = () => {
    setMenuDropdownOpen(!menudropdownOpen);
    setHomeDropdownOpen(false);
    setPageDropdownOpen(false);
  };

  const handlePageDropdownToggle = () => {
    setPageDropdownOpen(!pagedropdownOpen);
    setHomeDropdownOpen(false);
    setMenuDropdownOpen(false);
  };

  return (
    <>
      <div className="links-box clearfix">
        <div className={`nav-toggler ${isOpen ? "opened" : ""}`}>
          <button className="hidden-bar-opener" onClick={handleToggleClick}>
            <span className="hamburger">
              <div className="bar fill1"></div>
              <div className="bar fill1"></div>
              <div className="bar fill1"></div>
            </span>
          </button>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={handleCloseSidebar}></div>}
      <section className={`hidden-bar ${isOpen ? "visible-sidebar" : ""}`}>
        <div className="inner-box">
          <div
            className="cross-icon hidden-bar-closer"
            onClick={handleCloseSidebar}
          >
            <span className="far fa-close">
              <FaWindowClose />
            </span>
          </div>
          <div className="logo-box">
            <a title="Delici - Restaurants HTML Template" href="/delici">
              <img src={deliImg} alt="Delici Restaurant" />
            </a>
          </div>
          <div className="side-menu">
            <ul className="navigation clearfix">
              <li className={`current dropdown ${
                  homedropdownOpen ? "active" : ""}`}
              >
                <a href="#" onClick={handleHomeDropdownToggle}>
                  Home
                  <FaAngleDown className="fa-angle" />
                </a>
                <ul style={{ display: homedropdownOpen ? "block" : "none" }}>
                  <li>
                    <a href="#">Home 1 Left Header</a>
                  </li>
                  <li>
                    <a href="#">Home 1 Center Header</a>
                  </li>
                  <li>
                    <a href="#">Home 3 Video Hero</a>
                  </li>
                </ul>
              </li>
              <li className={` dropdown ${menudropdownOpen ? "active" : ""}`}>
                <a href="#" onClick={handleMenuDropdownToggle}>
                  Menus
                  <FaAngleDown className="fa-angle" />
                </a>
                <ul style={{ display: menudropdownOpen ? "block" : "none" }}>
                  <li>
                    {" "}
                    <a href="#">Menu List 1</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">Menu List 2</a>
                  </li>
                  <li>
                    <a href="#">Menu List 3</a>
                  </li>
                  <li>
                    <a href="#">Menu List 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <Link to="/Team">
                  <a href="#">Our chefs</a>
                </Link>
              </li>
              <li className={` dropdown ${pagedropdownOpen ? "active" : ""}`}>
                <a href="#" onClick={handlePageDropdownToggle}>
                  Pages
                  <FaAngleDown className="fa-angle" />
                </a>
                <ul style={{ display: pagedropdownOpen ? "block" : "none" }}>
                  <li>
                    <a href="">Dropdown Menu 1</a>
                  </li>
                  <li>
                    <a href="">Dropdown Menu 2</a>
                  </li>
                  <li>
                    <a href="">Dropdown Menu 3</a>
                  </li>
                  <li>
                    <a href=""> Dropdown Lorem 5 </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/delici/contact"> Contact </a>
              </li>
            </ul>
          </div>
          <h2>Visit Us</h2>
          <ul className="info">
            <li>
              Restaurant St, Delicious City, <br/> London 9578, UK{" "}
            </li>
            <li>Open: 9.30 am - 2.30pm</li>
            <li>
              <a href="mailto:booking@domainame.com">booking@domainame.com</a>
            </li>
          </ul>
          <div className="separator">
            <span></span>
          </div>
          <div className="booking-info">
           <div className="bk-title">Booking request</div>
            <div className="bk-no">
              <a href="tel:+88-123-123456">+88-123-123456</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ToggleButton;
