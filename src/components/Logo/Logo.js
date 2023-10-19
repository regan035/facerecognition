import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import icon from "./icon.png";

const Logo = () => {
  return (
    <div className="ma4 mt0 shape">
      <Tilt className="tilt br2 shadow-2">
        <div>
          <img alt="icon" src={icon} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
