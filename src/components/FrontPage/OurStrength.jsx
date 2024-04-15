import React from "react";
import "../animation.css";
import "../responsive.css";
import "./OurStrength.css";

import { bg7, bg8, logo1, mg4, mg5, mg6, mg7 } from "../../assets";
import "../boot.css";

const OurStrength = () => {
  const clients = [
    {
      logo: mg6,
      text: "Hygienic Food",
      paragraph: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      logo: mg7,
      text: "Fresh Environment",
      paragraph: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      logo: mg4,
      text: "Skilled Chefs",
      paragraph: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      logo: mg5,
      text: "Event & Party",
      paragraph: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
  ];
  const styles = {
    borderRadius: "58px",
    borderTop: "4px solid #450b0b",
    boxShadow: "0 2px 5px 0px #050505, 0px 3px 5px 0px #850000",
    transition: ".8s cubic-bezier(.22, .75, 1, 1)",
    marginBottom: "40px",
    padding: "30px 20px 40px 20px",
    maxWidth: "250px",
    marginLeft: "45px",
  };
  return (
    <section className="why-us">
      <div className="left-bg">
        <img src={bg8} />
      </div>
      <div className="right-bg">
        <img src={bg7} />
      </div>
      <div className="container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>Why Choose Us</span>
          </div>
          <div className="pattern-image">
            <img src={logo1} alt="logo" />
          </div>
          <h2>Our Strength</h2>
        </div>
        <div className="row clearfix">
          {clients.map((clients) => (
            <div key={clients} style={styles}>
              <div className="image1">
                {" "}
                <img src={clients.logo} />
              </div>
              <h2 className="client-text">{clients.text}</h2>
              <p className="para">{clients.paragraph}</p>
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
};

export default OurStrength;
