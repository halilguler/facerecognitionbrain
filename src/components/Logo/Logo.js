import React from "react";
import "./Logo.css";
import brain from './brain.png';
import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className="ma3 mt0">
      <Tilt
        className="Tilt shadow-2"
        options={{ max: 45 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa4">
          <img style={{paddingTop:'5px'}} src={brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
