import React from "react";
import "./Categories.css"; // Import the CSS file for styling
import plane from "../assets/iconsandlogos/plane.png";
import bus from "../assets/iconsandlogos/bus.png";
import train from "../assets/iconsandlogos/train.png";
import shop from "../assets/iconsandlogos/shop.png";
import awareness from "../assets/iconsandlogos/awareness.png";
import gift from "../assets/iconsandlogos/gift.png";
import healthinsurance from "../assets/iconsandlogos/health-insurance.png";
import tshirt from "../assets/iconsandlogos/t-shirt.png";

const Categories = () => {
  return (
    <div className="icon-container">
      <div className="icon-wrapper">
        <div className="icon-circle">
          <img src={plane} alt="Flights" className="icon" />
        </div>
        <p>Flights</p>
      </div>

      <div className="icon-wrapper">
        <div className="icon-circle">
          <img src={train} alt="Train" className="icon" />
        </div>
        <p>Train</p>
      </div>
      <div className="icon-wrapper">
        <div className="icon-circle">
          <img src={bus} alt="Transport" className="icon" />
        </div>
        <p>Bus</p>
      </div>
      <div className="icon-wrapper">
        <div className="icon-circle">
          <img src={shop} alt="Shopping" className="icon" />
        </div>
        <p>Shopping</p>
      </div>
      <div className="icon-wrapper">
        <div className="icon-circle">
          <img src={awareness} alt="Awareness" className="icon" />
        </div>
        <p>Awareness</p>
      </div>
      <div className="icon-wrapper">
        <div className="icon-circle">
          <img src={gift} alt="Gift" className="icon" />
        </div>
        <p>Gift</p>
      </div>
      <div className="icon-wrapper">
        <div className="icon-circle">
          <img src={healthinsurance} alt="Health Insurance" className="icon" />
        </div>
        <p>Health Insurance</p>
      </div>
      <div className="icon-wrapper">
        <div className="icon-circle">
          <img src={tshirt} alt="T-Shirt" className="icon" />
        </div>
        <p>T-Shirt</p>
      </div>
    </div>
  );
};

export default Categories;
