import React from "react";
import "./TeamHeader.css";
import { logo1 } from "../../assets";
import "../animation.css";
import "../responsive.css";

const TeamHeader = () => {
  return (
    <section className="inner-banner">
      <div className="image-layer img-fluid"></div>
      <div className="title-box centered">
        <div className="subtitle">
          <span>our Team</span>
        </div>
        <div className="pattern-image">
          <img src={logo1} alt="logo" />
        </div>
        <h2>Meet Our chef</h2>
      </div>
    </section>
  );
};

export default TeamHeader;
