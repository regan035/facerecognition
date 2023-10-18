import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0 shape">
      <Tilt className="tilt br2 shadow-2">
        <h1>React Parallax Tilt 👀</h1>
      </Tilt>
    </div>
  );
};

export default Logo;
