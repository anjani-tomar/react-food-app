import React from "react";
import "./Head.css";
import "../animation.css";
import "../responsive.css";

const Headchef = () => {
  return (
    <section className="intro-section quote">
      <div className="image-layer"></div>
      <div class="auto-container">
        <div class="content-box">
          <h3>
            A modern restaurant with a menu that will make your mouth water.
          </h3>
          <div class="separator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="auth-title">Henry - Master chef</div>
        </div>
      </div>
    </section>
  );
};

export default Headchef;
