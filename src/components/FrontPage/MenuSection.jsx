import React, { useState } from "react";
import "./MenuSection.css";
import {
  bg5,
  bg6,
  logo1,
  menumg1,
  menumg2,
  menumg3,
  menumg4,
  menumg5,
  menumg6,
} from "../../assets";
import "../animation.css";
import "../responsive.css";

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showData, setShowData] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setShowData(index);
  };

  return (
    <section className="menu-section">
      <div className="left-bg">
        <img src={bg5} />{" "}
      </div>
      <div className="right-bg">
        <img src={bg6} />{" "}
      </div>
      <div className="container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>Special selection</span>
          </div>
          <div className="pattern-image">
            <img src={logo1} />
          </div>
          <h2>Delicious Menu</h2>
        </div>
        <div className="tabs-box menu-tabs">
          <div className="buttons">
            <ul className="tab-buttons clearfix">
              <li
                className={`tab-btn ${activeTab === 0 ? "active" : ""}`}
                onClick={() => handleTabClick(0)}
              >
                <span>MORNING</span>
              </li>
              <li
                className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                <span>WEEKDAY LUNCH</span>
              </li>
              <li
                className={`tab-btn ${activeTab === 2 ? "active" : ""}`}
                onClick={() => handleTabClick(2)}
              >
                <span>DINNER</span>
              </li>
              <li
                className={`tab-btn ${activeTab === 3 ? "active" : ""}`}
                onClick={() => handleTabClick(3)}
              >
                <span>WINES</span>
              </li>
            </ul>
          </div>
          <div className="tabs-content">
            {showData === 0 && ( 
              <div id="tab-1">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg1} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg2} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">
                                  Greek Salad
                                  <span class="s-info">SEASONAL</span>
                                </a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg3} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="after"></div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg4} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">
                                  Greek Salad<span class="s-info">NEW</span>
                                </a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg5} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg6} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showData === 1 && ( 
              <div id="tab-2">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg5} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg1} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg3} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="after"></div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg4} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg5} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg6} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showData === 2 && ( // Show content only when showData is 2
              <div id="tab-3">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg1} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg2} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg3} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="after"></div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg4} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg5} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg6} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showData === 3 && ( // Show content only when showData is 3
              <div id="tab-4">
                <div className="row clearfix">
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg1} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg2} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">
                                  Greek Salad
                                  <span class="s-info">SEASONAL</span>
                                </a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg3} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="after"></div>
                    </div>
                  </div>
                  <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg4} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">
                                  Greek Salad<span class="s-info">NEW</span>
                                </a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg5} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="dish-block">
                        <div className="inner-box">
                          <div className="dish-image">
                            <a href="#">
                              <img src={menumg6} />
                            </a>
                          </div>
                          <div class="title clearfix">
                            <div class="ttl clearfix">
                              <h5>
                                <a href="#">Greek Salad</a>
                              </h5>
                            </div>
                            <div class="price">
                              <span>$25.50</span>
                            </div>
                          </div>
                          <div class="text desc">
                            <a href="#">
                              Tomatoes, green bell pepper, sliced cucumber
                              onion, olives, and feta cheese.{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="open-timing">
          <div class="hours">
            During winter daily from
            <span class="theme_color">7:00 pm</span> to
            <span class="theme_color">9:00 pm</span>
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
    </section>
  );
};

export default MenuSection;
